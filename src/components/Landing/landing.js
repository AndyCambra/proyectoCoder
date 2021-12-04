import blossfeldia from '../../images/blossfeldia.jpg'
import grusonii from '../../images/grusonii.jpg'
import lithops from '../../images/lithops.jpg'
import Login from '../Login/loguin'
import './index.css'

const Landing = () => {
  return (
    <div className="container">
      <img src={blossfeldia} className="photos-landing" alt="blossfeldia" />
      <img src={grusonii} className="photos-landing" alt="grusonii" />
      <img src={lithops} className="photos-landing" alt="lithops" />
      <h1 className="landing-title">Bienvenidos</h1>
      <Login />
    </div>
  )
}
export default Landing
