import React from "react"
import NavBar from "./nav-bar"

export default function Header(props) {
  return (
    <div>
      <div className="title">
        <h1>Humans Before Borders</h1>
      </div>
      <NavBar page={props.page} />
    </div>
  )
}
