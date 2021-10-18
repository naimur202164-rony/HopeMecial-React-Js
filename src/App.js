import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './componets/Context/AuthProvider';
import Header from './componets/Header/Header';
import Home from './componets/Home/Home';
import Login from './componets/Login/Login';
import Register from './componets/Register/Register';
import Contact from './componets/Contact/Contact';
import Service from './componets/Home/Service/Service';

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
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/service/:serviceId">
            <Service></Service>
          </Route>
        </Switch>
      </BrowserRouter>
      </AuthProvider>
        

    </div>
  );
}

export default App;
