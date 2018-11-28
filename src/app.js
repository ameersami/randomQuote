import React from 'react';
import ReactDOM from 'react-dom';

class TestComp extends React.Component{
  state = {
    bool: true
  }

  render(){
    return(
      <h1>
        Test Man
      </h1>
    )
  }
}

ReactDOM.render(<TestComp />, document.getElementById('app'));