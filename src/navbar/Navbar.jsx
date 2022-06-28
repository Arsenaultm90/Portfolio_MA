import React from 'react';
import './navbar.scss';
import { BsFillPersonFill } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';

export default function Navbar() {
	return (
		<div className='navbar'>
			<div className='left-side'>
				<img src='' alt='' />
				<div className='itemContainer'>
					<BsFillPersonFill className='icon' />
					<h4>902-432-4145</h4>
				</div>
				<div className='itemContainer'>
					<IoMdMail className='icon' />
					<h4>Matthew.B.Arsenault@gmail.com</h4>
				</div>
			</div>
			<div className='right-side'></div>
		</div>
	);
}
