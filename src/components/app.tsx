import * as React from 'react'
import {connect} from 'react-redux'
import {State} from '../store/types'
import {Styles} from '../style/styles'
import {EditorExplorerBody} from './editorExplorerBody'
import {Header} from './header'
import {WhatsThis} from './content/whatsThis'
import {showInModal} from './util/showInModal'
import {isProduction} from '../util/util'

interface P {}

class App_ extends React.Component<P, {}> {
  componentDidMount() {
    if (isProduction()) {
      setTimeout(() => {
        showInModal(<WhatsThis />, 'Welcome to JSX Explorer')
      }, 2000)
    }
  }
  render() {
    return (
      <section className="section">
        <Styles />
        <Header />
        <EditorExplorerBody />
      </section>
    )
  }
}

const mapStateToProps = (state: State) => ({})

export const App = connect<{}>(mapStateToProps)(App_)
