import {printMs} from 'jsx-alone-core'
import {AnyAction, Store} from 'redux'
import {compiledActions} from './compiled'
import {editorActions, EDITOR_ACTION} from './editor'
import {JSXColorsActions, JSX_COLORS_ACTIONS} from './jsxColors'
import {optionsActions} from './options'
import {layoutActions} from './theme'
import {State} from './types'

export type ActionForType<T extends AllActions['type']> = AllActions extends infer R
  ? R extends AllActions
    ? T extends R['type']
      ? R
      : never
    : never
  : never

let _store: Store<State, AnyAction>
const storePromise = new Promise<Store>(resolve => {
  getStorePromiseResolve = resolve
})

let getStorePromiseResolve: (s: Store) => void

export function setStore(s: Store) {
  _store = s
  lastState = s.getState()
  getStorePromiseResolve(s)
}

export async function getState(): Promise<State> {
  const store = await storePromise
  return lastState || store.getState()
}

let lastState: State

export function dispatch(action: AllActions) {
  if (!shouldBeDispatched(action, lastState)) {
    console.log('** dispatch skipping  ' + action.type + ' because shouldBeDispatched is false')
    return
  }
  const t0 = Date.now()
  setTimeout(() => {
    _store.dispatch(action)
    setTimeout(() => {
      console.log(`** dispatch action ${action.type} took ${printMs(Date.now() - t0)}`)
      lastState = _store.getState()
    }, 0)
  }, 0)
}

/** For performance reasons, depending on current state some actions shouldnt be dispatched */
function shouldBeDispatched(action: AllActions, state: State) {
  if (action.type === EDITOR_ACTION.EDITOR_CHANGED_CURSOR_POSITION) {
    return (
      state.options.selectedExplorer === 'jsAst' &&
      (!state.compiled.explorer || !state.compiled.explorer!.disableEditorBind)
    )
  } else if (action.type === JSX_COLORS_ACTIONS.APPLY_SKIN_STYLES) {
    return state.options.autoApply && state.options.selectedExplorer === 'jsxColors'
  } else {
    return true
  }
}

export type AllActions = editorActions | optionsActions | compiledActions | JSXColorsActions | layoutActions
