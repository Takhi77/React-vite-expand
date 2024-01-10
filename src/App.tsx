import { Menu } from "@features/menu";
import { Footer, Header } from "@features/ui";
import { AppProvider } from "contexts";
import GlobalStyle from "globalStyles";
import Router from "pages/router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <GlobalStyle />
        <Header />
        <Menu />
        <Router />
        <Footer />
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
