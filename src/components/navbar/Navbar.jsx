import { useRef } from 'react';
import './navbar.scss';
import { BsFillTelephoneFill, BsGithub, BsLinkedin } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';
import { startBtn } from '../../images';
import Menu from '../menu/Menu';

export default function Navbar({
	menuOpen,
	setMenuOpen,
	btnState,
	setBtnState,
	setWinState,
	setHoverState,
	hoverState,
}) {
	const btnEl = useRef(null);
	const btnClickHandler = (e) => {
		e.preventDefault();
		if (!btnState && !menuOpen) {
			setMenuOpen(true);
			setBtnState(true);
		} else {
			setMenuOpen(false);
			setBtnState(false);
		}
	};

	const socialClickHandler = (e) => {
		if (e.currentTarget.id === 'github') {
			window.open('https://github.com/Arsenaultm90', '_blank', 'fullscreen');
		} else if (e.currentTarget.id === 'linkedin') {
			window.open(
				'https://www.linkedin.com/in/arsenaultm/',
				'_blank',
				'fullscreen'
			);
		}
	};

	const addTooltip = (e) => {
		console.log(e.currentTarget.id);
		if (e.currentTarget.id === 'phone') {
			setHoverState({ phone: true, email: false });
		} else if (e.currentTarget.id === 'email') {
			setHoverState({ phone: false, email: true });
		}
	};

	const removeTooltip = () => {
		if (hoverState.phone === true) {
			setHoverState({ phone: false });
		} else if (hoverState.email === true) {
			setHoverState({ email: false });
		}
	};

	const copyText = (e) => {
		if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
			return navigator.clipboard.writeText(e.currentTarget.dataset.text);
		}
		return Promise.reject('The Clipboard API is not available.');
	};

	return (
		<>
			<div className='navbar'>
				<div className='nav-container'>
					<div className='left-side'>
						<div className='links'>
							<button
								className={'start-btn ' + (menuOpen && 'active')}
								type='button'
								onClick={btnClickHandler}
								ref={btnEl}
							>
								<img src={startBtn} alt='' />
							</button>
							<span className='v-divider'></span>
							<BsGithub
								size={20}
								className='social-icon'
								id='github'
								onClick={socialClickHandler}
							/>
							<BsLinkedin
								size={20}
								className='social-icon'
								id='linkedin'
								onClick={socialClickHandler}
							/>
							<span className='v-divider'></span>
						</div>
					</div>
					<div className='logo'></div>
					<div className='right-side'>
						<div className='contact-container'>
							<div
								className='itemContainer'
								data-text='902-432-4145'
								id='phone'
								onMouseEnter={addTooltip}
								onMouseLeave={removeTooltip}
								onClick={copyText}
							>
								<BsFillTelephoneFill
									data-text='Phone: 902-432-4145'
									className='icon'
								/>
							</div>
							<div
								className='itemContainer'
								data-text='Matthew.B.Arsenault@gmail.com'
								onMouseEnter={addTooltip}
								onMouseLeave={removeTooltip}
								onClick={copyText}
								id='email'
							>
								<IoMdMail
									className='icon'
									data-text='Email: Matthew.B.Arsenault@gmail.com'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Menu
				menuOpen={menuOpen}
				setMenuOpen={setMenuOpen}
				btnState={btnState}
				setBtnState={setBtnState}
				setWinState={setWinState}
				btnEl={btnEl}
			/>
		</>
	);
}
