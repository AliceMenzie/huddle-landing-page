import { ThemeProvider } from "styled-components";
import { Container } from "./components/styles/Container.styled";
import Header from "./components/Header";
import GlobalStyles from "./components/styles/Global";

function App() {
  const theme = {
    colors: {
      header: "#ebfbff",
      body: "white",
      footer: "003333",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>hello</Container>
      </>
    </ThemeProvider>
  );
}

export default App;
