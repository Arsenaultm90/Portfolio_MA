import Navbar from './navbar/Navbar';
import Dashboard from './dashboard/Dashboard';
import Work from './work/Work';
import Education from './education/Education';
import Contact from './contact/Contact';
import User from './user/User';
import './App.scss';
import { useState, useEffect } from 'react';
import Div100vh from 'react-div-100vh';

function App() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [btnState, setBtnState] = useState(false);
	const [winLocation, setWinLocation] = useState({ x: 0, y: 0 });
	const [winState, setWinState] = useState({
		projects: false,
		education: false,
		contact: false,
		user: true,
	});
	const [hoverState, setHoverState] = useState({ phone: false, email: false });

	useEffect(() => {
		setWinLocation({ x: 0, y: 0 });
	}, [winState]);

	return (
		<Div100vh>
			<div className='app'>
				<div className='sections'>
					<Dashboard
						winState={winState}
						setWinState={setWinState}
						hoverState={hoverState}
						setHoverState={setHoverState}
					/>
					<Work
						winState={winState}
						setWinState={setWinState}
						winLocation={winLocation}
						setWinLocation={setWinLocation}
					/>
					<Education
						winState={winState}
						setWinState={setWinState}
						winLocation={winLocation}
						setWinLocation={setWinLocation}
					/>
					<Contact
						winState={winState}
						setWinState={setWinState}
						winLocation={winLocation}
						setWinLocation={setWinLocation}
					/>
					<User
						winState={winState}
						setWinState={setWinState}
						winLocation={winLocation}
						setWinLocation={setWinLocation}
					/>
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
		</Div100vh>
	);
}

export default App;
