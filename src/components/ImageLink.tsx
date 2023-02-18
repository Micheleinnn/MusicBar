import React from "react";

const ImageLink = ({ href, src, alt }) => {
  return (
    <a href={href} target="_blank">
      <img src={src} className="logo" alt={alt} />
    </a>
  );
};

export default ImageLink;
