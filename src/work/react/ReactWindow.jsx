import { useState, useEffect, useRef } from 'react';
import './reactwindow.scss';
import { reactIcon, reactIcon_highlight } from '../../images/index';

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
	};

	const backBtnClicked = () => {
		setSecWin({ target: '' });
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
							'link-item ' + `${state.active === 'vanilla' ? 'active' : ''}`
						}
						id='vanilla'
						ref={refIcon}
						onClick={clicked}
					>
						<img src={reactIcon} alt='' />
						<h4>React</h4>
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

export default ReactWindow;
