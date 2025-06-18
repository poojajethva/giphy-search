import React, { useEffect, useState } from "react";
import Image from "./Image";
import constants from "../utilities/constants";

function ImageList({ data, pagination, loading, totalCount, handleButtonClick }) {
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    if (pagination === 0) {
      setImageData(data);
    } else {
      setImageData((prev) => {
        const all = [...prev, ...data];
        const uniqueMap = new Map();
        all.forEach((gif) => {
          if (!uniqueMap.has(gif.id)) {
            uniqueMap.set(gif.id, gif);
          }
        });
        return Array.from(uniqueMap.values());
      });
    }
  }, [data, pagination]);

  const canLoadMore = imageData?.length + pagination * constants.LIMIT < totalCount;

  return (
    <div className="container">
      <div className="grid-container">
        {imageData?.map((gif) => (
          <Image
            key={gif.id}
            src={gif.images.fixed_width.url}
            alt={gif.title}
          />
        ))}
      </div>
      {loading && (
        <div className="loader-container">
          <span className="loader"></span>
        </div>
      )}
      {canLoadMore && (
        <button
          className="load-more"
          onClick={handleButtonClick}
          disabled={loading}
        >
          {loading ? "Loading..." : "Load More"}
        </button>
      )}
    </div>
  );
}

export default ImageList;
