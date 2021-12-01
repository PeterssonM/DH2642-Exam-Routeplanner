import React from "react"
import "./Icon.css"

export default function Icon({icon}) {
    return (
        <i className={"fa fa-" + icon}></i>
    )
}