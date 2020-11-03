import React, { useState } from "react"
import NavItem from "./nav-item"

export default function NavBar(props) {
  const [open, setOpen] = useState(false)

  return (
    <div className="bar">
      <ul className="links-horizontal">
        <NavItem to="/" name="HOME" currentPage={props.page} />
        <NavItem
          to="/the-collective"
          name="THE COLLECTIVE"
          currentPage={props.page}
        />
        <NavItem to="/manifesto" name="MANIFESTO" currentPage={props.page} />
        <NavItem to="/actions" name="ACTIONS" currentPage={props.page} />
        <NavItem
          to="/get-involved"
          name="GET INVOLVED"
          currentPage={props.page}
        />
      </ul>
      <ul
        className={`${open ? "links-vertical links-active" : "links-vertical"}`}
      >
        <NavItem to="/" name="HOME" />
        <NavItem to="/the-collective" name="THE COLLECTIVE" />
        <NavItem to="/manifesto" name="MANIFESTO" />
        <NavItem to="/actions" name="ACTIONS" />
        <NavItem to="/get-involved" name="GET INVOLVED" />
      </ul>
      <div className="burger" onClick={() => setOpen(!open)}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </div>
  )
}
