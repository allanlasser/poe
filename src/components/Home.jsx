import React from 'react';
import { Link } from 'react-router';

const Home = () => (
  <div className="fullpage cover bg-pink" id="home">
    <div className="w-100 mw6 ph3 b">
      <header className="flex justify-between items-center mb4 f5">
        <p className="ma0">Launchpad v1.0</p>
        <p className="ma0"><Link className="mr0 pa2 bg-black" to="/about">About &rarr;</Link></p>
      </header>
      <img src="/launchpad.png" className="mb4 db" />
      <h1 className="mt0 mb4 tl f1">Ready for liftoff.</h1>
    </div>
  </div>
);

export default Home;
