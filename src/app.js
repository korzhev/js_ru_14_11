/* globals document */
import React from 'react';
import { render } from 'react-dom';
import { articles } from './fixtures';
import ArticleList from './components/ArticleList';
// import '../node_modules/semantic-ui-css/semantic.min.css';

render(<ArticleList articles={articles} />, document.getElementById('container'));
