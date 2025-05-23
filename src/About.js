import React from "react";
import github from "../static/github.png";
import data from "../static/content.json";

console.log(data);
const About = () => {
  return (
    <div className="about">
      <p>{data.about.bio}</p>
      <br />
      <p>
        Skills :{" "}
        {data.about.skills.map((skill, index) => (
          <span className="skill" key={index}>
            {skill}
          </span>
        ))}
      </p>
      <p>Contact : {data.about.contact}</p>
      <a href={data.about.github} target="_blank">
        <img src={github} alt="github" />
      </a>
    </div>
  );
};

export default About;
