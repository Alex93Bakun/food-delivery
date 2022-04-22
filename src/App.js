import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import { Navbar } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
    </BrowserRouter>
  );
};

export default App;
