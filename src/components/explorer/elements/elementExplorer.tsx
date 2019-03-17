import {jsonImplOutputElAsHtml} from 'jsx-alone-core'
import * as React from 'react'
import {registerStyle} from '../../../style/styles'
import {escapeHtml, queryAll} from '../../../util/util'
import {Component} from '../../util/component'
import {Error} from '../../util/error'
import {showInModal} from '../../util/showInModal'
import {Node} from './elementExplorerNode'
import {isMobile} from '../../../util/media'
import {Compiled, State} from '../../../store/types'
import {connect} from 'react-redux'

interface P {
  compiled: Compiled
}
interface S {
  showDetailsOfEverything?: boolean
  collapseAllMode?: 'collapse' | 'expand' | undefined
}
registerStyle(`
.html-code-container {
  display: none;
}
.html-code-container.is-active {
  display: block
}
`)

class ElementExplorer_ extends Component<P, S> {
  render() {
    if (this.props.compiled.explorer && this.props.compiled.explorer.disableElementsExplorer) {
      return (
        <div className="content">
          <h3>Disabled</h3>
          <p>By configuration, disableElementsExplorer option is turned on so I'm disabled. </p>
        </div>
      )
    }

    const compiled = this.props.compiled.response
    if (compiled) {
      const {error, result, evaluated} = compiled.evaluate
      return (
        <div className="ElementExplorer content">
          {!isMobile() && <h3>Elements explorer</h3>}

          <p>
            This is a representation the output HTML when the code renders. Use the buttons to see details or the actual
            HTML output of each node.
          </p>

          <button
            className="button"
            title="See HTML code"
            onClick={e =>
              showInModal(
                <ElementNodeHtmlCodeModal
                  html={jsonImplOutputElAsHtml(result!)}
                  emittedJs={this.props.compiled.response!.evaluate.evaluated}
                />,
                'HTML',
              )
            }>
            HTML output of everything
          </button>

          <button
            className="button test-show-all-info"
            title="Details of everything"
            onClick={e =>
              this.setState({
                showDetailsOfEverything: !this.state.showDetailsOfEverything,
                collapseAllMode: !this.state.showDetailsOfEverything === true ? 'expand' : this.state.collapseAllMode,
              })
            }>
            {this.state.showDetailsOfEverything ? 'Hide' : 'Show'} details of everything
          </button>

          <button
            className="button"
            title="Collapse all"
            onClick={e =>
              this.setState({collapseAllMode: this.state.collapseAllMode !== 'collapse' ? 'collapse' : 'expand'})
            }>
            {this.state.collapseAllMode !== 'collapse' ? 'Collapse' : 'Expand'} everything
          </button>

          {!error && !!result && (
            <Node
              node={result}
              {...this.state}
              onShowHtml={html =>
                showInModal(
                  <ElementNodeHtmlCodeModal html={html} emittedJs={this.props.compiled.response!.evaluate.evaluated} />,
                  'HTML',
                )
              }
            />
          )}

          {!!error && <Error evaluated={evaluated} error={error} />}
        </div>
      )
    } else {
      return <div className="content" />
    }
  }
}

function ElementNodeHtmlCodeModal(props: {html: string; emittedJs: string}) {
  return (
    <div id="getHtmlCodeModalContent">
      <div className="tabs is-small is-boxed is-toggle">
        <ul>
          <li className="activatable html-code is-active">
            <a
              onClick={e => {
                queryAll('#getHtmlCodeModalContent .activatable').forEach(e => e.classList.remove('is-active'))
                queryAll('#getHtmlCodeModalContent .html-code').forEach(e => e.classList.add('is-active'))
              }}>
              Code
            </a>
          </li>
          <li className="activatable html">
            <a
              onClick={e => {
                queryAll('#getHtmlCodeModalContent .activatable').forEach(e => e.classList.remove('is-active'))
                queryAll('#getHtmlCodeModalContent .html').forEach(e => e.classList.add('is-active'))
              }}>
              HTML
            </a>
          </li>
          <li className="activatable emittedJs">
            <a
              onClick={e => {
                queryAll('#getHtmlCodeModalContent .activatable').forEach(e => e.classList.remove('is-active'))
                queryAll('#getHtmlCodeModalContent .emittedJs').forEach(e => e.classList.add('is-active'))
              }}>
              JavaScript
            </a>
          </li>
        </ul>
      </div>
      <div className="activatable html-code-container html-code is-active">
        <pre dangerouslySetInnerHTML={{__html: escapeHtml(props.html)}} />
      </div>
      <div className="activatable html-code-container html">
        <div className="content" dangerouslySetInnerHTML={{__html: props.html}} />
      </div>
      <div className="activatable html-code-container emittedJs">
        <pre className="content" dangerouslySetInnerHTML={{__html: props.emittedJs}} />
      </div>
    </div>
  )
}

export const ElementExplorer = connect((state: State) => ({
  compiled: state.compiled,
}))(ElementExplorer_)
