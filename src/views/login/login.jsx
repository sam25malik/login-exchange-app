import React from 'react'
import {Provider} from 'react-redux'
import rootReducer from './reducers'
import LoginPage from "./components/LoginPage";
import configureStore from "./redux/ConfigureStore";

/*Redux store to store the data*/
const store = configureStore(rootReducer, {
        data: {
            email:'',
            password:''
        }
    }
);

const Login = () => (
    <Provider store={store}>
        <LoginPage/>
    </Provider>
);

export default Login