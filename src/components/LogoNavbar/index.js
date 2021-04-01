import React from "react";
import "./logoNavbar.css";
import icecreame from "../../img/icecreame.png";

const LogoNavbar = () => {
  return (
    <div class="logo">
      <div>
        <img src={icecreame}></img>
      </div>
      <div class="member">
        <details>
          <summary>Member</summary>
          <ul>
            <li>
              <p>61010279 Nachaphat Ainthong</p>
            </li>
            <li>
              <p>61010432 Tanapon Patpin</p>
            </li>
            <li>
              <p>61010568 Nattapong Kueakool</p>
            </li>
            <li>
              <p>61010583 Nitikorn Taoto</p>
            </li>
            <li>
              <p>61010588 Niracha Boonyanaet</p>
            </li>
            <li>
              <p>61010844​ Puwadol Limwanichsin</p>
            </li>
            <li>
              <p>61011432 Surasee Intarawat</p>
            </li>
          </ul>
        </details>
      </div>
    </div>
  );
};

export default LogoNavbar;
