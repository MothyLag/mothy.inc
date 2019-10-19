import React from 'react';
import Head from 'next/head';
import Nav from '../components/nav';
import './styles/main.scss';
const Home = () => (
  <div className="envelope">
    <Nav />
    <Head>
      <title>MothyLag</title>
      <link rel="icon" href="/caraML.png" />
    </Head>
    <div className="main"></div>
  </div>
);

export default Home;
