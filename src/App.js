import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';



// components
import Navbar from './Components/Navbar'
import Home from './Components/Screens/Home screen/Home'
import Footer from './Components/Footer'
import Experts from './Components/Screens/Experts Screen/Experts'
import Verifiers from './Components/Screens/Verifiers Screen/Verifiers'
import ProfileManagement from './Components/Screens/Profile Screen/ProfileManagement';
import ClientProfile from './Components/Screens/Profile Screen/ClientProfile';
import Aboutus from './Components/Screens/About Screen/Aboutus';
import Help from './Components/Screens/Help Screen/Help';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/experts" exact>
            <Navbar 
              cName="navbar__color"
            />
            <Experts/>
          </Route>
          <Route path="/verifiers" exact>
            <Navbar
              cName="navbar__color"
            />
            <Verifiers/>
          </Route>
          <Route path="/profile" exact>
            <Navbar
              cName="navbar__color"
            />
            <ProfileManagement/>
          </Route>
          <Route path="/cprofile" exact>
            <Navbar
              cName="navbar__color"
            />
            <ClientProfile/>
          </Route>
          <Route path="/about" exact>
            <Navbar
              cName="navbar__color"
            />
            <Aboutus/>
          </Route>
          <Route path="/help" exact>
            <Navbar
              cName="navbar__color"
            />
            <Help/>
          </Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
