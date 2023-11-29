import {NavLink} from 'react-router-dom';

import './Navbar.css'

const Navbar = () => {
   return (
      <nav>
         <NavLink
            className ={({isActive}) => (isActive? "active" : undefined)}
            to="/">
            Home
         </NavLink>
         <NavLink 
            className={({isactive}) => (isActive ? "active" : undefined)} to="/Atendimento">
            Atendimento
         </NavLink>
         <NavLink 
            className={({isactive}) => (isActive ? "active" : undefined)} to="/Sobre">
            Atendimento
         </NavLink>
      </nav>
   );
};

export default Navbar;
