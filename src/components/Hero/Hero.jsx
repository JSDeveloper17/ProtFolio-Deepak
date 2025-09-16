import Picture from "../../assets/picture.png"
import Linkdin from "../../assets/linkedin-dark.svg"
import Twitter from "../../assets/twitter-dark.svg"
import Github from "../../assets/github-dark.svg"
import Resume from "../../assets/Resume.pdf"
import "./hero.style.css"

export const Hero = () => {
  return (
    <section id="hero" className='container'>
        <div className="colorModeContainer">
            <img src={Picture} alt="Deepak Gupta" />
        </div>
        <div className="info">
            <h1>Deepak 
                <br />
                Gupta
            </h1>
            <h2>Full Stack Developer</h2>
            <span>
                <a href="https://x.com/CrafterCodeJS" target="_blank">
                    <img src={Twitter} alt="Twitter" />
                </a>
                <a href="https://Github.com/JSDeveloper17" target="_blank">
                    <img src={Github} alt="Github" />
                </a>
                <a href="https://www.linkedin.com/in/deepak-gupta-641670215/" target="_blank">
                    <img src={Linkdin} alt="Linkdin" />
                </a>
            </span>
            <p>Passionate about building full-stack solutions that create real impact
            </p>
            <a href={Resume} download>
                <button className="hover">Resume</button>
            </a>
        </div>
    </section>
  )
}
