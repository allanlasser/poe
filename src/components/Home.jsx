import React from 'react';
import { Link } from 'react-router';

const Home = () => (
  <div className="home">
    <p>This is the Launchpad home page.</p>
    <Link to="/about">About</Link>
  </div>
);

export default Home;
