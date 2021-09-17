import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
	}
  html{
    font-family: 'Roboto', sans-serif;
  }
	a {
		text-decoration: none;
		cursor: pointer;
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
