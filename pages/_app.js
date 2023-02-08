import { Spline_Sans } from "@next/font/google";
import { Inter } from "@next/font/google";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.scss";
import { SSRProvider } from "@react-aria/ssr";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const spline_Sans = Spline_Sans({
  variable: "--spline_Sans-font",
  weight: ["400", "700", "500", "300"],
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--inter-font",
  subsets: ["cyrillic"],
});

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <SSRProvider>
      <div className={`${spline_Sans.variable} ${inter.variable}`}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </SSRProvider>
  );
}

export default MyApp;
