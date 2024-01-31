import React from "react";
import Header from "./components/Header";

class App extends React.Component {
    text = "Help text"

    render() {
        return (<div className="name">
            <Header title="Шапка сайту"/>
            <h1>{this.text}</h1>
            <input placeholder={this.text} onClick={this.inputClick}/>
            <p>{this.text === "Help text" ? "Yes" : "No"}</p>
        </div>)
    }

    inputClick = () => console.log("Clicked")
}

export default App
