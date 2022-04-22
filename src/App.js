import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import { Hero } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Hero />
    </BrowserRouter>
  );
};

export default App;
