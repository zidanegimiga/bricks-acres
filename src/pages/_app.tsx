import { FC } from 'react';
import { AppProps } from 'next/app';
import Layout from 'shared/Layout';
import "../styles/index.scss";

const App:FC = ({ Component, pageProps }:AppProps) => {
  return(
    <>
      <Layout pageMeta={{}}>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default App;