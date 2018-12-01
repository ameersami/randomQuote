import entities from 'entities';
import React from 'react';

import GradientBackground from './gradientBackground';
import QuoteCard from './quoteCard';

import GlobalStyles from '../utils/globalStyles';
import fetchHelper from '../utils/fetchHelper';

const GRADIENT_ENDPOINT = 'https://raw.githubusercontent.com/ghosh/uiGradients/master/gradients.json'
const QUOTE_ENDPOINT = 'http://www.quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1'

export default class Container extends React.Component{
  state = {
    content: "",
    author: "",
    color: {
      from: '#ffffff',
      to: "#000000"
    }
  }

  async getContent(){

    const gradient = await fetchHelper(GRADIENT_ENDPOINT, {cache: "no-cache"});
    const quote = await fetchHelper(QUOTE_ENDPOINT, {cache: "no-cache"});
    
    const randomColor = gradient[Math.floor(Math.random() * gradient.length)].colors;
    const color = {
      from : randomColor[0],
      to: randomColor[1]
    }

    this.setState({
      content: entities.decodeHTML(quote[0].content.replace(/<[^>]*>/gi, "")),
      author: entities.decodeHTML(quote[0].title),
      color
    });

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
        {this.state.content && this.state.author && <QuoteCard author={this.state.author} content={this.state.content} />}
        <GlobalStyles/>
      </GradientBackground>
    )
  }
}