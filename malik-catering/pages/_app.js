import "@/styles/globals.css";
import { ThemeProvider } from "../context/ThemeContext.js";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
