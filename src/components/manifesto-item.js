import React from "react"

export default function ManifestoItem(props) {
  return <div class={`manifesto-item ${props.size}`}>{props.children}</div>
}
