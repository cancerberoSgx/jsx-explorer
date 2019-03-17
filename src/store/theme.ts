import {Action, Reducer} from 'redux'
import {lightTheme} from '../style/theme'
import {Layout, Theme, LayoutType} from './types'
import {all, call, put, select, takeEvery} from 'redux-saga/effects'
import {registerStyle} from '../style/styles'
import {jsxColorSkins} from '../components/explorer/jsxColors/skinsData'
import {buildCssForSkin} from '../components/explorer/jsxColors/jsxColorsCssBuilder'
import {getMonacoInstance, installEditor} from '../monaco/monaco'

const initialState = {
  theme: lightTheme,
}

export enum THEME_AND_LAYOUT_ACTIONS {
  CHANGE_THEME = 'THEME_ACTIONS_CHANGE_THEME',
  CHANGE_OTHER_PROPERTIES = 'THEME_ACTIONS_CHANGE_OTHER_PROPERTIES',
}

export const changeTheme: Reducer<Layout, ChangeThemeAction | ChangeOtherPropertiesAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case THEME_AND_LAYOUT_ACTIONS.CHANGE_THEME:
      return {...state, theme: action.theme}
    case THEME_AND_LAYOUT_ACTIONS.CHANGE_OTHER_PROPERTIES:
      return {...state, ...action.payload}
    default:
      return state
  }
}

interface ChangeThemeAction extends Action<THEME_AND_LAYOUT_ACTIONS.CHANGE_THEME> {
  type: THEME_AND_LAYOUT_ACTIONS.CHANGE_THEME
  theme: Theme
}

interface ChangeOtherPropertiesAction extends Action<THEME_AND_LAYOUT_ACTIONS.CHANGE_OTHER_PROPERTIES> {
  type: THEME_AND_LAYOUT_ACTIONS.CHANGE_OTHER_PROPERTIES
  payload: {layout?: LayoutType}
}

export type layoutActions = ChangeThemeAction | ChangeOtherPropertiesAction

function* watchThemeChange() {
  yield takeEvery(THEME_AND_LAYOUT_ACTIONS.CHANGE_THEME, function*(action: ChangeThemeAction) {
    const skin =
      action.theme.type === 'dark'
        ? jsxColorSkins.find(s => s.name === 'Default Dark')
        : jsxColorSkins.find(s => s.name === 'Default Light')
    const {styles} = buildCssForSkin(skin!)
    yield registerStyle(styles)
  })
}

function* watchChangeOtherProperties() {
  yield takeEvery(THEME_AND_LAYOUT_ACTIONS.CHANGE_OTHER_PROPERTIES, function*(action: ChangeOtherPropertiesAction) {
    if (action.payload.layout) {
      yield document.querySelector('#editorContainer')!.replaceWith(getMonacoInstance()!.getDomNode()!.parentNode!)
      getMonacoInstance()!.layout()
    }
  })
}

export function* themeSagas() {
  yield all([watchThemeChange(), watchChangeOtherProperties()])
}
