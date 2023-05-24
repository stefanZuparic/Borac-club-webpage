import './index.scss'
import Judo from '../../assets/images/judo.jpeg'
import Sambo from '../../assets/images/sambo.jpeg'
import Combat from '../../assets/images/combat.jpeg'
const Home = () => {
  return (
    <div className="container">
      <div class="row">
        <div class="column">
          <div class="card">
            <img src={Judo} alt="judo" />
            <h1>JUDO</h1>
            <p>NEKI TEKS O JUDO</p>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <img src={Sambo} alt="sambo" />
            <h1>SAMBO</h1>
            <p>NEKI TEKS O SAMBOU</p>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <img src={Combat} alt="combat" />
            <h1>COMBAT SAMBO</h1>
            <p>NEKI TEKS O COMBAT SAMBOU</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
