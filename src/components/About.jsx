import React from 'react';
import { Link } from 'react-router';

const About = () => (
  <div className="about">
    <p>This is the Launchpad about page.</p>
    <Link to="/">Home</Link>
  </div>
);

export default About;
