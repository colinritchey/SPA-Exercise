import React from 'react';
import * as Util from './util/actions';

const Comment = ({ comment }) => {
  let imageName = comment.authorAvatar.split('images/')[1] || '';
  const avatar = require(`../public/${comment.authorAvatar}`);
  return(
    <div className='comment-container'>
      <img src={`${avatar}`}  />
      <div>
        <p className='author'><span>{comment.author}</span> {Util.commentType(comment)}</p>
        <p className='title'>{comment.title}</p>
        <p className='time'>{Util.timeDiff(comment)}</p>
      </div>
    </div>

  )
}

export default Comment;
