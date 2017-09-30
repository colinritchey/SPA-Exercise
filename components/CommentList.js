import React from 'react';
import Comment from './Comment';

class CommentList extends React.Component {
  constructor(props){
    super(props);

    this.state = { comments: this.props.comments };
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.comments.data !== this.props.comments.data){
      this.setState({comments: nextProps.comments})
    }
  }

  render(){
    let comments = this.state.comments;

    if(typeof comments.data === 'undefined'){
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
