import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isLogin } from '.';

function PrivateRoute({component : Component,...rest}) {
    return (
        <Route{...rest} render = {
            props=>(
                isLogin() && restricted ?
                <Component {...props}/>
                :
                <Redirect to={"/Login"}/>
            )
           }
    
           />
    );
}

export default PrivateRoute;