import { useState, React } from "react";
import { DotLoader } from "react-spinners";
import "../../App.css";

function Spinner({ isLoading }) {
  let [color, setColor] = useState("#d59f20");
  return (
    <div className="sweet-loading">
      <DotLoader
        color={color}
        loading={isLoading}
        className="spinner"
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <h2 className="loadingText">Loading Images ...</h2>
    </div>
  );
}

export default Spinner;
