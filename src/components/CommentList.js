import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addComment, loadComments } from '../AC/comments'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import NewCommentForm from './NewCommentForm'
import Loader from './Loader'

class CommentList extends Component {
    static propTypes = {
        // commentIds: PropTypes.array.isRequired,
        //from connect
        comments: PropTypes.array.isRequired,
        //from toggleOpen decorator
        isOpen: PropTypes.bool.isRequired,
        toggleOpen: PropTypes.func.isRequired
    }

    static defaultProps = {
        comments: []
    }


    componentWillReceiveProps(nextProps) {

        // this.props.loadComments(this.props.article.id)
        //в идеале еще проверить, не грузишь ли ты эти комменты сейчас
        if (nextProps.isOpen && !this.props.isOpen && !this.props.comments.every(c => !!c)) {
            this.props.loadComments(this.props.article.id)
        }
    }

    componentWillUpdate() {
        //console.log('---', 'CL will update')
    }


    render() {
        const { loading } = this.props
        if (loading) return <Loader/>
        return (
            <div>
                {this.getButton()}
                {this.getBody()}
            </div>
        )
    }


    getButton() {
        const { comments, isOpen, toggleOpen } = this.props
        if ( !comments.length) return <span>No comments yet</span>
        return <a href="#" onClick = {toggleOpen}>{isOpen ? 'hide' : 'show'} comments</a>
    }

    getBody() {
        const { article, comments, isOpen, addComment, loading } = this.props
        const commentForm = <NewCommentForm articleId = {article.id} addComment = {addComment} />
        if (!isOpen || !comments.length || !comments.every(c => !!c)) return <div>{commentForm}</div>
        const commentItems = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
        return <div><ul>{commentItems}</ul>{commentForm}</div>
    }
}

export default connect((state, props) => ({
        comments: (props.article.comments || []).map(id => state.comments.get(id)),
        loading: props.article.commentsLoading,
    }),
  { addComment, loadComments }
)(toggleOpen(CommentList))
