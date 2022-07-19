import React from 'react';
import './bubble.scss';

function EmailBubble({ hoverState, setHoverState }) {
	return (
		<>
			<section className={'bubble ' + (hoverState.email === true && 'active')}>
				<div className='bubble-container'>
					<h4>Matthew.B.Arsenault@gmail.com</h4>
					<p>Click To Copy</p>
				</div>
			</section>
			<section className={'bubble ' + (hoverState.phone === true && 'active')}>
				<div className='bubble-container'>
					<h4>902-432-4145</h4>
					<p>Click To Copy</p>
				</div>
			</section>
		</>
	);
}

export default EmailBubble;
