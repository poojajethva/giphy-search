import React, { useEffect, useState } from "react";
import Image from "./Image";
function ImageList({ data, pagination, loading }) {
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

  return (
    <>
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
    </>
  );
}

export default ImageList;
