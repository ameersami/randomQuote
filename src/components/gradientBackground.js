import React from 'react';
import styled from 'styled-components';

export default (props ) => {
  return(
    <GradientBackground direction={props.direction} color={props.color}>
      <Title>{props.title}</Title>
      {props.children}
    </GradientBackground>
  );

};


const GradientBackground = styled.div`
    background: linear-gradient(
      ${props => props.direction ? props.direction + ', ' : ''}
      ${props => props.color ?  props.color.from + ' 0%, ' + props.color.to + ' 100%'  : 'white 100%, black 100%'}
    );
    height: 100%;
    width: 100%
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;

    & h1{
      margin: 0px;
    }
  `;

  const Title = styled.h1`
    color: white;
    font-size: 60px;
    position: absolute;
    top: 60px;
  `;

