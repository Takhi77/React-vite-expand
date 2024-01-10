import { Footer, Header } from "@features/ui";
import GlobalStyle from "globalStyles";
import Router from "pages/router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Router />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
