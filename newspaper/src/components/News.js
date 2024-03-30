import React from "react";
export default function News(p) {
  let block = {
    color: p.color,
    backgroundColor: p.bg,
    boxShadow: `0 0 5px ${p.color}`,
  };
  let imageStyle = {
    width: "100%",
    borderRadius: "10px",
  };
  let btn = {
    position: "absolute",
    bottom: "0",
    color: p.color,
    textDecoration: "none",
  };
  return (
    <div style={block} className="item">
      <div>
        <img src={p.urlToImage} alt="" style={imageStyle} />
      </div>
      <div>
        <h1>{p.title}</h1>
      </div>
      <div>
        <p>{p.detail}</p>
      </div>
      <div>
        <a style={btn} href={p.url} target="_blank">
          More About
        </a>
      </div>
      <div className="side">
        <div>Author:{p.author}</div>
        <div>Date:{p.date}</div>
      </div>
    </div>
  );
}
