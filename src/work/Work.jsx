import React, { useState, useEffect, useRef } from 'react';
import ReactWindow from './react/ReactWindow';
import JavascriptWindow from './javascriptWindow/JavascriptWindow';
import './work.scss';
import {
	work,
	closeBtn,
	reactIcon,
	reactIcon_highlight,
	jsIcon,
	nodeIcon,
} from '../images/index';

function Work({ winState, setWinState }) {
	const [secWin, setSecWin] = useState({ target: '' });
	// Check if clicked outside the target. Remove highlight if True
	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true);
	});

	const refIcon = useRef(null);
	const handleClickOutside = (e) => {
		if (!refIcon.current.contains(e.target)) {
			setState(false);
		}
	};

	// Check if target is clicked. If True then add the 'active' class to highlight
	const [state, setState] = useState({ active: '' });

	const clicked = (e) => {
		const clicked = e.currentTarget.id;
		setState({ active: clicked });
	};

	// Close the window(component) if the X button is clicked
	const handleClose = (e) => {
		setWinState({ projects: false });
		setSecWin({ target: '' });
	};

	const dblClicked = (e) => {
		const targetClick = e.currentTarget.id;
		setSecWin({ target: targetClick });
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
					<ul className={'link-container ' + (secWin.target !== '' && 'hide')}>
						<li
							className={
								'link-item ' + `${state.active === 'vanilla' ? 'active' : ''}`
							}
							id='vanilla'
							ref={refIcon}
							onClick={clicked}
							onDoubleClick={dblClicked}
						>
							<img src={jsIcon} alt='' />
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
							onClick={clicked}
						>
							<img src={nodeIcon} alt='' />
							<h4>Node JS</h4>
						</li>
						<li
							className={
								'link-item ' + `${state.active === 'game' ? 'active' : ''}`
							}
							id='game'
							ref={refIcon}
							onClick={clicked}
						>
							<img src={reactIcon} alt='' />
							<h4>React</h4>
						</li>
						<li
							className={
								'link-item ' + `${state.active === 'blah' ? 'active' : ''}`
							}
							id='blah'
							ref={refIcon}
							onClick={clicked}
						>
							<img src={reactIcon} alt='' />
							<h4>React</h4>
						</li>
					</ul>
					<ReactWindow secWin={secWin} setSecWin={setSecWin} />
					<JavascriptWindow secWin={secWin} setSecWin={setSecWin} />
				</div>
			</div>
		</section>
	);
}

export default Work;
