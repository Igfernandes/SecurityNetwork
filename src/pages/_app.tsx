import { Header } from "src/components/shared/Header";
import "../style/globals.css";
import type { AppProps } from "next/app";
import { Container } from "src/components/shared/Container";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Container>
        <Header />
        <Component {...pageProps} />
      </Container>
    </>
  );
}

export default MyApp;
