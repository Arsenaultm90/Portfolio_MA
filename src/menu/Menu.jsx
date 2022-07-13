import { useEffect, useRef } from 'react';
import './menu.scss';
import { blueMenu, resume, contact, education, work, user } from '../images';

export default function Menu({
	menuOpen,
	setMenuOpen,
	setWinState,
	setBtnState,
}) {
	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true);
	});

	const refOne = useRef(null);

	const handleClickOutside = (e) => {
		if (!refOne.current.contains(e.target)) {
			setMenuOpen(false);
		} else {
		}
	};

	const openWindow = (e) => {
		if (e.currentTarget.id === 'work') {
			setWinState({ projects: true, education: false, contact: false });
		} else if (e.currentTarget.id === 'education') {
			setWinState({ projects: false, education: true, contact: false });
		} else if (e.currentTarget.id === 'contact') {
			setWinState({ projects: false, education: false, contact: true });
		}
		setMenuOpen(false);
		setBtnState(false);
	};

	return (
		<div className={'menu ' + (menuOpen && 'active')} id='menu' ref={refOne}>
			<div className='blue'>
				<img src={blueMenu} alt='' />
			</div>
			<ul>
				<li>
					<img src={user} alt='' />
					<a href=''>User</a>
				</li>
				<li>
					<hr className='divider'></hr>
				</li>
				<li onClick={openWindow} id='work'>
					<img src={work} alt='' />
					<a href='#work'>Projects</a>
				</li>
				<li onClick={openWindow} id='education'>
					<img src={education} alt='' />
					<a href='#education'>Education</a>
				</li>
				<li onClick={openWindow} id='contact'>
					<img src={contact} alt='' />
					<a href='#contact'>Contact</a>
				</li>
			</ul>
		</div>
	);
}
