import Navbar from './navbar/Navbar';
import Dashboard from './dashboard/Dashboard';
import Work from './work/Work';
import Education from './education/Education';
import Contact from './contact/Contact';
import User from './user/User';
import './App.scss';
import { useState, useEffect } from 'react';
import Div100vh from 'react-div-100vh';
import JavascriptWindow from './javascriptWindow/JavascriptWindow';
import ReactWindow from './react/ReactWindow';

function App() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [btnState, setBtnState] = useState(false);
	const [winState, setWinState] = useState({
		projects: false,
		education: false,
		contact: false,
		user: true,
		jsWin: false,
		reactWin: false,
	});
	const [hoverState, setHoverState] = useState({ phone: false, email: false });

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
					<Work winState={winState} setWinState={setWinState} />
					<Education winState={winState} setWinState={setWinState} />
					<Contact winState={winState} setWinState={setWinState} />
					<User winState={winState} setWinState={setWinState} />
					<JavascriptWindow winState={winState} setWinState={setWinState} />
					<ReactWindow winState={winState} setWinState={setWinState} />
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
