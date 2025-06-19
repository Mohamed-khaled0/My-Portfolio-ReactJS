/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "../index.css";

export default function Scroll2Top() {
  const [showScrollBTN, setShowScrollBTN] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let value = window.scrollY;
      if (value > 300) {
        setShowScrollBTN(true);
      } else {
        setShowScrollBTN(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className="scroll2Top icon-arrow-up"
      aria-label="Scroll to top"
      style={{ opacity: showScrollBTN ? 1 : 0, transition: "1s", position: 'fixed', right: 24, bottom: 32, zIndex: 1000 }}
      onClick={handleClick}
    />
  );
}
