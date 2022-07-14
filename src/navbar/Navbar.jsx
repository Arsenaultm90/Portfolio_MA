import { useRef } from 'react';
import './navbar.scss';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';
import { startBtn } from '../images';
import Menu from '../menu/Menu';

export default function Navbar({
	menuOpen,
	setMenuOpen,
	btnState,
	setBtnState,
	setWinState,
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
						</div>
					</div>
					<div className='logo'></div>
					<div className='right-side'>
						<div className='contact-container'>
							<div className='itemContainer'>
								<BsFillTelephoneFill
									data-text='Phone: 902-432-4145'
									className='icon'
								/>
							</div>
							<div className='itemContainer'>
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
