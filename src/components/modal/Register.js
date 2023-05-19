import React from 'react';
import './Register.css';

function Register({ closeModal }) {
  return (
    <>
      <div className="register-overlay">
        <div className="register-modal">
          <h2 className='h2Register'>회원가입</h2>
          <button onClick={closeModal} className="close-button">
            &times;
          </button>
          <form>
            <input type="email" placeholder="이메일" required />
            <input type="password" placeholder="비밀번호" required />
            <input type="password" placeholder="비밀번호 확인" required />
            <input type="text" placeholder="이름" required />
            <input type="text" placeholder="핸드폰 번호" required />
            <input type="text" placeholder="주소" required />
            <input type="text" placeholder="상세 주소" required />
            <input type="text" placeholder="우편번호" required />
            <input type="text" placeholder="생일" required />
            <button type="submit" className="submitRegister-button">
              회원가입
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
