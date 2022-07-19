import Navbar from './navbar/Navbar';
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
	const [hoverState, setHoverState] = useState({ phone: false, email: false });

	return (
		<div className='app'>
			<div className='sections'>
				<Dashboard
					winState={winState}
					setWinState={setWinState}
					hoverState={hoverState}
					setHoverState={setHoverState}
				/>
				<Work winState={winState} setWinState={setWinState} />
				<Education winState={winState} setWinState={setWinState} />
				<Contact winState={winState} setWinState={setWinState} />
			</div>
			<Navbar
				menuOpen={menuOpen}
				setMenuOpen={setMenuOpen}
				btnState={btnState}
				setBtnState={setBtnState}
				setWinState={setWinState}
				hoverState={hoverState}
				setHoverState={setHoverState}
			/>
		</div>
	);
}

export default App;
