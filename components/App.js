import React from 'react';

import CommentList from './CommentList';
import Navbar from './Navbar';

const activity = require('../activity.json');

class App extends React.Component {

  render(){
    return(
      <div className='App'>
        <Navbar />
        <CommentList comments={activity}/>
      </div>
    )
  }
}

export default App;
