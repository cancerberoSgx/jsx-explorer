import * as React from 'react'
import {examples} from '../examples/examples'
import {EDITOR_ACTION} from '../store/editor'
import {OPTIONS_ACTIONS} from '../store/options'
import {dispatch} from '../store/store'
import {State, Options, Theme, CompiledExplorerOptions, Layout} from '../store/types'
import {allThemes} from '../style/theme'
import {ForkRibbon} from './content/forkRibbon'
import {WhatsThis} from './content/whatsThis'
import {EditorExplorerMenu} from './editorExplorerMenu'
import {Component} from './util/component'
import {showInModal} from './util/showInModal'
import {THEME_AND_LAYOUT_ACTIONS} from '../store/theme'
import {COMPILED_ACTION} from '../store/compiled'
import {connect} from 'react-redux'

interface P {
  options: Options
  layout: Layout
  compiledOptions?: CompiledExplorerOptions
}

class Header_ extends Component<P> {
  render() {
    const theme = this.props.layout.theme
    const nextThemeName = theme.name === 'dark' ? 'noStyles' : theme.name === 'noStyles' ? 'light' : 'dark'
    const nextTheme = allThemes.find(t => t.name === nextThemeName)!

    return (
      <nav className="navbar is-fixed-top is-primary" role="navigation" aria-label="main navigation">
        <ForkRibbon />
        <div className="navbar-brand">
          <EditorExplorerMenu />

          <a
            role="button"
            className="navbar-burger burger is-large"
            aria-label="menu"
            aria-expanded="false"
            data-target="jsxExplorerNavbar"
            onClick={e => this.query('#jsxExplorerNavbar').classList.toggle('is-active')}>
            <span aria-hidden="true" onClick={e => this.query('#jsxExplorerNavbar').classList.toggle('is-active')} />
            <span aria-hidden="true" onClick={e => this.query('#jsxExplorerNavbar').classList.toggle('is-active')} />
            <span aria-hidden="true" onClick={e => this.query('#jsxExplorerNavbar').classList.toggle('is-active')} />
          </a>
        </div>

        <div id="jsxExplorerNavbar" className={`navbar-menu`}>
          <div className="navbar-start">
            <div className="navbar-item has-dropdown is-hoverable">
              <a
                className="navbar-link"
                onClick={e => e.currentTarget.nextElementSibling!.classList.toggle('collapsed')}>
                Examples
              </a>

              <div className="navbar-dropdown">
                {examples.map(example => (
                  <a
                    key={example.name}
                    className="navbar-item"
                    onClick={e => {
                      dispatch({type: EDITOR_ACTION.REQUEST_CODE_CHANGE, payload: {code: example.code}})
                    }}>
                    {example.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="navbar-item has-dropdown is-hoverable">
              <a
                className="navbar-link"
                onClick={e => e.currentTarget.nextElementSibling!.classList.toggle('collapsed')}>
                Options
              </a>
              <div className="navbar-dropdown">
                <a className="navbar-item">
                  <label className="content">
                    <input
                      checked={this.props.options.autoApply}
                      type="checkbox"
                      onChange={e =>
                        dispatch({
                          type: OPTIONS_ACTIONS.CHANGE_AUTO_APPLY,
                          payload: {autoApply: e.currentTarget.checked},
                        })
                      }
                    />
                    Auto apply
                  </label>
                </a>
                <a className="navbar-item">
                  <label className="content" title="update timeout in seconds">
                    <input
                      type="number"
                      value={this.props.options.updateTimeout}
                      onChange={e => {
                        if (e.currentTarget.valueAsNumber < 5) {
                          alert('Must be greater than 5 (in seconds)')
                          return
                        }
                        dispatch({
                          type: OPTIONS_ACTIONS.CHANGE_OTHER_OPTIONS,
                          payload: {updateTimeout: e.currentTarget.valueAsNumber},
                        })
                      }}
                    />
                    Update Timeout
                  </label>
                </a>

                <hr className="dropdown-divider" />

                <a className="navbar-item">
                  <label className="content">
                    <input
                      checked={this.props.compiledOptions && this.props.compiledOptions.disableElementsExplorer}
                      type="checkbox"
                      onChange={e =>
                        dispatch({
                          type: COMPILED_ACTION.CHANGE_EXPLORER_OPTIONS,
                          payload: {disableElementsExplorer: e.currentTarget.checked},
                        })
                      }
                    />
                    Disable Elements explorer
                  </label>
                </a>

                <a className="navbar-item">
                  <label className="content">
                    <input
                      checked={this.props.compiledOptions && this.props.compiledOptions.disableEditorBind}
                      type="checkbox"
                      onChange={e =>
                        dispatch({
                          type: COMPILED_ACTION.CHANGE_EXPLORER_OPTIONS,
                          payload: {disableEditorBind: e.currentTarget.checked},
                        })
                      }
                    />
                    Disable AST follow editor cursor
                  </label>
                </a>

                <a className="navbar-item">
                  <label className="content">
                    <input
                      checked={this.props.compiledOptions && this.props.compiledOptions.disableJSXSyntaxHighlight}
                      type="checkbox"
                      onChange={e =>
                        dispatch({
                          type: COMPILED_ACTION.CHANGE_EXPLORER_OPTIONS,
                          payload: {disableJSXSyntaxHighlight: e.currentTarget.checked},
                        })
                      }
                    />
                    Disable JSX Syntax Highlight
                  </label>
                </a>

                <a className="navbar-item">
                  <label className="content">
                    <input
                      checked={this.props.compiledOptions && this.props.compiledOptions.disableJsAstExplorer}
                      type="checkbox"
                      onChange={e =>
                        dispatch({
                          type: COMPILED_ACTION.CHANGE_EXPLORER_OPTIONS,
                          payload: {disableJsAstExplorer: e.currentTarget.checked},
                        })
                      }
                    />
                    Disable AST Explorer
                  </label>
                </a>

                <hr className="dropdown-divider" />

                <a className="navbar-item" onClick={e => showInModal(<WhatsThis />, "What's this?")}>
                  What's this
                </a>
              </div>
            </div>

            <div className="navbar-item has-dropdown is-hoverable">
              <a
                className="navbar-link"
                onClick={e => e.currentTarget.nextElementSibling!.classList.toggle('collapsed')}>
                Themes &amp; layout
              </a>
              <div className="navbar-dropdown">
                <a className="navbar-item">
                  <label className="content" title="update timeout in seconds">
                    <input
                      type="checkbox"
                      checked={this.props.layout.layout === 'vertical'}
                      onChange={e => {
                        dispatch({
                          type: THEME_AND_LAYOUT_ACTIONS.CHANGE_OTHER_PROPERTIES,
                          payload: {layout: e.currentTarget.checked ? 'vertical' : 'horizontal'},
                        })
                      }}
                    />
                    Vertical Layout
                  </label>
                </a>

                <hr className="dropdown-divider" />

                <a
                  className="navbar-item"
                  style={{
                    border: `2px solid ${nextTheme.colors.brand}`,
                    background: `${nextTheme.colors.bg}`,
                    color: `${nextTheme.colors.fg}`,
                  }}
                  onClick={e => dispatch({type: THEME_AND_LAYOUT_ACTIONS.CHANGE_THEME, theme: nextTheme})}>
                  Next theme: {nextThemeName}
                </a>
                <hr className="dropdown-divider" />
                {allThemes.map(t => (
                  <a
                    key={t.name}
                    className="navbar-item"
                    style={{
                      border: `2px solid ${t.colors.brand}`,
                      background: `${t.colors.bg}`,
                      color: `${t.colors.fg}`,
                    }}
                    onClick={e => {
                      dispatch({
                        type: THEME_AND_LAYOUT_ACTIONS.CHANGE_THEME,
                        theme: allThemes.find(t2 => t2.name === t.name)!,
                      })
                    }}>
                    Set {t.name} theme
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item has-dropdown is-hoverable">
              <a
                className="navbar-link"
                onClick={e => e.currentTarget.nextElementSibling!.classList.toggle('collapsed')}>
                Explorers
              </a>

              <div className="navbar-dropdown">
                <a
                  className="navbar-item"
                  onClick={e =>
                    dispatch({type: OPTIONS_ACTIONS.SELECT_EXPLORER, payload: {selectedExplorer: 'elements'}})
                  }>
                  Elements
                </a>
                <a
                  className="navbar-item"
                  onClick={e =>
                    dispatch({type: OPTIONS_ACTIONS.SELECT_EXPLORER, payload: {selectedExplorer: 'jsAst'}})
                  }>
                  AST
                </a>
                <a
                  className="navbar-item"
                  onClick={e =>
                    dispatch({type: OPTIONS_ACTIONS.SELECT_EXPLORER, payload: {selectedExplorer: 'jsxColors'}})
                  }>
                  Colors
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export const Header = connect((state: State) => ({
  options: state.options,
  layout: state.layout,
  compiledOptions: state.compiled.explorer,
}))(Header_)
