import React from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Artwork from "./components/Artwork";
import Projects from "./components/Projects";

import './App.css'


export default function App() {
    const [clicks, setClicks] = React.useState([true, false, false])
    const handleTabChange = (index) => {
        setClicks(prevClick => {
            let newClick = []
            for(let i = 0; i < prevClick.length; i++){
                if(i == index)
                    newClick.push(true)
                else
                    newClick.push(false)
            }
            return newClick
        })
    }
    return(
        <main>
            <Navbar 
                tabChange = {handleTabChange}
            />
            {clicks[0] && <Content />}
            {/* { <Projects />} */}
            {clicks[2] && <Artwork />}
        </main>
    )
}