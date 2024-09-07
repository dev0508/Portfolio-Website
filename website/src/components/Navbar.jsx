import React from "react";
import bar from '../images/navbar.png'
import './Navbar.css'
import resume from '../Documents/resume.pdf'

export default function Navbar(props) {
    const [sideOpen, setSideOpen] = React.useState(false)
    const toggleSideBar = () => {
        setSideOpen(prevState => !prevState)
    }

    const handleLinkedinClick = () => {
        window.open('https://www.linkedin.com/in/dev-agarwal-173022259/','_blank');
        toggleSideBar()
    }

    const handleResumeClick = () => {
        window.open(resume,'_blank')
        toggleSideBar()
    }

    const handleTabChange = (index) => {
        props.tabChange(index)
        toggleSideBar()
    }

    return(
        <div className="navbar--container">
            <nav>
                <img src = {bar} className="navbar"></img>
                <div className="nav--tabs">
                    <div className="nav--left">
                        <i className="fa-solid fa-bars menu click--left" onClick={toggleSideBar}></i>
                        <div className="nav--left--container click--left" onClick={() => props.tabChange(0)}>
                            <i className="fa-solid fa-laptop-code laptop icon--left"></i>
                            <i className="fa-solid fa-basketball basketball icon--left"></i>
                            <i className="fa-solid fa-pencil pencil icon--left"></i>
                        <h1>Dev Agarwal</h1>
                        </div>
                    </div>
                    <div className="nav--right">
                        <h2 className="personal--pages click" onClick={() => props.tabChange(1)}>Projects</h2>
                        <h2 className="personal--pages click" onClick={() => props.tabChange(2)}>Art Work</h2>
                        <h2 className="personal--pages click" onClick = {handleResumeClick}>Resume</h2>
                        <a className="email--container nav--containers click" href="mailto:dev.agarwal@mail.utoronto.ca">
                            <i className="fa-solid fa-envelope email icon--right"></i>
                            <h2 className="personal--pages">Email</h2>
                        </a>
                        <div className="git--container nav--containers click">
                            <i className="fa-brands fa-github git icon--right"></i>
                            <h2 className="personal--pages">GitHub</h2>
                        </div>
                        <div className="linkedin--container nav--containers click" onClick = {handleLinkedinClick}>
                            <i className="fa-brands fa-linkedin linkedin icon--right"></i>
                            <h2 className="personal--pages">LinkedIn</h2>
                        </div>
                    </div>
                </div>
            </nav>
            <div className={`side-panel ${sideOpen ? 'open' : ''}`}>
                <div className={`nav--right ${sideOpen ? 'open' : ''}`}>
                        <h2 className="personal--pages click" onClick={() => {props.tabChange(1); toggleSideBar()}}>Projects</h2>
                        <h2 className="personal--pages click" onClick={() => {props.tabChange(2); toggleSideBar()}}>Art Work</h2>
                        <h2 className="personal--pages click" onClick = {handleResumeClick}>Resume</h2>
                        <a className="email--container nav--containers click" href = "mailto:dev.agarwal@mail.utoronto.ca" onClick={toggleSideBar}>
                            <i className="fa-solid fa-envelope email icon--right"></i>
                            <h2 className="personal--pages">Email</h2>
                        </a>
                        <div className="git--container nav--containers click">
                            <i className="fa-brands fa-github git icon--right"></i>
                            <h2 className="personal--pages">GitHub</h2>
                        </div>
                        <div className="linkedin--container nav--containers click" onClick = {handleLinkedinClick}>
                            <i className="fa-brands fa-linkedin linkedin icon--right"></i>
                            <h2 className="personal--pages">LinkedIn</h2>
                        </div>
                </div>
            </div>
        </div>
    )
}

