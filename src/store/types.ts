import {Classification} from '../codeWorker/extractCodeDecorations'
import {JsxColorsState} from '../components/explorer/jsxColors/jsxColorsTypes'
import {JsonImplOutputEl} from 'jsx-alone-core'

export interface State {
  readonly layout: Layout
  readonly editor: Editor
  readonly compiled: Compiled
  readonly options: Options
  readonly jsxColors: JsxColorsState
}

export interface Options {
  readonly logs: string[]
  readonly updateTimeout?: number
  readonly autoApply: boolean
  readonly selectedExplorer: ExplorerName
  readonly working: boolean
}

export type ExplorerName = 'editor' | 'elements' | 'jsAst' | 'jsxColors'

export type LayoutType = 'horizontal' | 'vertical'

export interface Layout {
  readonly theme: Theme
  readonly layout?: LayoutType
}

export interface Editor {
  readonly code: string
  readonly version: number
  readonly cursorPosition?: EditorCursorPosition
}

export interface EditorCursorPosition {
  lineNumber: number
  column: number
}

export type ThemeType = 'light' | 'dark'

export interface Theme {
  readonly name: string
  readonly type: ThemeType
  readonly colors: {
    readonly bg: Color
    readonly fg: Color
    readonly brand: Color
  }
}

export type Color = string
export type FontFamily = string
export type Size = string | {value: number; unit?: Unit}
export type Unit = 'em' | 'px'

export interface Compiled {
  response?: CodeWorkerResponse
  request: CodeWorkerRequest
  explorer?: CompiledExplorerOptions
}
export interface CompiledExplorerOptions {
  showDetailsOf?: CodeWorkerResponseJsxAsNode
  disableEditorBind?: boolean
  disableElementsExplorer?: boolean
  disableJSXSyntaxHighlight?: boolean
  disableJsAstExplorer?: boolean
}

export interface CodeWorkerResponse {
  version: number
  jsxSyntaxHighLight: {
    classifications: Classification[]
  }
  evaluate: {
    result?: JsonImplOutputEl
    error?: CodeWorkerError
    evaluated: string
  }
  jsxAst: CodeWorkerResponseJsxAst
  error?: CodeWorkerError
  totalTime: number
}
export interface EvaluateTimes {
  eval?: number
  render?: number
}
export interface CodeWorkerResponseJsxAst {
  diagnostics: CodeWorkerResponseJsxAstDiagnostic[]
  ast: CodeWorkerResponseJsxAsNode
}
export interface CodeWorkerRequest {
  code: string
  title: string
  version: number
  disableEvaluate?: boolean
  disableJsxAst?: boolean
  disableJsxSyntaxHighLight?: boolean
  jsxAst: CodeWorkerRequestJsxAst
}
export interface CodeWorkerRequestJsxAst {
  showDiagnostics?: boolean
  mode: 'forEachChild' | 'getChildren'
  nodeTextLength?: number
}
interface SelectableInMonaco {
  startColumn: number
  startLineNumber: number
  endColumn: number
  endLineNumber: number
}
export interface CodeWorkerResponseJsxAsNode extends SelectableInMonaco {
  type: string
  text: string
  kind: string
  start: number
  end: number
  children: CodeWorkerResponseJsxAsNode[]
}
export interface CodeWorkerResponseJsxAstDiagnostic extends SelectableInMonaco {
  message: string
  lineNumber: number | undefined
  start: number | undefined
  length: number | undefined
  code: number
}
export interface CodeWorkerError {
  message: string
  stack?: string
  name: string
}
export type CodeWorkerListener = (e: {data: CodeWorkerResponse}) => void
