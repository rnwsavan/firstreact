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
import PublicRoute from './Routes/PublicRoute';
import PrivateRoute from './Routes/PrivateRoute';

function App() {
  return (
    <>
      <Header/>
      <switch>
      <PublicRoute exact path={"/"} component={Home}/>
      <PublicRoute exact path={"/about"} component={About}/>
      <PublicRoute exact path={"/contact"} component={Contact}/>
      <PrivateRoute exact path={"/doctor"} component={Doctors}/>
      <PublicRoute exact path={"/depatment"} component={department}/>
      <PublicRoute exact path={"/apponmemt"} component={appo}/>
      <PublicRoute restricted={true} exact path={"/Login"} component={Login}/>
      <Route exact path={"/Form"} component={Form_1}/>
    </switch>
      <Footer/>
    </>
  );
}

export default App;
