import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	*{
		margin: 0;
		padding: 0;
	}
	
	main {
		height: 100vh;
		width: 100vw;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
	}
`

export default GlobalStyle;