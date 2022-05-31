import { Link } from "gatsby"
import * as React from "react"

// markup
const IndexPage = () => {
  return (
    <main>

<div style={{display:"flex", gap:20}}>
      <Link to="/">홈</Link>
      <Link to="/about">어바웃</Link>
      <Link to="/test">테스트</Link>
      <Link to="/testspace">테스트 스페이스</Link>
      </div>
      <title>Home Page</title>
      <h1>Home Page!!!</h1>
    </main>
  )
}

export default IndexPage
