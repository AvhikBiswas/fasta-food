import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import "./components/style.css";
// import About from "./components/about.js";
import Footer from "./components/Footer.js";
import { GetResturnt } from "./components/GetResturnt.js";
import { createBrowserRouter } from "react-router-dom";

const appRouter= createBrowserRouter([
{
path:"/",
element:<AppLayout/>,
},
]);

function AppLayout() {
    return (
        <>
            <Header />
            <GetResturnt />
            <Footer/>
        </>
    );
    imprz
}
<Header />
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);