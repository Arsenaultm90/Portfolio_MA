import Navbar from './components/navbar/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import Work from './components/work/Work';
import Education from './components/education/Education';
import Contact from './components/contact/Contact';
import User from './components/user/User';
import './App.scss';
import { useState, createContext } from 'react';
import Div100vh from 'react-div-100vh';
import JavascriptWindow from './components/javascriptWindow/JavascriptWindow';
import ReactWindow from './components/react/ReactWindow';

export const WindowContext = createContext();

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
				<WindowContext.Provider value={{ winState, setWinState }}>
					<div className='sections'>
						<Dashboard hoverState={hoverState} setHoverState={setHoverState} />
						<Work />
						<Education />
						<Contact />
						<User />
						<JavascriptWindow />
						<ReactWindow />
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
				</WindowContext.Provider>
			</div>
		</Div100vh>
	);
}

export default App;
