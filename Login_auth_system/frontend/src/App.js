
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom'

import Login from './login_comp/Login';
import ForgotPassword from './login_comp/ForgotPassword';
import ResetPassword from './login_comp/ResetPassword';
import Private from './login_comp/Private'

//Routing
import PrivateRoute from './components/routing/PrivateRoute';


function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <PrivateRoute exact path="/" component={Private}/>
          <Route exact path = "/login" component={Login}/>
          <Route exact path = "/forgotpassword" component={ForgotPassword}/>
          <Route exact path = "/resetpassword/:resettoken" component={ResetPassword}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
