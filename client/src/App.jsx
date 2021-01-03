import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Save from './pages/Save';
import Search from './pages/Search';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NoMatch from './components/NoMatch';
import GlobalProvider from './utils/GlobalContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App () {
	return (
		<BrowserRouter>
			<GlobalProvider>
				<Navbar />
				<main className='App'>
					<Switch>
						<Route exact path='/' component={Search} />
						<Route exact path='/save' component={Save} />
                        <Route component={NoMatch} />
					</Switch>
                    <ToastContainer transition={Zoom} autoClose={3000} />
				</main>
				
				<Footer />
			</GlobalProvider>
		</BrowserRouter>
	);
}

export default App;
