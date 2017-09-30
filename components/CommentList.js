import React from 'react';
import Comment from './Comment';

class CommentList extends React.Component {
  constructor(props){
    super(props);

    this.state = { comments: this.props.comments };
  }

  render(){
    if(typeof this.state.comments === 'undefined'){
      return(
        <div>

        </div>
      )
    } else {
      return(
        <div>

        {this.state.comments.data.recentActivities.map((comment) => {
          return(<Comment key={comment.nodeid} comment={comment}/>)
        })}

        </div>
      )
    }

  }
}

export default CommentList;
