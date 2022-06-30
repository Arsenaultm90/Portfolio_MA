import React from 'react';
import './intro.scss';
import { work, education, contact, resume } from '../images/index';

function Intro() {
	return (
		<section className='intro' id='intro'>
			<div className='intro-container'>
				<img src={work} alt='' />
				<h4>Work</h4>
				<img src={education} alt='' />
				<img src={contact} alt='' />
				<img src={resume} alt='' />
			</div>
		</section>
	);
}

export default Intro;
