import React from 'react';
import { Link } from 'react-router';

const About = () => (
  <div className="fullpage bg-black white" id="about">
    <div className="w-100 mw6 ph3 bg-black-40">
      <Link className="pink db mv4 white relative" to="/">
        <img src="/marble.png" title="Alright, take us home." alt="Pixellated image of earth" className="db center br-100 dither" />
      </Link>
      <h1 className="mt0 mb4 f1 tl">Hello, World<span className="pink">.</span></h1>
      <p className="b">Launchpad is a starting point for <a href="https://massivesci.com/" target="_blank" rel="noopener noreferrer">Massive</a> applications.</p>
      <p>While Launchpad does not try to make assumptions about what kind of application you want to build, it does assume that you'll want to build it while following certain patterns. Therefore, it handles configuration and setup for a universal Javascript application with an API driven by the Feathers framework and a user interface driven by a combination of React and Redux.</p>
      <p>Another principle behind Launchpad is that getting started should be frictionless. Accordingly, it is build on top of Docker, which allows the site to be run for the first time in only a few minutes; every time after that, it will only take a few seconds.</p>
      <p>If you were able to make it to this page and everything has styling and images, then everything should be working okay. As a starting point, this page and the <Link to="/" className="underline">homepage</Link> are intended to test the functionality of Launchpad and ensure everything works. This page tests routing and CSS urls, while the homepage tests basic page rendering, image loading, and Redux functionality. Reload this page in order to test if universal routing &amp; rending is working. Finally, make a change to the state, actions, or components: if the page updates automatically, then hot reloading works as well! How's that for tools!</p>
      <p>I always like a tools section that's 1 paragraph long. How&rsquo;s that for complexity!</p>
      <hr />
      <p>Launchpad was developed by <a href="http://www.allanlasser.com" className="underline">Allan Lasser</a> for <a href="https://www.massivesci.com/" className="underline">Massive</a>.</p>
    </div>
  </div>
);

export default About;
