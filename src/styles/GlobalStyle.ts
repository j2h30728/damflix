import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html,
body,
div,
span,
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  font-family: 'KOTRA_BOLD-Bold','Pretendard-Regular','Chewy', cursive, 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
body {
  line-height: 1;
  font-weight: 300;
  display:flex;
  justify-content: center;
  align-items:center;
  background-color: ${props => props.theme.color.background};
  color :  ${props => props.theme.color.text};
}
menu,
ol,
ul {
  list-style: none;
}
a {
  text-decoration:none;
  color:inherit;
}
`;

export default GlobalStyle;
