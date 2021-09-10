import React, { Component } from "react";

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import { connect } from './react-redux';

import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { getSmurfs } from './actions/index';

class App extends Component {
  state = {
    smurfs: [], 
    loading: false, 
    error: ''
  }
  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
    // console.log(res)
    .then(res => console.log(res))
    .catch(err => console.log('Axios Error', err));
  }

  render() {
    return (
      <div className="App">
        <Header />

        <main>
          <SmurfList/>
          <AddForm/>
        </main>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    murfs: state.murfs,
    loading: state.loading,
    error: state.error
  }
}

export default connect(mapStateToProps, { getSmurfs })(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.