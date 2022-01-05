import { ThemeProvider } from "styled-components";
import { Container } from "./components/styles/Container.styled";
import Header from "./components/Header";
import GlobalStyles from "./components/styles/Global";
import content from "./content";
import Card from "./Card";
import Footer from "./components/Footer";
import CallToAction from "./components/CallToAction";

function App() {
  const theme = {
    colors: {
      header: "#ebfbff",
      body: "white",
      footer: "#003333",
    },
    // mobile: "768px"
    mobile: "645px"

    
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
        <CallToAction/>
        <Footer/>
      </>
    </ThemeProvider>
  );
}

export default App;
