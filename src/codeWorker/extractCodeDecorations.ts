import Project, {Node, SourceFile, TypeGuards} from 'ts-simple-ast'
import {CodeWorkerRequest} from '../store/types'
import {lastRequest} from './codeWorker'
import {createProject} from './ts-simple-ast'

export interface Classification {
  startColumn: number
  startLineNumber: number
  endLineNumber: number
  endColumn: number
  kind: string
  parentKind?: string
  extra?: string[]
}

let classifications: Classification[] = []

export function extractCodeDecorations(data: CodeWorkerRequest, sourceFile?: SourceFile, project?: Project) {
  if (lastRequest && data.code === lastRequest.code && !lastRequest.disableJsxSyntaxHighLight) {
    return classifications
  }
  classifications = []

  if (!sourceFile || !project) {
    project = createProject([
      {
        fileName: 't1.tsx',
        content: data.code,
      },
    ])
    sourceFile = project.getSourceFiles().find(s => s.getFilePath().endsWith('t1.tsx'))!
  }
  addChildNodes(sourceFile, classifications, sourceFile, project)
  return classifications
}

function filterNonJsxRelatedNodes(n: Node) {
  return n.getKindName() !== 'SyntaxList'
}

function addChildNodes(node: Node, classifications: Classification[], sourceFile: SourceFile, project: Project) {
  const lines = sourceFile
    .getFullText()
    .split('\n')
    .map(line => line.length)
  node
    .getDescendants()
    .filter(filterNonJsxRelatedNodes)
    .forEach(node => {
      const parent = node.getParent()
      const parentKind = parent && parent.getKindName()
      const kind = node.getKindName()
      const extra = getExtra(node)
      getNodeRangesForMonaco(node, lines).forEach(r => {
        classifications.push({
          ...r,
          kind,
          parentKind,
          extra,
        })
      })
    })
}

function getExtra(node: Node) {
  const extras = []
  if (TypeGuards.isJsxTagNamedNode(node)) {
    extras.push(
      node
        .getTagNameNode()
        .getText()
        .match(/^[a-z]/)
        ? 'JSXIntrinsicElement'
        : 'JSXNonIntrinsicElement',
    )
  }
  const parent = node.getParent()
  if (parent && TypeGuards.isJsxTagNamedNode(parent)) {
    extras.push(
      parent
        .getTagNameNode()
        .getText()
        .match(/^[a-z]/)
        ? 'JSXIntrinsicElementChild'
        : 'JSXNonIntrinsicElementChild',
    )
  }
  return extras.length ? extras : undefined
}

function getNodeRangesForMonaco(node: Node, lines: number[]) {
  return getParentRanges(node).map(({start, end}) => {
    const {offset, line: startLineNumber} = getLineNumberAndOffset(start, lines, node)
    const {line: endLineNumber} = getLineNumberAndOffset(end, lines, node)
    return {
      startLineNumber,
      // Heads up : following sum fixes an error of original implementation when JSXText has multiple lines:
      endLineNumber: endLineNumber + (TypeGuards.isJsxText(node) && node.getText().includes('\n') ? -1 : 0),
      startColumn: start + 1 - offset,
      endColumn: end + 1 - offset,
    }
  })
}
function getLineNumberAndOffset(start: number, lines: number[], node: Node) {
  let line = 0
  let offset = 0
  while (offset + lines[line] < start) {
    offset += lines[line] + 1
    line += 1
  }
  return {line: line + 1, offset}
}
function getParentRanges(node: Node) {
  const ranges = []
  const [start, end] = [node.getStart(), node.getEnd()]
  let lastEnd = start
  node.forEachChild(child => {
    const [start, end] = [child.getStart(), child.getEnd()]
    ranges.push({
      start: lastEnd,
      end: start,
    })
    lastEnd = end
  })
  if (lastEnd !== end) {
    ranges.push({
      start: lastEnd,
      end,
    })
  }
  return ranges
}
