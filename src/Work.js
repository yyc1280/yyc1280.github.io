import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import works from "../static/content"
import github from "../static/github.png"
import link from "../static/link.png"

const Work = props => {
  const { name } = useParams()
  const [work, setWork] = useState()
  useEffect(() => {
    const page = works.pages.find(p => p.name === name)
    setWork(page)
    console.log(work)
  }, [])

  return (
    <div className="work">
      {work && (
        <>
          <div className="left">
            <img src={require(`../static/${work.image}.png`)} alt="" />
            <div className="links">
              <a href={work.github} target="_blank">
                <div className="link">
                  <span className="text">Github Repo</span>

                  <img className="icon" src={github} alt="" />
                </div>
              </a>
              <a href={work.link} target="_blank">
                <div className="link">
                  <span className="text">Link</span>
                  <img className="icon" src={link} alt="" />
                </div>
              </a>
            </div>
          </div>
          <div className="right">
            <p>{work.text}</p>
          </div>
        </>
      )}
    </div>
  )
}

export default Work
