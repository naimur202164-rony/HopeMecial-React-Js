import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './component/Context/AuthProvider';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import Service from './component/Home/Service/Service';
import About from './component/About/About';
import Doctors from './component/Doctors/Doctors';
import Gallery from './component/Gallery/Gallery';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import Notfound from './component/NotFound/Notfound';

function App() {
  return (
    <div className="App">

      <AuthProvider>

        <BrowserRouter>
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
            <PrivateRoute path="/service/:serviceId">
              <Service></Service>
            </PrivateRoute>
            <Route path="/about">
              <About></About>
            </Route>
            <PrivateRoute path="/doctor">
              <Doctors></Doctors>
            </PrivateRoute>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/gallery">
              <Gallery></Gallery>
            </Route>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
        </BrowserRouter>

      </AuthProvider>

    </div>
  );
}

export default App;
