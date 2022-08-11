import { useState, useEffect, useRef } from 'react';
import './javascriptwindow.scss';
import {
	wordleIcon,
	wordle_highlight,
	recipes,
	recipe_highlight,
	frontendExample,
	frontendExample_highlight,
	closeBtn,
	work,
} from '../images/index';

function JavascriptWindow({ winState, setWinState }) {
	// Check if clicked outside the target. Remove highlight if True
	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true);
		return () => {
			document.removeEventListener('click', handleClickOutside, true);
		};
	});

	const refIcon = useRef(null);
	const handleClickOutside = (e) => {
		if (!refIcon.current.contains(e.target)) {
			setState(false);
		}
	};

	// Close the window(component) if the X button is clicked
	const handleClose = () => {
		setWinState({ jsWin: false });
	};

	// Check if target is clicked. If True then add the 'active' class to highlight
	const [state, setState] = useState({ active: '' });

	const clicked = (e) => {
		console.log('clicked');
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
			switch (e.currentTarget.id) {
				case 'wordle':
					window.open('https://heartfelt-horse-f50b8d.netlify.app/', '_blank');
					setState({ active: '' });
					break;

				case 'recipe':
					window.open(
						'https://the-great-arsenaultm90-site.netlify.app',
						'_blank'
					);
					setState({ active: '' });
					break;

				case 'design-examples':
					window.open('https://frontend-examples.netlify.app/', '_blank');
					setState({ active: '' });
					break;

				default:
					break;
			}
		}
	};

	const openWindow = (e) => {
		switch (e.currentTarget.id) {
			case 'wordle':
				window.open('https://heartfelt-horse-f50b8d.netlify.app/', '_blank');
				break;

			case 'recipe':
				window.open(
					'https://the-great-arsenaultm90-site.netlify.app',
					'_blank'
				);
				break;

			case 'design-examples':
				window.open('https://frontend-examples.netlify.app/', '_blank');
				break;

			default:
				break;
		}
	};

	const backBtnClicked = () => {
		setWinState({ projects: true, jsWin: false });
	};

	return (
		<section className={'js-window ' + (winState.jsWin && 'open')}>
			<div className='js-container'>
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
				<div className='back-bar'>
					<button className='back-btn' onClick={backBtnClicked}>
						Back
					</button>
				</div>
				<div className='jscontent-container'>
					<ul className='link-container'>
						<li
							className={
								'link-item ' + `${state.active === 'wordle' ? 'active' : ''}`
							}
							id='wordle'
							ref={refIcon}
							onClick={clicked}
							onDoubleClick={openWindow}
						>
							<img
								src={state.active === 'wordle' ? wordle_highlight : wordleIcon}
								alt=''
							/>
							<h4>Wordle Clone</h4>
						</li>
						<li
							className={
								'link-item ' + `${state.active === 'recipe' ? 'active' : ''}`
							}
							id='recipe'
							ref={refIcon}
							onClick={clicked}
							onDoubleClick={openWindow}
						>
							<img
								src={state.active === 'recipe' ? recipe_highlight : recipes}
								alt=''
							/>
							<h4>Recipes API</h4>
						</li>
						<li
							className={
								'link-item ' +
								`${state.active === 'design-examples' ? 'active' : ''}`
							}
							id='design-examples'
							ref={refIcon}
							onClick={clicked}
							onDoubleClick={openWindow}
						>
							<img
								src={
									state.active === 'design-examples'
										? frontendExample_highlight
										: frontendExample
								}
								alt=''
							/>
							<h4>Design Examples</h4>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}

export default JavascriptWindow;
