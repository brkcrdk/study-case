import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
	}
  html{
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  }
	a {
		text-decoration: none;
		cursor: pointer;
	}
  ul{
    list-style: none;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
  }
	button {
    border: none;
    background: none;
    cursor: pointer;
  }
  input{
    border: none;
  }
`;

export default GlobalStyle;
