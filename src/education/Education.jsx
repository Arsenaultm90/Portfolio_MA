import React from 'react';
import './education.scss';
import { education, closeBtn, udemy, camosun, nbcc } from '../images/index';

function Education({ winState, setWinState }) {
	const handleClose = (e) => {
		setWinState({ education: false });
	};
	return (
		<section
			className={'education ' + (!winState.education && 'close')}
			id='education'
		>
			<div className='education-container'>
				<div className='title-bar'>
					<div className='left-side'>
						<img src={education} alt='' />
						<h4>Education</h4>
					</div>
					<div className='right-side'>
						<button className='close-btn' onClick={handleClose}>
							{/* <img src={closeBtn} alt='' /> */}X
						</button>
					</div>
				</div>
				<span className='divider'></span>
				<div className='content-container'>
					<ul className='school-list'>
						<li className='school-item'>
							<img src={udemy} alt='' />
							<div className='text-container'>
								<h4>Udemy</h4>
								<p>CSS - The Complete Guide 2022</p>
								<p>JavaScript - The Complete Guide 2022</p>
								<p>React - The Complete Guide 2022</p>
								<p>The Comeplete Node.js Developer Course</p>
								<p>Redux & Material UI - !In Progress</p>
							</div>
						</li>
						<li className='school-item'>
							<img src={camosun} alt='' />
							<div className='text-container'>
								<h4>Camosun College</h4>
								<p>Graduated 12/2017</p>
								<p>Diploma - Electrical/Computer Engineering Technologist</p>
								<p>Final Project - Self-Monitoring Composting System</p>
							</div>
						</li>
						<li className='school-item'>
							<img src={nbcc} alt='' />
							<div className='text-container'>
								<h4>New Brunswick Community College</h4>
								<p>Graduated 05/2009 </p>
								<p>Diploma - Game Design/3D Art</p>
								<p>
									Final Project - Recreated Blood Gulch(Halo 2) In Unreal Engine
								</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}

export default Education;
