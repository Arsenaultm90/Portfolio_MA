import { useRef, useState, useEffect } from 'react';
import './dashboard.scss';
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

function Intro() {
	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true);
	});
	const [state, setState] = useState({ active: '' });
	const refShortcut = useRef(null);

	const addHighlight = (e) => {
		const clicked = e.currentTarget.id;
		setState({ active: clicked });
	};

	const handleClickOutside = (e) => {
		if (!refShortcut.current.contains(e.target)) {
			setState(false);
		}
	};

	const doubleClickHandler = (e) => {};

	return (
		<section className='intro' id='intro'>
			<div className='intro-container'>
				<div
					className={
						'icon-container ' + `${state.active === 'work' ? 'active' : ''}`
					}
					id='work'
					onClick={addHighlight}
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
					ref={refShortcut}
				>
					<img
						src={state.active === 'resume' ? resume_highlight : resume}
						alt=''
					/>
					<h4>Resume</h4>
				</div>
			</div>
		</section>
	);
}

export default Intro;
