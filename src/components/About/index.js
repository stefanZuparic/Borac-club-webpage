import './index.scss'
import logo from '../../assets/images/LogoBorac.png'
const About = () => {
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>About us</h1>
        <p>
          Neki tekst koje ja ne mogu da smisljamNeki tekst koje ja ne mogu da
          smisljam Neki tekst koje ja ne mogu da smisljam Neki tekst koje ja ne
          mogu da smisljam Neki tekst koje ja ne mogu da smisljam Neki tekst
          koje ja ne mogu da smisljam
        </p>
        <p>Neki tekst koje ja ne mogu da smisljam</p>
        <p>Neki tekst koje ja ne mogu da smisljam</p>
      </div>

      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <img src={logo} alt="" />
          </div>
          <div className="face2">
            <img src={logo} alt="" />
          </div>
          <div className="face3">
            <img src={logo} alt="" />
          </div>
          <div className="face4">
            <img src={logo} alt="" />
          </div>
          <div className="face5">
            <img src={logo} alt="" />
          </div>
          <div className="face6">
            <img src={logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
