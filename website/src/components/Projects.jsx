import React from "react";
import './Projects.css'
import data from './ProjectLinks.js'

export default function Projects() {

    const projects = data.links.map((item,index) => <div className="videos">
        <iframe  src={item.link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <p><span>Skills: </span> {item.skills}</p>
    </div>)
    return(
        <div className="projects--container">
            <div className="video--container">
                {projects}
            </div>
        </div>
    )
}
