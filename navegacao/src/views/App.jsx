import React from 'react'
import {BrowserRouter as Router} from "react-router-dom"

import Content from '../components/layoud/Content'
import Menu from "../components/layoud/Menu"
import "./App.css"

const App = props =>(
    <div className="App">

        <Router>
            
            <Menu/>
            <Content/>

        </Router>

    </div>
)

export default App