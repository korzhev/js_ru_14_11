import React from 'react';

export default function Comment(props) {
  const { comment } = props;
  return (
    <section>
      <h5>{ comment.user }</h5>
      { comment.text }
    </section>
  );
}
