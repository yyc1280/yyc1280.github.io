import React from "react"
import { Link } from "react-router-dom"
import works from "../static/content.json"
const Portfolio = () => {
  return (
    <div className="portfolio">
      {works.pages.map(page => (
        <div key={page.name} className="card">
          <Link to={"/portfolio/" + page.name}>
            <div className="title">{page.title}</div>
            <img src={require(`../static/${page.image}.png`)} alt="" />
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Portfolio
