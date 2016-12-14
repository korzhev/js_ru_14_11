import React, { Component, PropTypes } from 'react'
import CommentsAll from '../components/CommentsAll'

class CommentsPage extends Component {
  static propTypes = {

  };

  render() {
    return (
      <div>
        <CommentsAll page={this.props.params.page} key = {this.props.params.page}/>
      </div>
    )
  }
}

export default CommentsPage
