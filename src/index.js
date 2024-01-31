import * as ReactDOMClient from "react-dom/client";
import React from "react";
import App from "./App";
import "./css/style.css"


const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(<App/>);
