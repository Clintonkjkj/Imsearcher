import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import UseFetch from "../Api/Image_fetcher";
import Spinner from "./Spinner";
import ViewFullScreen from "./ViewFullScreen";
import "../../App.css";

function Gallery({ searchText }) {
  const { apiError, apiData, isLoading } = UseFetch(searchText);

  const galleryImgs = Object.values(apiData).map((item, index) => (
    <div key={item.id} className="imgSingle">
      <Link to={`/viewFullScreen/${index}/${item.id}`}>
        <img
          className="galleryImages"
          src={item?.urls?.small}
          alt={`Image ${item.id}`}
        />
      </Link>
    </div>
  ));

  const SpinGallery = isLoading && searchText ? <Spinner /> : galleryImgs;

  const isGalleryDisp = apiError ? (
    <div className="error">Oops, something went wrong!!!</div>
  ) : (
    SpinGallery
  );

  return (
    <div className="gallery">
      <Router>
        <Routes>
          <Route
            path="/viewFullScreen/:index/:imageId"
            element={<ViewFullScreen apiData={apiData} />}
          />
          <Route path="/" element={isGalleryDisp} />
        </Routes>
      </Router>
    </div>
  );
}

export default Gallery;
