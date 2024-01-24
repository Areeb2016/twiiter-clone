import "./App.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { IStaticMethods } from "preline/preline";
import Home from "./pages/Home";

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

function App() {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  return <Home />;
}

export default App;
