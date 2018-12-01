import React from 'react';
import styled from 'styled-components';
import TwitterButton from './twitterButton';

export default ({author, content}) => {
  return(
    <Card>
      <h1>
        {content}
      </h1>
      <span>{`- ${author}`}</span>
      <br/>
      <StyledTwitterButton text={content + ' - ' + author}/>
    </Card>
  );
}

const Card = styled.div`
  width: 50%;
  height: auto;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  text-align: center;
  margin-top: 4%;
`;

const StyledTwitterButton = styled(TwitterButton)`
  margin-top: 30px !important;
`