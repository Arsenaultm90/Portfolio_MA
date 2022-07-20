import { useRef, useState, useEffect } from 'react';
import './dashboard.scss';
import resumePDF from '../files/MattArsenault_Resume.pdf';
import {
	work,
	education,
	contact,
	resume,
	resume_highlight,
	work_highlight,
	education_highlight,
	contact_highlight,
} from '../images/index';
import Bubble from './bubble/Bubble';

function Intro({ winState, setWinState, hoverState, setHoverState }) {
	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true);
		return () => {
			document.removeEventListener('click', handleClickOutside, true);
		};
	});
	const [state, setState] = useState({ active: '' });
	const refShortcut = useRef(null);

	const addHighlight = (e) => {
		const clicked = e.currentTarget.id;
		setState({ active: clicked });
		if (
			navigator.userAgent.match(/Android/i) ||
			navigator.userAgent.match(/webOS/i) ||
			navigator.userAgent.match(/iPhone/i) ||
			navigator.userAgent.match(/iPad/i) ||
			navigator.userAgent.match(/iPod/i) ||
			navigator.userAgent.match(/BlackBerry/i) ||
			navigator.userAgent.match(/Windows Phone/i)
		) {
			if (e.currentTarget.id === 'work') {
				setWinState({
					projects: true,
					education: false,
					contact: false,
					user: false,
				});
				setState({ active: '' });
			} else if (e.currentTarget.id === 'education') {
				setWinState({
					projects: false,
					education: true,
					contact: false,
					user: false,
				});
				setState({ active: '' });
			} else if (e.currentTarget.id === 'contact') {
				setWinState({
					projects: false,
					education: false,
					contact: true,
					user: false,
				});
				setState({ active: '' });
			} else if (e.currentTarget.id === 'resume') {
				window.open(resumePDF, '_blank', 'fullscreen=yes');
				setState({ active: '' });
			}
		}
	};

	const handleClickOutside = (e) => {
		if (!refShortcut.current.contains(e.target)) {
			setState({ active: '' });
		}
	};

	//Open the clicked shortcut window and remove highlight
	const doubleClickHandler = (e) => {
		if (e.currentTarget.id === 'work') {
			setWinState({
				projects: true,
				education: false,
				contact: false,
				user: false,
			});
			setState({ active: '' });
		} else if (e.currentTarget.id === 'education') {
			setWinState({
				projects: false,
				education: true,
				contact: false,
				user: false,
			});
			setState({ active: '' });
		} else if (e.currentTarget.id === 'contact') {
			setWinState({
				projects: false,
				education: false,
				contact: true,
				user: false,
			});
			setState({ active: '' });
		}
	};

	const openResume = () => {
		window.open(resumePDF, '_blank', 'fullscreen=yes');
		setState({ active: '' });
	};

	return (
		<section className='intro' id='intro'>
			<div className='intro-container'>
				<div
					className={
						'icon-container ' + `${state.active === 'work' ? 'active' : ''}`
					}
					id='work'
					onClick={addHighlight}
					onDoubleClick={doubleClickHandler}
					ref={refShortcut}
				>
					<img src={state.active === 'work' ? work_highlight : work} alt='' />
					<h4>Projects</h4>
				</div>

				<div
					className={
						'icon-container ' +
						`${state.active === 'education' ? 'active' : ''}`
					}
					id='education'
					onClick={addHighlight}
					onDoubleClick={doubleClickHandler}
					ref={refShortcut}
				>
					<img
						src={state.active === 'education' ? education_highlight : education}
						alt=''
					/>
					<h4>Education</h4>
				</div>

				<div
					className={
						'icon-container ' + `${state.active === 'contact' ? 'active' : ''}`
					}
					id='contact'
					onClick={addHighlight}
					onDoubleClick={doubleClickHandler}
					ref={refShortcut}
				>
					<img
						src={state.active === 'contact' ? contact_highlight : contact}
						alt=''
					/>
					<h4>Contact</h4>
				</div>

				<div
					className={
						'icon-container ' + `${state.active === 'resume' ? 'active' : ''}`
					}
					id='resume'
					onClick={addHighlight}
					onDoubleClick={openResume}
					ref={refShortcut}
				>
					<img
						src={state.active === 'resume' ? resume_highlight : resume}
						alt=''
					/>
					<h4>Resume</h4>
				</div>
			</div>
			<Bubble hoverState={hoverState} setHoverState={setHoverState} />
		</section>
	);
}

export default Intro;
