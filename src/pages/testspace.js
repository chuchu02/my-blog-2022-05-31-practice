import { Link } from "gatsby";
import React from "react";

function TestSpacePage() {
  return (
    <main>

<div style={{display:"flex", gap:20}}>
      <Link to="/">홈</Link>
      <Link to="/about">어바웃</Link>
      <Link to="/test">테스트</Link>
      <Link to="/testspace">테스트 스페이스</Link>
      </div>
      <title>테스트 스페이스</title>
      <h1>테스트 스페이스 페이지 입니다.</h1>
    </main>
  );
}

export default TestSpacePage;