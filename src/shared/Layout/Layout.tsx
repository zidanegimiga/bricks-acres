import React from 'react';
import Head from 'next/head';
import {useRouter} from 'next/router';
import Nav from '../Nav';
import Footer from 'shared/Footer';

const Layout = ({children, pageMeta}) =>{
    const router = useRouter();
    
    const meta = {
      title: 'Bricks and Acres',
      description: 'Bricks and Acres is a digital platform that redefines the real estate landscape',
      url: 'https://www.bricksandacres.io',
      type: 'website',
      ...pageMeta,
    };

    return(
        <>
          <Head>
            <title>{meta.title}</title>
            <link rel="icon" href="/favicon.png" />
            <meta name="description" content={meta.description} key="title" />
            <meta property="og:url" content={`http://localhost:3000${router.asPath}`} key="url" />
            <meta property="og:type" content={meta.type} key="og:type" />           
            <meta property="og:title" content={meta.title} key="og:title" />        
            <meta property="og:description" content={meta.description} key="og:description" />
            {meta.date && <meta property="og:date" content={meta.date} key="og:date" />}
          </Head>
          <Nav/>
          <hr></hr>

          {children}

          <hr></hr>
          {router.pathname === '/contact' || <Footer />}
        </>
    )
}

export default Layout;