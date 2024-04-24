import { Menu } from "@features/menu";
import { Footer, Header } from "@features/ui";
import { AppProvider } from "contexts";
import GlobalStyle from "globalStyles";
import Loading from "pages/loading";
import Router from "pages/router";
import { Suspense } from "react";
import { useEffect, useState } from "react";

let fullfilled = false;
let promise: Promise<void> | null = null;

const useTimeout = (ms: number) => {
  if (!fullfilled) {
    throw (promise ||= new Promise((res: any) => {
      setTimeout(() => {
        fullfilled = true;
        res();
      }, ms);
    }));
  }
};

const Main = () => {
  useTimeout(500);
  return <div>Loaded</div>;
};

function App() {
  const [state, setState] = useState<string>("loading");

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setState("start");
  //   }, 3000);

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, []);

  // if (state === "loading") {
  //   return (
  //     <>
  //       <GlobalStyle />
  //       <Loading />
  //     </>
  //   );
  // }

  return (
    <AppProvider>
      <Suspense fallback={<Loading />}>
        <Main />
        {/* <GlobalStyle />
        <Header />
        <Menu />
        <Router />
        <Footer /> */}
      </Suspense>
    </AppProvider>
  );
}

export default App;
