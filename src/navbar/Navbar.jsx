import React from 'react';
import './navbar.scss';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';

export default function Navbar() {
	return (
		<>
			<div className='navbar'>
				<div className='nav-container'>
					<div className='left-side'>
						<div className='contact-container'>
							<div className='itemContainer'>
								<BsFillTelephoneFill className='icon' />
							</div>
							<div className='itemContainer'>
								<IoMdMail className='icon' />
							</div>
						</div>
					</div>
					<div className='logo'></div>
					<div className='right-side'>
						<span className='vl'></span>
						<div className='links'>
							<button className='resume-btn'>Start</button>
						</div>
					</div>
				</div>
				<div className='links-container'>
					<ul>
						<li>
							<a href='#intro' className='link'>
								Home
							</a>
						</li>
						<li>
							<a href='#work' className='link'>
								Projects
							</a>
						</li>
						<li>
							<a href='#education' className='link'>
								Education
							</a>
						</li>
						<li>
							<a href='#contact' className='link'>
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}
