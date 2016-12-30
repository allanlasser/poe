import React from 'react';
import { Link } from 'react-router';

import LaunchChecklist from '../containers/LaunchChecklist';

const Home = () => (
  <div className="fullpage cover bg-pink pv4" id="home">
    <div className="w-100 mw6 ph3 b">
      <header className="flex justify-between items-center mb2 f5">
        <p className="ma0"><a href="https://github.com/worb/launchpad" target="_blank" rel="noopener noreferrer" className="white">Launchpad v1.0.0</a></p>
      </header>
      <Link className="pink db mb4 white relative" to="/about" id="launch-button">
        <p className="absolute tc">&larr; LAUNCH</p>
        <img src="/buttons.png" title="Ready when you are, commander." className="db dither" />
      </Link>
      <h1 className="mt0 mb4 tl f1">Ready for liftoff.</h1>
      <div className="mb1 bg-white-80 ba b--black-10 black launchChecklist">
        <p className="ma0 b pa3 bb b--black-10">Launch Checklist</p>
        <LaunchChecklist />
      </div>
    </div>
  </div>
);

export default Home;
