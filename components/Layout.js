import React from 'react';
import { Container } from 'semantic-ui-react';
import Header from './Header';
import Head from 'next/head';

export default (props) => {

    return (

      <div>
        <Head>
            <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.0/dist/semantic.min.css"></link>
            <title>Kickstater | Ethereum</title>
        </Head>
        <Header />
        <Container>
          {props.children}
        </Container>

      </div>
    )
}
