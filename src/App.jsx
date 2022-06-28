import Navbar from './navbar/Navbar';
import Intro from './intro/Intro';
import Work from './work/Work';
import Education from './education/Education';
import Contact from './contact/Contact';
import './App.scss';

function App() {
	return (
		<div className='app'>
			<Navbar />
			<div className='sections'>
				<Intro />
				<Work />
				<Education />
				<Contact />
			</div>
		</div>
	);
}

export default App;
//adding comment to test git
