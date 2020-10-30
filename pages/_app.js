import Head from "next/head";
import "../style/index.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          media="screen"
          href="https://fontlibrary.org/face/metropolis"
          type="text/css"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
