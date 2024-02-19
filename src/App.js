import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import { Element } from "react-scroll";

function App() {
  return (
    <Wrap>
      <Header />
      <Home />
      <Element name="2" className="element">
        <Skills />
      </Element>
      <Element name="3" className="element">
        <Works />
      </Element>
      <Element name="4" className="element">
        <Contact />
      </Element>
      <Footer />
    </Wrap>
  );
}

export default App;

const Wrap = styled.div`
  width: 100%;
`;
