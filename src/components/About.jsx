import React from 'react';
import { Link } from 'react-router';

const About = () => (
  <div className="fullpage bg-black white" id="about">
    <div className="w-100 mw6 pv4 ph3 bg-black-40">
      <header className="flex justify-between items-center mb4 f5">
        <Link className="dib pa2 bg-pink" to="/">&larr; Home</Link>
      </header>
      <h1 className="mt0 mb4 tl f1">Hello, World.</h1>
      <p className="b">Launchpad is a starting point for amazing applications.</p>
      <p>While Launchpad does not try to make assumptions about what kind of application you want to build, it does assume that you'll want to build it while following certain patterns. Therefore, it handles configuration and setup for a universal Javascript application with an API driven by the Feathers framework and a user interface driven by a combination of React and Redux.</p>
      <p>Another principle behind Launchpad is that getting started should be frictionless. Accordingly, it is build on top of Docker, which allows the site to be run for the first time in only a few minutes; every time after that, it will only take a few seconds.</p>
      <p>If you were able to make it to this page and everything has styling and images, then everything should be working okay. As a starting point, this page and the <Link to="/" className="underline">homepage</Link> are intended to test the functionality of Launchpad and ensure everything works. This page tests routing and CSS urls, while the homepage tests basic page rendering, image loading, and Redux functionality. Reload this page in order to test if universal routing &amp; rending is working. Finally, make a change to the source and if the page updates automatically then hot reloading works as well!</p>
    </div>
  </div>
);

export default About;
