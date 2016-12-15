import React from 'react';
import { Link } from 'react-router';

const About = () => (
  <div className="fullpage bg-black white" id="about">
    <div className="w-100 mw6 ph3 b">
      <header className="flex justify-between items-center mb4 f5">
        <Link className="dib pa2 bg-pink" to="/">&larr; Home</Link>
      </header>
      <h1 className="mt0 mb4 tl f1">Hello, World.</h1>
      <p className="b">This is the Launchpad about page.</p>
      <p>If you got here, then the routing works!</p>
    </div>
  </div>
);

export default About;
