import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadAllComments } from '../AC/comments'
import { Link } from 'react-router'

class CommentsAll extends Component {
    static propTypes = {
    }

    componentDidMount() {

        console.log(this.props)
        this.props.loadAllComments(this.props.page)
    }

    getBody() {
      const { comments } = this.props
      const commentItems = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
      return <ul>{commentItems}</ul>
    }

    pagination() {
        const { page, pages } = this.props
        let pList = [];
        for (let i = 1; i <= pages; i++){
            pList.push(
              <li key = {i}>
                <Link to = {`/comments/${i}`} className= {i == page ? "active" : ""}>{i}</Link>
              </li>
            )
        }
        return <ul>{pList}</ul>
    }

    render() {
        const { comments } = this.props
        const commentItems = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
        return (
            <div>
                {this.getBody()}
                {this.pagination()}
            </div>
        )
    }
}

export default connect((state, props) => {
  const page = +props.page;
  const comments = state.comments;
  console.log(state.comments)
  return {
    comments: comments.entities.slice((page-1), page * 5),
    pages: Math.ceil(comments.total / 5),
    page: state.comments.page
  }
}, { loadAllComments })(CommentsAll)