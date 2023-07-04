import { Header } from "src/components/shared/Header";
import "../style/globals.css";
import type { AppProps } from "next/app";
import { NavigationProvider } from "src/contexts/Navigation";
import { Footer } from "src/components/shared/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NavigationProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </NavigationProvider>
  );
}

export default MyApp;
