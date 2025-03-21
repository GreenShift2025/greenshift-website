import { useEffect } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    window.onload = () => {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    };
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;

