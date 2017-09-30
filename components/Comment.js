import React from 'react';
import * as Util from './util/actions';

const Comment = ({ comment }) => {
  const avatar = require(`../public/${comment.authorAvatar}`);

  return(
    <div className='comment-container'>
      <img src={`${avatar}`} />
      <div>
        <p
          className='author'
        ><span>{comment.author}</span> {Util.commentType(comment.nodeTypeString)}</p>
        <p className='title'>{comment.title}</p>
        <p className='time'>{Util.timeDiff(comment.postDate)}</p>
      </div>
    </div>

  )
}

export default Comment;
