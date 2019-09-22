import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Loading from './App/components/Loading';
import Home from './App/components/Home'
import HomePage from './App/components/HomePage'


export default class Routes extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div >

                    </div>
                    <div>
                        <div>

                        </div>
                        <div >

                            <Route exact path='/' component={Loading}></Route>
                            <Route path="/home" component={Home} />
                            <Route path="/Login" component={HomePage} />
                        </div>
                    </div>

                </div>
            </Router>
        )
    }
}