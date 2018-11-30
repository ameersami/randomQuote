import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
  @import url('https://fonts.googleapis.com/css?family=Varela+Round');
  @import url('https://fonts.googleapis.com/css?family=Montserrat|Varela+Round');
  
  body{
    height: 100vh;
    margin: 0;
    padding: 0;
    width: 100%;
    font-family: 'Varela Round', sans-serif;
  }

  #app{
    height: 100%
    width: 100%;
  }

  span{
    font-family: 'Montserrat', sans-serif;
  }

`;

export default GlobalStyle;
