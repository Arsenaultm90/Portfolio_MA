import Navbar from './navbar/Navbar';
import Menu from './menu/Menu';
import Dashboard from './dashboard/Dashboard';
import Work from './work/Work';
import Education from './education/Education';
import Contact from './contact/Contact';
import './App.scss';
import { useState } from 'react';

function App() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [btnState, setBtnState] = useState(false);
	const [winState, setWinState] = useState({
		projects: false,
		education: false,
		contact: false,
	});
	return (
		<div className='app'>
			<div className='sections'>
				<Dashboard winState={winState} setWinState={setWinState} />
				<Work winState={winState} setWinState={setWinState} />
				<Contact winState={winState} setWinState={setWinState} />
			</div>
			<Navbar
				menuOpen={menuOpen}
				setMenuOpen={setMenuOpen}
				btnState={btnState}
				setBtnState={setBtnState}
			/>
			<Menu
				menuOpen={menuOpen}
				setMenuOpen={setMenuOpen}
				btnState={btnState}
				setBtnState={setBtnState}
				setWinState={setWinState}
			/>
		</div>
	);
}

export default App;
