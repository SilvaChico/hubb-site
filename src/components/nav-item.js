import React from "react"
import { Link } from "gatsby"

export default function NavItem(props) {
  return (
    <li>
      <Link
        to={props.to}
        className={`${
          props.name === props.currentPage ? "link selected-link" : "link"
        }`}
      >
        {props.name}
      </Link>
    </li>
  )
}
