import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import { Route } from 'react-router-dom';
import Footer from './component/Footer/Footer';
import Home from './container/Home/Home';
import appo from './container/Home/appo';
import Contact from './container/Home/Contact';
import department from './container/Home/department';
import About from './container/Home/About';
import Doctors from './container/Home/Doctors';
import Login from './container/Login-Signup/Login';
import Form_1 from './container/Forms/Form_1';

function App() {
  return (
    <>
      <Header/>
      <switch>
      <Route exact path={"/"} component={Home}/>
      <Route exact path={"/about"} component={About}/>
      <Route exact path={"/contact"} component={Contact}/>
      <Route exact path={"/doctor"} component={Doctors}/>
      <Route exact path={"/depatment"} component={department}/>
      <Route exact path={"/apponmemt"} component={appo}/>
      <Route exact path={"/Login"} component={Login}/>
      <Route exact path={"/Form"} component={Form_1}/>
    </switch>
      <Footer/>
    </>
  );
}

export default App;
