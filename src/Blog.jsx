import Post from "./components/Post";
import Illumination from "./components/Illumination";
import { useState } from "react";

export default function Blog() {
  const [mode, setMode] = useState(false);

  const changeMode = () => {
    setMode(!mode);
  };

  return (
    <>
      <header className={`blog-header ${mode ? "darkmode" : ""}`}>
        <h2>Wanna know something interesting?</h2>
        <Illumination mode={mode} changeMode={changeMode} />
      </header>
      <section className="posts-section">
        <Post mode={mode} />
      </section>
    </>
  );
}
