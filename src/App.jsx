import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Header from './components/Header/';

import HomeTiles from './pages/HomeTiles';
import HomeLists from './pages/HomeLists';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Router basename='/monblan'>
        <img className='back' src='/img/Vector 1.png' alt='' />
        <Header />
        <Switch>
          <Route exact path='/' component={HomeTiles} />
          <Route path='/lists' component={HomeLists} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
