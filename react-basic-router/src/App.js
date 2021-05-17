import { Switch, Route, Redirect, Link } from 'react-router-dom';
import './App.css';

import Home from './Pages/Home'
import Project from './Pages/Project'
import Contact from './Pages/Contact'

function App() {
  return (
    <Router>
      <Link to='/'>Home</Link>
      <Link to='/project'>Project</Link>
      <Link to='/contact'>Contact</Link>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/project' component={Project} />
        <Route exact path='/contact' component={Contact} />
        <Redirect to='/' />
      </Switch>
    </Router>
  );
}

export default App
