import React from 'react';

import CommentList from './CommentList';
import Navbar from './Navbar';

const activity = require('../activity.json');

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { comments: {} }
  }

  componentDidMount(){
    /*
      If we were fetching information from a server then the function
      would look like this:

      let fetchedComments = fetchComments();

      if(fetchedComments.success === true){
        this.setState({comments: fetchedComments})
      }
    */

    let fetchedComments = activity;

    if(fetchedComments.success === true){
      this.setState({comments: fetchedComments})
    }
  }

  render(){
    return(
      <div className='App'>
        <Navbar />
        <CommentList comments={this.state.comments}/>
      </div>
    )
  }
}

export default App;
