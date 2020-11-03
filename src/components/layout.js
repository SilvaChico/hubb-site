import React, { Children } from "react"
import Header from "../components/header"
import ManifestoItem from "./manifesto-item"

export default function Layout(props) {
  return (
    <div>
      <Header page={props.page} />
      <div className="content-container">{props.children}</div>
    </div>
  )
}
