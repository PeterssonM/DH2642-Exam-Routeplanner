import React from "react"
import "./Icon.css"

export default function Icon({icon, style}) {
    return (
        <i className={"fa fa-" + icon + " " + style}></i>
    )
}