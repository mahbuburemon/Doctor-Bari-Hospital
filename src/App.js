import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Shared/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home/Home';

import NotFound from './pages/NotFound/NotFound';
import Details from './pages/Details/Details/Details';
import Login from './pages/Login/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Register from './pages/Login/Register/Register';
import Online from './pages/Home/Online/Online';
import Footer from './Shared/Footer/Footer';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>


            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>

            <PrivateRoute path="/online">
              <Online></Online>
            </PrivateRoute>



            <PrivateRoute path="/details/:serviceId">
              <Details></Details>
            </PrivateRoute>


            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>

          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
