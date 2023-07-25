import Logo from '../img/logo.jpg';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
      <>
      <div className="header">
        <img className='logo' src={Logo}></img>
          <ul>
            
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
      </div>
      </>
    );
  };
  
  export default Header;