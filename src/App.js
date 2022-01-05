import {ThemeProvider} from 'styled-components'
import { Container } from "./components/styles/Container.styled";
import Header from "./components/Header";

function App() {

  const theme = {
    colors: {
      header: '#ebfbff',
      body: 'white',
      footer: '003333',

    },
  }

  return (
    <ThemeProvider theme = {theme}>
    <>
      <Header />
      <Container>hello</Container>
    </>
    </ThemeProvider>
  );
}

export default App;
