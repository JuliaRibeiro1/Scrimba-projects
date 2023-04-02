import React from "react"
import path from "../assets/path.png"

export default function Note(props) {
    const {title,location, googleMapsUrl,startDate,endDate,description,imageUrl} = props
    return (
        <article>
            <section className="note-img-container">
            <img className="note-img" src={imageUrl}></img>
            </section>
            <section className="note-container">
            <section className="note-header">
                <header>
                    <div className="note-location"><img src={path}/>{location}</div>
                    <div><a href={googleMapsUrl}>View on Google Maps</a></div>
                </header>
                
            </section>
            <section className="note">
                <h1>{title}</h1>
                <div className="note-date"><span>{startDate}</span>-<span>{endDate}</span></div>
                <p>{description}</p>
                </section>
                </section>
        </article>
    )
}