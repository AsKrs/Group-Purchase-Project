import React from 'react';
import './Login.css';

function Login({ closeModal }) {
  return (
    <div className="login">
      <div className="login-content">
        <h2 className='h2login'>로그인</h2>
        <button onClick={closeModal} className="close-button">
          &times;
        </button>
        <form>
          <input type="email" placeholder="이메일" required />
          <input type="password" placeholder="비밀번호" required />
          <button type="submit" className="submitLogin-button">
            로그인
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
