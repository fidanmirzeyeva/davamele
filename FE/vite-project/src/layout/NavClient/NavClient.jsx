import React from "react";
import { Link } from "react-router-dom";

import Basket from "../../pages/Basket/Basket";
import WishList from "../../pages/WishList/WishList";
import styles from './NavClient.module.scss';

function NavClient() {
  return (
    <>
      <nav className={styles.navClient}>
        <div className={styles.text_Client}>
          <i className="fa-solid fa-bars"></i>
          <p>Home Page</p>
        </div>
        <div className={styles.list_Client}>
          <ul>
            <Link to="/">Home</Link>
            <Link to={"products"}>Products</Link>
            <Link to={"basket"}>Basket</Link>
            <Link to={"wishlist"}>Wish List</Link>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavClient;
