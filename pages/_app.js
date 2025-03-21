import { useEffect } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // 새로운 스타일 태그 생성
    const styleTag = document.createElement("style");
    styleTag.innerHTML = `
      body {
        background-color: black !important;
        color: white !important;
      }
    `;
    document.head.appendChild(styleTag);
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
