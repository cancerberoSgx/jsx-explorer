import * as React from 'react'
import {JSX_COLORS_ACTIONS} from '../../../store/jsxColors'
import {dispatch} from '../../../store/store'
import {registerStyle} from '../../../style/styles'
import {Component} from '../../util/component'
import {JsxColorsState} from './jsxColorsTypes'
import {jsxColorSkins} from './skinsData'

registerStyle(`
`)

interface P extends JsxColorsState {}
export class JsxColorSkins extends Component<P> {
  render() {
    if (!this.props.selected) {
      return (
        <div className="JsxColorsSkins content">
          {!this.props.selected && (
            <div>
              <h2>Select One</h2>
              <ul>
                {jsxColorSkins.map((s, i) => (
                  <li key={i}>
                    <h4>{s.name}</h4>
                    {s.description && <p>{s.description}</p>}
                    <button onClick={e => dispatch({type: JSX_COLORS_ACTIONS.SELECT_SKIN, payload: {selected: s}})}>
                      Select
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )
    } else {
      return <div>JsxColorsSkins IMPOSSIBLE</div>
    }
  }
}
