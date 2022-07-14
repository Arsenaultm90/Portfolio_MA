import React from 'react';
import './contact.scss';
import { contact, closeBtn } from '../images/index';

function Contact({ winState, setWinState }) {
	const handleClose = (e) => {
		setWinState({ contact: false });
	};
	return (
		<section
			className={'contact ' + (!winState.contact && 'close')}
			id='contact'
		>
			<div className='contact-container'>
				<div className='title-bar'>
					<div className='left-side'>
						<img src={contact} alt='' />
						<h4>Contact</h4>
					</div>
					<div className='right-side'>
						<button className='close-btn' onClick={handleClose}>
							<img src={closeBtn} alt='' />
						</button>
					</div>
				</div>
				<span className='divider'></span>
				<div className='input-container'>
					<div className='contact-box'>
						<div className='left'></div>
						<div className='right'>
							<h4>Contact Me</h4>
							<p>Phone: 902-432-4145 | Email: Matthew.B.Arsenault@gmail.com</p>
							<input
								type='text'
								className='field'
								placeholder='Name'
								required
							/>
							<input
								type='email'
								className='field'
								placeholder='Email'
								required
							/>
							<input
								type='text'
								className='field'
								placeholder='Phone(Optional)'
							/>
							<textarea
								className='field area'
								placeholder='Message'
								required
							></textarea>
							<button className='submit-btn' type='submit'>
								Submit
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
