import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import getQuote from './utils/retrieveQuote';
import getGradient from './utils/retrieveGradient';
import GradientBackground from './components/gradientBackground';
import GlobalStyles from './utils/globalStyles';
import 'reset-css';
import entities from 'entities';
import QuoteCard from './components/quoteCard';

class TestComp extends React.Component{
  state = {
    content: "",
    author: "",
    color: {
      from: '#fffff',
      to: "#00000"
    }
  }

  getContent(){

    getQuote()
      .then(data => {
        this.setState({
          content: entities.decodeHTML(data[0].content.replace(/<[^>]*>/gi, "")),
          author: entities.decodeHTML(data[0].title)
        });
      })
      .catch(err => console.log(err));

    getGradient()
      .then(data => {
        this.setState({
          color: data
        })
      })
      .catch(err => console.log(err));

  }

  componentDidMount(){
    this.getContent();
  }

  render(){
    return(
      <GradientBackground 
      color={this.state.color} 
      direction="to bottom right"
      title="Quote of the Day">
        <QuoteCard author={this.state.author} content={this.state.content} />
        <GlobalStyles/>
      </GradientBackground>
    )
  }
}

ReactDOM.render(<TestComp />, document.getElementById('app'));