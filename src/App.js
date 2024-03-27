import logo from './logo.svg';
import './App.css';
import User from "./UserComponent";


function App() {

    const people = [
        {name: "pesho", age: 135, color:"teal"},
        {name: "gosho", age: 135, color:"orange"},
        {name: "kotka", age: 135, color:"blue"}
    ];

    const mappedTags = people.map(e => <User name={e.name} age={e.age} color={e.color}></User>)

    return (
        <>
            {mappedTags}
        </>
    );
}

export default App;
