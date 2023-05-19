import React from "react";
import "./Navbar.css";
import Login from "../modal/Login";
import Register from "../modal/Register";
import { useState } from "react";

function Navbar() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const openLoginModal = () => setShowLoginModal(true);
  const closeLoginModal = () => setShowLoginModal(false);

  const openRegisterModal = () => setShowRegisterModal(true);
  const closeRegisterModal = () => setShowRegisterModal(false);

  return (
    <nav className="navbar">
      <img src={process.env.PUBLIC_URL + "/GPP.jpeg"} alt="GPP Logo" className="navbar-logo" />
      <div className="navbar-center">
        <ul className="navbar-menu">
          <li className="navbar-item">
            <button className="navbar-links">
              홈
            </button>
          </li>
          <li className="navbar-item">
            <button className="navbar-links">
              안내
            </button>
          </li>
          <li className="navbar-item">
            <button className="navbar-links">
              서비스
            </button>
          </li>
          <li className="navbar-item">
            <button className="navbar-links">
              고객센터
            </button>
          </li>
        </ul>
      </div>
      <div className="navbar-buttons">
        <button className="navbar-links navbar-login" onClick={openLoginModal}>로그인</button>
        <button className="navbar-links navbar-signup" onClick={openRegisterModal}>회원가입</button>
        
      </div>

      {showLoginModal && <Login closeModal={closeLoginModal} />}
  
      {showRegisterModal && <Register closeModal={closeRegisterModal} />}
    
    </nav>
  );
}

export default Navbar;
