import React from 'react';
import './navbar.scss';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';
import { startBtn } from '../images';

export default function Navbar({ menuOpen, setMenuOpen }) {
	return (
		<>
			<div className='navbar'>
				<div className='nav-container'>
					<div className='left-side'>
						<div className='links'>
							<button
								className={'resume-btn ' + (menuOpen && 'active')}
								onClick={() => {
									if (menuOpen) {
										setMenuOpen(false);
										console.log('setting false');
									} else {
										setMenuOpen(true);
										console.log('setting true');
									}
								}}
							>
								<img src={startBtn} alt='' />
							</button>
						</div>
					</div>
					<div className='logo'></div>
					<div className='right-side'>
						<div className='contact-container'>
							<div className='itemContainer'>
								<BsFillTelephoneFill className='icon' />
							</div>
							<div className='itemContainer'>
								<IoMdMail className='icon' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
