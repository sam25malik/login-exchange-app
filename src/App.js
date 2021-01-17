import React, {Component} from 'react';
import './App.css';
import Login from "./views/login/login";
import "semantic-ui-css/semantic.min.css";
import { ToastContainer } from 'react-toastify';

class App extends Component {
    render() {
        return (
          <div>
            <Login/>
            <ToastContainer />
        </div>
        );
    }
}

export default App;
