import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// components
import Navbar from './Components/Navbar'
import Home from './Components/Screens/Home screen/Home'
import Footer from './Components/Footer'
import Experts from './Components/Screens/Experts Screen/Experts'
import Verifiers from './Components/Screens/Verifiers Screen/Verifiers'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/experts" exact component={Experts} />
          <Route path="/verifiers" exact component={Verifiers} />
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
