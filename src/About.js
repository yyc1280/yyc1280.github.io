import React from "react"
import github from "../static/github.png"

const About = () => {
  return (
    <div className="about">
      <p>
        陳彥瑜，台中人，2020畢業於國立中山大學化學系，畢業之後毫無方向，直到2020年底至2021年初時參加勞動部產業新尖兵計畫，學習python爬蟲及R語言，由於大學時修過C++(雖然已忘得差不多)所以大多課程內容都跟得上，而出現了說不定我適合程式設計的想法(可能是錯覺)，於是開始自學網頁相關技術，目前以找到工作為目標。
      </p>
      <br />
      <p>
        Skills : HTML5 CSS3(SCSS) RWD Bootstrap JavaScript React Webpack Gulp
        Node.js Git
      </p>
      <p>Contact : yenyu335@gmail.com 0939082100</p>
      <a href="https://github.com/yyc1280" target="_blank">
        <img src={github} alt="github" />
      </a>
    </div>
  )
}

export default About
