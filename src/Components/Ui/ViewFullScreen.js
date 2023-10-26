import React, { useState, useEffect } from "react";
import "../../App.css";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import Gallery from "./gallery";
import Spinner from "./Spinner";

function ViewFullScreen(apiData) {
  const { index } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const url = Object.values(apiData)[0][index]?.urls?.full;

  return (
    <div className="fullImgContainer">
      <Link to="/" className="backBtn">
        Back
      </Link>
      <Routes>
        <Route Component={<Gallery />} />
      </Routes>
      {isLoading ? (
        <Spinner isLoading={isLoading} />
      ) : (
        <img src={url} className="fullImgChild" alt="Full Size" />
      )}
    </div>
  );
}

export default ViewFullScreen;
