import React from 'react';
import Comment from './Comment';

export default function ComponentList(props) {
  const comments = props.comments || [];
  const commentsList = comments.map(comment =>
    <li key={comment.id}>
      <Comment comment={comment} />
    </li>);
  return commentsList.length ?
    (<ul>{ commentsList }</ul>) :
    (<p>No comments here!</p>);
}
