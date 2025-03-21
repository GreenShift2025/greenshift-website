import { useEffect } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    setTimeout(() => {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    }, 100);
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
