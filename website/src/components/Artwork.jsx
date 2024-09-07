import React from "react";
import photo1 from '../images/IMG_0276.jpeg'
import photo2 from '../images/IMG_0277.jpeg'
import photo3 from '../images/IMG_0278.jpeg'
import photo4 from '../images/IMG_0279.jpeg'
import photo5 from '../images/IMG_0280.jpeg'
import photo6 from '../images/IMG_0281.jpeg'
import './Artwork.css'

export default function Artwork() {
    return(
        <div className="photo--container">
            <div className="art--container">
                <img src = {photo1}/>
                <img src = {photo2}/>
                <img src = {photo3}/>
                <img src = {photo4}/>
                <img src = {photo5}/>
                <img src = {photo6}/>
            </div>
            <div className="text">To be Continued . . .</div>
        </div>
    )
}