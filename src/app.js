import React from 'react'
import { render } from 'react-dom'
import { articles } from './fixtures'
import App from './components/App'
import '../node_modules/semantic-ui-css/semantic.min.css'

render(<App articles = {articles} />, document.getElementById('container'))