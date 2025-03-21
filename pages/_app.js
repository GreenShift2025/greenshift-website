import { useEffect } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.documentElement.style.setProperty("--background-color", "black");
    document.documentElement.style.setProperty("--text-color", "white");
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
