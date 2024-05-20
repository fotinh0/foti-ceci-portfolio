import { useEffect } from "react";
import "./App.css";
import Homepage from "./components/Homepage";
import ReactGA from "react-ga";

// Initialize Google Analytics
ReactGA.initialize(import.meta.env.VITE_GA_TRACKING_ID);

function App() {
  useEffect(() => {
    // Track the initial page load
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <>
      <Homepage />
    </>
  );
}

export default App;
