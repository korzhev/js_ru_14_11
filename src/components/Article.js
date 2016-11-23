import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'
import ArticlePT from '../PropTypesConsts/Article'

function Article(props) {
    const { article, toggleOpen } = props
    return (
        <section>
            <h3 onClick = {toggleOpen}>{article.title}</h3>
            {getBody(props)}
        </section>
    )
}

Article.propTypes = {
    article: ArticlePT.isRequired,
    toggleOpen: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired
}

function getBody(props) {
    const { article, isOpen } = props
    if (!isOpen) return null
    return (
        <div>
            <p>{article.text}</p>
            <CommentList comments = {article.comments} />
        </div>
    )
}


export default Article