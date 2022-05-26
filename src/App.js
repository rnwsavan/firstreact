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

function App() {
  return (
    <>
      <Header/>
      <switch>
        <Route exact path={"/"} componet={Home}/>
        <Route exact path={"/appointment"} componet={appo}/>
        <Route exact path={"/contact"} componet={Contact}/>
        <Route exact path={"/department"} componet={department}/>
        <Route exact path={"/about"} componet={About}/>
        <Route exact path={"/doctors"} componet={Doctors}/>
      </switch>
      <Footer/>
    </>
  );
}

export default App;
