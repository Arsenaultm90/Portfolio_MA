import { useEffect, useRef } from 'react';
import './menu.scss';
import { blueMenu, resume, contact, education, work, user } from '../images';

export default function Menu({ menuOpen, setMenuOpen }) {
	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true);
	});

	const refOne = useRef(null);

	const handleClickOutside = (e) => {
		if (!refOne.current.contains(e.target)) {
			setMenuOpen(false);
		} else {
			console.log('clicked Inside');
		}
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
				<li>
					<img src={work} alt='' />
					<a href='#work'>Projects</a>
				</li>
				<li>
					<img src={education} alt='' />
					<a href='#education'>Education</a>
				</li>
				<li>
					<img src={contact} alt='' />
					<a href='#contact'>Contact</a>
				</li>
			</ul>
		</div>
	);
}
