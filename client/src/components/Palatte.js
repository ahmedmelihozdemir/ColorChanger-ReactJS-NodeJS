import { useState } from "react";
import { send } from "../socket-api/socketApi";

function Palatte({ activeColor}) {
  const [color, setColor] = useState("#000000");
  return (
    <div className="palatte">
      <h1>Palatte</h1>
      <div className="palatte-container">
        <input
          type="color"
          value={activeColor}
          onChange={(e) => setColor(e.target.value)}
        />
        <button
          className="palatte-button"
          onClick={() => {
            send(color);
          }}
        >
          Send Color to Backend
        </button>
        
      </div>
    </div>
  );
}

export default Palatte;
