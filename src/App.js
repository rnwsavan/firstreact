import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import { Route, Switch } from 'react-router-dom';
import Footer from './component/Footer/Footer';
import Home from './container/Home/Home';
import Contact from './container/Home/Contact';
import department from './container/Home/department';
import About from './container/Home/About';
import Doctors from './container/Home/Doctors';
import Login from './container/Login-Signup/Login';
import Form_1 from './container/Forms/Form_1';
import PublicRoute from './Routes/PublicRoute';
import PrivateRoute from './Routes/PrivateRoute';
import ListAppo from './container/Home/ListAppo';
import Appoinment from './container/Home/Appoinment';
import { Provider } from 'react-redux';
import store, { configureStore, persistor } from './Redux/Store';
import Layout from './component/Layout';
import Counter from './container/Counter/Counter';
import { SnackbarProvider } from 'notistack'; 
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  // const store = configureStore();
  return (
    <>
      <SnackbarProvider maxSnack={3}>
        <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {/* <Layout> */}
            <Header />
            <Switch>
              <PublicRoute exact path={"/"} component={Home} />
              <PublicRoute exact path={"/about"} component={About} />
              <PublicRoute exact path={"/contact"} component={Contact} />
              <PublicRoute exact path={"/counter"} component={Counter} />
              <PrivateRoute exact path={"/doctor"} component={Doctors} />
              <PublicRoute exact path={"/depatment"} component={department} />
              <PrivateRoute exact path={"/apponmemt"} component={Appoinment} />
              <PrivateRoute exact path={"/ListAppoinment"} component={ListAppo} />
              <PublicRoute exact path={"/Login"} component={Login} />
              <Route exact path={"/Form"} component={Form_1} />
            </Switch>
            <Footer />
          {/* </Layout> */}
          </PersistGate>
        </Provider>
      </SnackbarProvider>
    </>
  );
}

export default App;
