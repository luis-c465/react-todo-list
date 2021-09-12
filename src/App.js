import React from "react"
import SiteHeader from './SiteHeader';
import './App.css';

class App extends React.Component{
    render() {
        return (
            <SiteHeader
                addTodo={ this.addTodo }
            />
        )
    }

    addTodo() {
        // TODO: Finish method
        console.log("WIP: addTodo called")
    }


}

export default App;
