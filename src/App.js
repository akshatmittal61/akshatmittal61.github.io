import AOS from 'aos';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import './style.css'
function App() {
	AOS.init()
	return <>
		<Routes>
			<Route path='/' element={<Home />} />
		</Routes>
	</>;
}

export default App;
