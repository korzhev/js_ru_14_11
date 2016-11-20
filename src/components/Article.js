import React, { Component } from 'react';
import CommentList from './CommentList';

export default class Article extends Component {

  constructor() {
    super();
    this.state = {
      isOpen: false,
      isCommentsOpen: false,
    };
  }

  render() {
    const { article } = this.props;
    const commentLinkText = this.state.isCommentsOpen ? 'Hide' : 'Show';
    const commentBlock = this.state.isCommentsOpen ? <CommentList comments={article.comments} /> : null;
    const body = this.state.isOpen ?
      <section>
        <p>
          {article.text}
        </p>
        <a onClick={this.commentsHandlerClick}>
          {commentLinkText}
        </a>
        {commentBlock}
        <hr/>
      </section>
      : null;
    return (
      <section>
        <h3 onClick={this.handleClick}>{article.title}</h3>
        {body}

      </section>
    );
  }

  handleClick = ev => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  commentsHandlerClick = ev => {
    this.setState({
      isCommentsOpen: !this.state.isCommentsOpen,
    });
  }
}
