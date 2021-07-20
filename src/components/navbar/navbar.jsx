import React from 'react';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import logo from '../../image/log.png'
import './navbar.css';
import {Link,useLocation} from 'react-router-dom';


const Navbar = ({totalitems,totalprice}) => {
  const location = useLocation();
    const StyledBadge = withStyles((theme) => ({
        badge: {
          right: -3,
          top: 13,
          border: `2px solid ${theme.palette.background.paper}`,
          padding: '0 4px',
        },
      }))(Badge);
      
    return (
        <div className="navbar__container">
           <div className="logo">
              <Link to="/">
              <a href="#top">
              <img src={logo} alt="logo" className="logo__img"/>
              </a>
              </Link>
           </div>
          {location.pathname === "/basket" ? (
            <p className="totalcost"><span>Total: </span>{totalprice}</p>
          ):
          (
            <div className="shopping__cart">
           <Link to="/basket">
           <IconButton aria-label="cart">
      <StyledBadge badgeContent={totalitems} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
           </Link>
           </div>
          )}
        </div>
    )
}

export default Navbar
