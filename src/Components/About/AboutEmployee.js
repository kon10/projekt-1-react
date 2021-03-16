import React from "react";

function AboutEmployee({ name, desc, img }) {
  return (
    <div className="about-box-specialist">
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="about-img-specialist about-img1-specialist"
      ></div>
      <div className="about-specialist-description text-black">
        <h2>{name}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default AboutEmployee;
