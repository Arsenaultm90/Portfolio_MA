import React from 'react';
import './user.scss';
import { mattProfile, closeBtn, user } from '../images/index';
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoCss3 } from 'react-icons/io';
import { DiJavascript } from 'react-icons/di';
import { FaReact, FaNodeJs, FaBootstrap } from 'react-icons/fa';
import { SiSass, SiRedux } from 'react-icons/si';

function User({ winState, setWinState, winLocation, setWinLocation }) {
	const handleClose = () => {
		setWinState({ user: false });
	};

	return (
		<section className={'user ' + (winState.user === true && 'active')}>
			<div className='user-container'>
				<div className='title-bar' id='handle'>
					<div className='left-side'>
						<img src={user} alt='' />
						<h4>User</h4>
					</div>
					<div className='right-side'>
						<button className='close-btn' onClick={handleClose}>
							<img src={closeBtn} alt='' />
						</button>
					</div>
				</div>
				<span className='divider'></span>
				<div className='content-container'>
					<div className='left'>
						<img src={mattProfile} alt='' />
					</div>
					<div className='right'>
						<div className='info-container'>
							<div className='status'>
								<h4>Name: Matt Arsenault</h4>
								<h4>Residence: Ottawa, ON</h4>
								<h4>Status: Looking For Employment</h4>
							</div>
							<div className='bio'>
								<h4>Hi there,</h4>
								<p>
									My name is Matt and I'm a self-taught Front-End Web Developer
									looking to get experience in the field. My background comes
									from an Electrical/Computer Engineering Tech diploma, which
									has given me the skills to learn and excel in my studies as
									developer.
								</p>
								<p>
									Take a look around and if you ever want to find this window
									again just click Start - User
								</p>
							</div>
							<div className='skills'>
								<h4>Skills</h4>
								<div className='skills-container'>
									<AiFillHtml5 size={50} />
									<IoLogoCss3 size={50} />
									<DiJavascript size={50} />
									<FaReact size={50} />
									<SiRedux size={50} />
									<SiSass size={50} />
									<FaBootstrap size={50} />
									<FaNodeJs size={50} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default User;
