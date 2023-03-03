import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/login/Login';
import Send from './Pages/Send';

function App() {
  return (
    <div>
      <Switch>
       <Route exact path={'/'} component={ Login } />
       <Route exact path={'/home'} component={ Home } />
       <Route exact path={'/send'} component={ Send } />
      </Switch>
    </div>
  );
}

export default App;
