import { useRef, useContext } from 'react';
import { WindowContext } from '../../App';
import emailjs from 'emailjs-com';
import './contact.scss';
import { contact, closeBtn } from '../../images/index';

function Contact() {
	const formRef = useRef(null);
	const { winState, setWinState } = useContext(WindowContext);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_6j9w2au',
				'template_hs2efoh',
				formRef.current,
				'EsjtS1Lx1DPEJXoir'
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
	};

	const handleClose = () => {
		setWinState({ contact: false });
	};
	return (
		<section
			className={'contact ' + (!winState.contact && 'close')}
			id='contact'
		>
			<div className='contact-container'>
				<div className='title-bar' id='handle'>
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
						<form className='right' ref={formRef} onSubmit={sendEmail}>
							<h4>Contact Me</h4>
							<p>Phone: 902-432-4145</p>
							<p>Email: Matthew.B.Arsenault@gmail.com</p>
							<input
								type='text'
								className='field'
								placeholder='Name'
								tabIndex={1}
								name='name'
								required
							/>
							<input
								type='email'
								className='field'
								placeholder='Email'
								tabIndex={2}
								name='email'
								required
							/>
							<input
								type='text'
								className='field'
								placeholder='Phone (Optional)'
								tabIndex={3}
								name='phone'
							/>
							<textarea
								className='field area'
								placeholder='Message'
								tabIndex={4}
								name='message'
								required
							></textarea>
							<button className='submit-btn' type='submit'>
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
