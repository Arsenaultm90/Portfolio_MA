import { useState, useEffect, useRef } from 'react';
import './javascriptwindow.scss';
import { reactIcon, reactIcon_highlight, wordleIcon } from '../../images/index';

function JavascriptWindow({ secWin, setSecWin }) {
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
				case 'wordle':
					window.open('https://heartfelt-horse-f50b8d.netlify.app/', '_blank');
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

			default:
				break;
		}
	};

	const backBtnClicked = () => {
		setSecWin({ target: '' });
	};

	return (
		<section
			className={'js-window ' + (secWin.target === 'vanilla' ? 'open' : '')}
		>
			<div className='back-bar'>
				<button className='back-btn' onClick={backBtnClicked}>
					Back
				</button>
			</div>
			<div className='content-container'>
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
						<img src={wordleIcon} alt='' />
						<h4>Wordle Clone</h4>
					</li>
					<li
						className={
							'link-item ' + `${state.active === 'react' ? 'active' : ''}`
						}
						id='react'
						ref={refIcon}
						onClick={clicked}
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
						<img src={reactIcon} alt='' />
						<h4>React</h4>
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
			</div>
		</section>
	);
}

export default JavascriptWindow;
