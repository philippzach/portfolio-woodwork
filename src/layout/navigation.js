import React from "react"
import { Link } from "gatsby"
import "./navigation.css"
import styled from "@emotion/styled"

const Bar = styled.div`
  position: absolute;
  z-index: 100;
  width: 100%;
`
const List = styled.ul`
  display: flex;
  list-style: none;
  li {
    padding-right: 10px;
  }
`

const Navigation = () => {
  return (
    <Bar>
      <nav
        style={{
          margin: `0 auto`,
          background: `green`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <List>
          <li style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              Page 1
            </Link>
          </li>
          <li style={{ margin: 0 }}>
            <Link
              to="/page-2"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              Page 2
            </Link>
          </li>
          <li style={{ margin: 0 }}>
            <Link
              to="/page-3"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              Page 3
            </Link>
          </li>
        </List>
      </nav>
    </Bar>
  )
}

export default Navigation
