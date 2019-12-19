import React from "react"
import Link from "gatsby-link"
import "./Button1.css"

const Button1 = props => (
  <div>
    <Link to={props.link}>
      <span>
        <span className="setup">
          <span className="setupanimationbg">
            <span className="animationbackground" />
            <span className="name">{props.name}</span>
            <svg className="arrow" height="15" viewBox="0 0 306 306" width="15">
              <path d="m94.35 0-35.7 35.7 117.3 117.3-117.3 117.3 35.7 35.7 153-153z" />
            </svg>
          </span>
        </span>
      </span>
    </Link>
  </div>
)

export default Button1
