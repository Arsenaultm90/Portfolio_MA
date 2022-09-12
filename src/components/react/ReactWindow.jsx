import { useState, useEffect, useRef, useContext } from 'react';
import { WindowContext } from '../../App';
import './reactwindow.scss';
import {
	movieAPI,
	movieAPI_highlight,
	planet,
	closeBtn,
	work,
} from '../../images/index';

function ReactWindow() {
	// Check if clicked outside the target. Remove highlight if True
	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true);
		return () => {
			document.removeEventListener('click', handleClickOutside, true);
		};
	});

	const refIcon = useRef(null);
	const { winState, setWinState } = useContext(WindowContext);

	const handleClickOutside = (e) => {
		if (!refIcon.current.contains(e.target)) {
			setState(false);
		}
	};

	// Close the window(component) if the X button is clicked
	const handleClose = () => {
		setWinState({ reactWin: false });
	};

	// Check if target is clicked. If True then add thee 'active' class to highlight
	const [state, setState] = useState({ active: '' });

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
			switch (e.currentTarget.id) {
				case 'movieAPI':
					window.open(
						'https://isnt-arsenaultm90-awesome.netlify.app',
						'_blank'
					);
					break;

				case 'planet':
					window.open('https://banana-in-pajamas90.netlify.app/', '_blank');
					break;

				default:
					break;
			}
			setState({ active: '' });
		}
	};

	const backBtnClicked = () => {
		setWinState({ projects: true, reactWindow: false });
	};

	const openWindow = (e) => {
		switch (e.currentTarget.id) {
			case 'movieAPI':
				window.open('https://isnt-arsenaultm90-awesome.netlify.app', '_blank');
				break;

			case 'planet':
				window.open('https://banana-in-pajamas90.netlify.app/', '_blank');
				break;

			default:
				break;
		}
	};

	return (
		<section className={'react-window ' + (winState.reactWin && 'open')}>
			<div className='reactWin-container'>
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
				<div className='content-container'>
					<ul className='link-container'>
						<li
							className={
								'link-item ' + `${state.active === 'movieAPI' ? 'active' : ''}`
							}
							id='movieAPI'
							ref={refIcon}
							onClick={clicked}
							onDoubleClick={openWindow}
						>
							<img
								src={
									state.active === 'movieAPI' ? movieAPI_highlight : movieAPI
								}
								alt=''
							/>
							<h4>Movie Search API</h4>˙
						</li>
						<li
							className={
								'link-item ' + `${state.active === 'planet' ? 'active' : ''}`
							}
							id='planet'
							ref={refIcon}
							onClick={clicked}
							onDoubleClick={openWindow}
						>
							<img src={state.active === 'planet' ? planet : planet} alt='' />
							<h4>Planet Info</h4>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}

export default ReactWindow;
