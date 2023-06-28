import React from "react"
import locationIcon from "../assets/locationIcon.svg"

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
                    <div className="note-location"><img className="locationIcon" src={locationIcon}/>{location}</div>
                    <div><a className="google-maps-link"href={googleMapsUrl} target="_blank">View on Google Maps</a></div>
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