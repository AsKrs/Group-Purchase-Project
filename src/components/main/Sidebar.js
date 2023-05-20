import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
         <div className="board-links">
        <h2>상품 상태</h2>
        <a href="#진행중인 상품">진행중인 상품</a>
        <a href="#종료된 상품">종료된 상품</a>
      </div>
      <div className="board-links">
        <h2>게시판</h2>
        <a href="#상품 게시판">상품 게시판</a>
        <a href="#정보 게시판">정보 게시판</a>
        <a href="#후기 게시판">후기 게시판</a>
        <a href="#꿀팁 게시판">꿀팁 게시판</a>
      </div>
      <div className="board-links">
        <h2>이벤트</h2>
        <a href="#이벤트 게시판">이벤트 게시판</a>
      </div>
    </div>
  );
}

export default Sidebar;
