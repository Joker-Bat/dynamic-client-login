import Layout from './HOC/Layout';
import Login from './components/Login/Login';
import Homepage from './components/Homepage/Homepage';

// React Router
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

const App = () => {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route path="/app/login/:clientId" component={Login} />
          <Route path="/app/home" component={Homepage} />
          <Redirect to="/app/home" />
        </Switch>
      </Router>
    </Layout>
  );
};

export default App;
