// ReactDOM.render(React.createElement("input", {
//     placeholder: "help text",
//     id: "qwerty",
//     onClick: ()  => console.log("Clicked"),
//     onMouseEnter: ()  => console.log("MouseMoved"),
// }), document.getElementById("app"))

const inputClick = () => console.log("Clicked")
const elements = <input placeholder="hepl placejoleder" onClick={inputClick}/>
const app = document.getElementById("app")


ReactDOM.render(
    elements,
    app,
)