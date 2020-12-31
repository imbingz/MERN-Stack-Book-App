import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Save from './pages/Save';
import Search from './pages/Search';
import Navbar from './components/Navbar';
import GlobalProvider from './utils/GlobalContext';

function App() {
	return (
		<BrowserRouter>
			<GlobalProvider>
			<Navbar />
			<div className='App'>
				<Switch>
					<Route exact path='/' component={Search} />
					<Route exact path='/save' component={Save} />
				</Switch>
			</div>
			</GlobalProvider>
		</BrowserRouter>
	);
}

export default App;
