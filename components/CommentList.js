import React from 'react';
import Comment from './Comment';

class CommentList extends React.Component {
  constructor(props){
    super(props);

    this.state = { comments: this.props.comments };
  }

  render(){
    return(
      <div>

        {this.state.comments.data.recentActivities.map((comment) => {
          return(<Comment key={comment.nodeid} comment={comment}/>)
        })}

      </div>
    )
  }
}

export default CommentList;
