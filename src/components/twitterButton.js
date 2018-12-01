import React from 'react';
import styled from 'styled-components';

const defaultSettings = {
  width: 525,
  height: 255,
  toolbar: 'no',
  location: 'no',
  directories:'no',
  status:'no',
  menubar:'no',
  scrollbars:'yes',
  copyhistory:'no',
  resizable:'yes'
};

const convertToAttributes = (str) => {
  return str.replace(/:/gi, "=").replace(/"|\}|\{/gi, "");
}

export default ({text, settings = {} }) => {
  settings = convertToAttributes(JSON.stringify({ ...defaultSettings, ...settings }));
  return(
    <Anchor onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, 'mywindow', settings)}
            href="#">

              <img src="/dist/Twitter_Bird.svg"/>
              Tweet

    </Anchor>
  );
}

const Anchor = styled.a`
  padding: 6px;
  background: #38A1F3;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  display: inline-flex;
  margin-top: 10px;

  & img{
    width: 12px;
    height: 19px;
    background: no-repeat;
    margin-right: 3px;
  }
`;