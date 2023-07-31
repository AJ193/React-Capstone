import { Link } from 'react-router-dom';
import back from './image/back.png';
import microphone from './image/microphone.png';
import setting from './image/setting.png';

const NavBar = () => (
  <div className="top-header">
    <Link to="/"><img src={back} alt="Back Icon" className="back-im" /></Link>
    <h1>COUNTRIES</h1>
    <div className="right-icon">
      <img src={microphone} alt="Microphone icon" />
      <img src={setting} alt="Setting icon" className="set-img" />
    </div>
  </div>
);

export default NavBar;
