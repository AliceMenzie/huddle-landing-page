import { ThemeProvider } from "styled-components";
import { Container } from "./components/styles/Container.styled";
import Header from "./components/Header";
import GlobalStyles from "./components/styles/Global";
import content from "./content";
import Card from "./Card";

function App() {
  const theme = {
    colors: {
      header: "#ebfbff",
      body: "white",
      footer: "003333",
    },
    mobile: "768px"

    
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) =>(
            <Card key={index} item={item}/>
              
          ))}
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
