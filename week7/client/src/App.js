import React, {useContext} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import IssueList from './components/IssueList'
import Auth from './components/Auth'
import './App.css';
import { UserContext } from './context/UserProvider';
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  const {token} = useContext(UserContext)
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route
        exact path = '/'
        render={() => token ? <Redirect to='/Profile' /> : <Auth />}
        />
        <ProtectedRoute
        path='/Profile'
        component={Profile}
        redirectTo='/'
        token={token}
        />
        <ProtectedRoute
        path='/Issues'
        component={IssueList}
        redirectTo='/'
        token={token}
        
        />
          </Switch>
      
    </div>
  )
}

export default App;
