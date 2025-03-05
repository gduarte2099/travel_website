import { useState, useEffect } from "react";
import "./ScrollUp.css";

const ScrollUp = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY >= 350);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <a href="#" className={`scrollup ${showScroll ? "show-scroll" : ""}`} id="scroll-up">
        <i className="ri-arrow-up-line"></i>
      </a>
    </div>
  );
};

export default ScrollUp;
