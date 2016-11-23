import React, { PropTypes } from 'react'
import CommentPT from '../PropTypesConsts/Comment'

function Comment(props) {
    const { title, text, user } = props.comment
    const header = title && <h4>{title}</h4>
    return (
        <div>
            {header}
            <p>{text} <b>by {user}</b></p>
        </div>
    )
}

Comment.propTypes = CommentPT.isRequired

export default Comment