import React, {useContext} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Issues from './components/Issues'
import Auth from './components/Auth'
import './App.css';
import { UserContext } from './context/UserProvider';

function App() {
  const {token} = useContext(UserContext)
  return (
    <div className="App">
      {<Navbar />}
      <Switch>
        <Route
        exact path = '/'
        render={() => token ? <Redirect to='/Profile' /> : <Auth />}
        />
        <Route
        path='/Profile'
        render={() => <Profile />}
        />
        <Route
        path='/Issues'
        render={() => <Issues />}
        />
          </Switch>
      
    </div>
  )
}

export default App;
