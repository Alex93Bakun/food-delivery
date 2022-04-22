import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import { Feature, Footer, Hero, Products } from "./components";
import { productData, productDataTwo } from "./components/Products/data";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose your favorite" data={productData} />
      <Feature />
      <Products heading="Sweet Treats for you" data={productDataTwo} />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
