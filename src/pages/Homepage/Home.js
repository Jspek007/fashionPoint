import React, { Fragment } from "react";
import "./Home.scss";
import HomepageImage from "../../assets/images/mainImage.jpg";

function Home() {
  return (
    <Fragment>
      <section className="wave-container">
        <section class="wave">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </section>

        <section className="homepage-media">
          <img
            src={HomepageImage}
            alt="Your fashion outlet!"
            className="main-area-content"
            draggable="false"
          />
        </section>

        <section className="homepage-actions">
          <section className="action-text-main">
            Krijg toegang tot onze uitgebreide fashion outlets
          </section>

          <section className="action-text-secondairy">
            Met kortingen tot wel 70%
          </section>
          <button className="sign-up-action-button-content">
            Ik heb al een account
          </button>
          <button className="login-action-button-content">Meld mij aan</button>
        </section>
      </section>
    </Fragment>
  );
}

export default Home;
