import React from 'react';
import { Link } from 'react-scroll';

import Break from './Break';

const WelcomeText: React.FC = () => {
  return (
    <>
      <p className="text-white display-1 font-weight-bold">Hi, I'm Brandon</p>
      <Break />
      <p className="sub-text text-white h4">
        Front end developer with a passion for building elegant and modern React applications.
      </p>
      <br />
      <Link to="About" spy={true} smooth={true} duration={100}>
        <button className="home-button d-flex p-2">
          <p className="h5 white-text my-auto">Learn About Me</p>
          <i className="bi bi-arrow-right ms-1"></i>
        </button>
      </Link>
    </>
  );
};

export default WelcomeText;
