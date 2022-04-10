import React from "react";
import Logo from "../images/logo.png";
import "../styles/footer.css";

function Footer() {
  return (
    <section className="footer">
      <div className="footer-first-div">
        <div>
          <img src={Logo} className="footer-logo" alt="pen-image" />
        </div>

        <div> BARBE &amp; CIMON NOTATIRES</div>
      </div>

      <div className="footer-second-div">
        <ul className="footer-list-1">
          <li>À PROPOS</li>
          <li>NOS SERVICES</li>
          <li>ARTICLES</li>
          <li>CONTACT</li>
        </ul>

        <ul className="footer-list-2">
          <li className="font-bold">BUREAU</li>
          <li>101 BOULEVARD SAINT JOSEPH O, MONTRÉAL, QC H2T 2PT</li>
          <li className="font-bold">NOUS SUIVE</li>
        </ul>
      </div>
    </section>
  );
}

export default Footer;
