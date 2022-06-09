import React from "react";

import MealsImage from "../../assets/images/meals.jpg"
import classes from "./Header.module.css";

const Header = () => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Georgian Foods</h1>
        
        <button>Cart</button>
      </header>

      <div className={classes['main-image']}>
        <img src={MealsImage} />
      </div>
    </React.Fragment>
  );
};

export default Header;
