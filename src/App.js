import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/home/Home';
import Technology from './pages/technology/Technology';
import Destination from './pages/destination/Destination';
import Crew from './pages/crew/Crew';

function App() {
	return (
		<main>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="technology" element={<Technology />} />
					<Route path="destination" element={<Destination />} />
					<Route path="crew" element={<Crew />} />
					<Route path="*" element={<Home />} />
				</Route>
			</Routes>
		</main>
	);
}

export default App;
