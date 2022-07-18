import React from 'react';
import { ThemeProvider } from 'react-bootstrap';

import Landing from './views/Landing';
import About from './views/About';
import Skills from './views/Skills';
import Experience from './views/Experience';
import Contact from './views/Contact';

const App: React.FC = () => {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <Landing />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </ThemeProvider>
  );
};

export default App;
