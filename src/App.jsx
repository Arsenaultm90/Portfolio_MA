import Navbar from './navbar/Navbar';
import Menu from './menu/Menu';
import Intro from './intro/Intro';
import Work from './work/Work';
import Education from './education/Education';
import Contact from './contact/Contact';
import './App.scss';
import { useState } from 'react';

function App() {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<div className='app'>
			<div className='sections'>
				<Intro />
			</div>
			<Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
		</div>
	);
}

export default App;
