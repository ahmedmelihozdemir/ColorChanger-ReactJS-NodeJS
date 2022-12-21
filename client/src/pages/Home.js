import React from "react";
import Palatte from "../components/Palatte";
import { useEffect, useState } from "react";
import { init, subscribe } from "../socket-api/socketApi";

function Home() {
  const [activeColor, setActiveColor] = useState("#000000");

  useEffect(() => {
    init();
    subscribe((activeColor) => {
      setActiveColor(activeColor);
    });
  }, []);

  return (
    <div style={{ backgroundColor: activeColor }}>
      <Palatte activeColor={activeColor} />
      <div style={{color:"white"}}>{activeColor}</div>
    </div>
  );
}

export default Home;
