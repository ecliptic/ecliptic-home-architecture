import {appStyle} from './Styles/App.js'
import React, {Component, PropTypes} from 'react'
import DocumentTitle from 'react-document-title'

import 'normalize.css'
import 'font-awesome/css/font-awesome.css'

export default class App extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  render () {
    const {children} = this.props
    return (
      <DocumentTitle style={appStyle}>
        {children}
      </DocumentTitle>
    )
  }
}
