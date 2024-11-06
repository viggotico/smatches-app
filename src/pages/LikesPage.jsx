import React from "react";
import "../css/LikesPage.css";
import profileImage from "../assets/people/ali/pexels-ali-akash-3515575-5253668.jpg";

export const LikesPage = () => {
  return (
    <div className="likes-page">
      <header className="likes-header">
        <h1>6 likes</h1>
        <button className="settings-button">
          <img src="path_to_settings_icon" alt="Settings" />
        </button>
      </header>

      <section className="likes-grid">
        <div className="like-item">
          <img src="path_to_image" alt="Andreas" />
          <div className="label">Smash 🤤</div>
          <p>Andreas</p>
        </div>
        <div className="like-item">
          <img src="path_to_image" alt="Mikkel" />
          <div className="label">Marry 💍</div>
          <p>Mikkel</p>
        </div>
        <div className="like-item">
          <img src="path_to_image" alt="Søren" />
          <div className="label">Smash 🤤</div>
          <p>Søren</p>
        </div>
        {/* Repeat for other items */}
      </section>

      <section className="daily-roulette">
        <h2>Din daglige roulette</h2>
        <div className="roulette-container">
          <div className="roulette-item">+</div>
          <div className="roulette-item">+</div>
          <div className="roulette-item">+</div>
          <div className="roulette-item">+</div>
          <div className="roulette-center">
            <span>TILFØJ LIKES</span>
            <button className="spin-button">SPIN</button>
          </div>
        </div>
      </section>

      <footer className="navigation">
        <button>Opdag</button>
        <button>Smatches</button>
        <button>Likes</button>
        <button>Profil</button>
      </footer>
    </div>
  );
};

export default LikesPage;
