import React from "react";
import './Content.css'
import photo from '../images/pictures.png'


export default function Content() {
    return(
            <div className="content--container">
                <img src = {photo} className="photos"></img>
                <div className="story--container">
                    <p className="story">
                    Coming from a small town in India, it's a rare privilege to study at one of the world's best engineering University, competing with the brightest minds, and learning from industry leaders and renowned scientists. Yet, here I am, a third-year computer engineering student at UofT.
                    </p>
                    <div className="story">
                    The aspect of computer engineering that has always appealed to me is the opportunity for lifelong learning. I aspire to bring value to the software industry with real-world applications. I am committed to pursuing exiting innovative projects that serve a purpose, achieve a goal and lead it from conception to delivery. 
                    </div>
                </div>
            </div>
    )
}