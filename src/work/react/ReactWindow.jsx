import { useState, useEffect, useRef } from 'react';
import './reactwindow.scss';
import { movieAPI, movieAPI_highlight } from '../../images/index';

function ReactWindow({ secWin, setSecWin }) {
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
				case 'movieAPI':
					window.open(
						'https://isnt-arsenaultm90-awesome.netlify.app',
						'_blank'
					);
					break;

				default:
					break;
			}
			setState({ active: '' });
		}
	};

	const backBtnClicked = () => {
		setSecWin({ target: '' });
	};

	const openWindow = (e) => {
		switch (e.currentTarget.id) {
			case 'movieAPI':
				window.open('https://isnt-arsenaultm90-awesome.netlify.app', '_blank');
				break;

			default:
				break;
		}
	};

	return (
		<section
			className={'react-window ' + (secWin.target === 'react' ? 'open' : '')}
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
							'link-item ' + `${state.active === 'movieAPI' ? 'active' : ''}`
						}
						id='movieAPI'
						ref={refIcon}
						onClick={clicked}
						onDoubleClick={openWindow}
					>
						<img
							src={state.active === 'movieAPI' ? movieAPI_highlight : movieAPI}
							alt=''
						/>
						<h4>Movie Search API</h4>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default ReactWindow;
