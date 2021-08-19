import React from 'react';
import './App.css'
import About from './views/About';
import Landing from './views/Landing';
import Skills from './views/Skills';
import Experience from './views/Experience';
import Contact from './views/Contact';

const App = () => {
	return (
		<>
			<Landing />
			<About />
			<Skills />
			<Experience />
			<Contact />
		</>
	);
}

export default App;
