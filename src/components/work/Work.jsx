import React, { useState, useEffect, useRef, useContext } from 'react';
import { WindowContext } from '../../App';
import './work.scss';
import {
	work,
	closeBtn,
	reactIcon,
	reactIcon_highlight,
	jsIcon,
	jsIcon_highlight,
	nodeIcon,
	nodeIcon_highlight,
} from '../../images/index';

function Work() {
	const [state, setState] = useState({ active: '' });
	const { winState, setWinState } = useContext(WindowContext);
	const refIcon = useRef(null);

	// Check if clicked outside the target. Remove highlight if True
	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true);
		return () => {
			document.removeEventListener('click', handleClickOutside, true);
		};
	});

	const handleClickOutside = (e) => {
		if (!refIcon.current.contains(e.currentTarget)) {
			setState({ active: '' });
		}
	};

	// Check if target is clicked. If True then add the 'active' class to highlight
	const clicked = (e) => {
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
			e.currentTarget.id === 'vanilla'
				? setWinState({ projects: false, jsWin: true })
				: e.currentTarget.id === 'react'
				? setWinState({ projects: false, reactWin: true })
				: console.log('nothing clicked');
		}
	};

	// Close the window(component) if the X button is clicked
	const handleClose = () => {
		setWinState({ projects: false });
	};

	const dblClicked = (e) => {
		e.currentTarget.id === 'vanilla'
			? setWinState({ projects: false, jsWin: true })
			: e.currentTarget.id === 'react'
			? setWinState({ projects: false, reactWin: true })
			: console.log('What was clicked?');
	};

	return (
		<section className={'work ' + (!winState.projects && 'close')} id='work'>
			<div className='work-container'>
				<div className='title-bar'>
					<div className='left-side'>
						<img src={work} alt='' />
						<h4>Projects</h4>
					</div>
					<div className='right-side'>
						<button className='close-btn' onClick={handleClose}>
							<img src={closeBtn} alt='' />
						</button>
					</div>
				</div>
				<span className='divider'></span>
				<div className='content-container'>
					<ul className='link-container '>
						<li
							className={
								'link-item ' + `${state.active === 'vanilla' ? 'active' : ''}`
							}
							id='vanilla'
							ref={refIcon}
							onClick={clicked}
							onDoubleClick={dblClicked}
						>
							<img
								src={state.active === 'vanilla' ? jsIcon_highlight : jsIcon}
								alt=''
							/>
							<h4>JavaScript</h4>
						</li>
						<li
							className={
								'link-item ' + `${state.active === 'react' ? 'active' : ''}`
							}
							id='react'
							ref={refIcon}
							onClick={clicked}
							onDoubleClick={dblClicked}
						>
							<img
								src={state.active === 'react' ? reactIcon_highlight : reactIcon}
								alt=''
							/>
							<h4>React</h4>
						</li>
						<li
							className={
								'link-item ' + `${state.active === 'NodeJS' ? 'active' : ''}`
							}
							id='NodeJS'
							ref={refIcon}
							// onClick={clicked}
						>
							<img
								src={state.active === 'NodeJS' ? nodeIcon_highlight : nodeIcon}
								alt=''
							/>
							<h4>Node JS (In Progress)</h4>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}

export default Work;
