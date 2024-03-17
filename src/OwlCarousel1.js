import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const OwlCarousel1 = () => {
  const options = {
    items: 3,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
  };
  return (
    <OwlCarousel className="owl-theme" {...options}>
      <div className="item">
        <h4>1</h4>
      </div>
      <div className="item">
        <h4>2</h4>
      </div>
      <div className="item">
        <h4>3</h4>
      </div>
      <div className="item">
        <h4>4</h4>
      </div>
      <div className="item">
        <h4>5</h4>
      </div>
      <div className="item">
        <h4>6</h4>
      </div>
      <div className="item">
        <h4>7</h4>
      </div>
      <div className="item">
        <h4>8</h4>
      </div>
      <div className="item">
        <h4>9</h4>
      </div>
      <div className="item">
        <h4>10</h4>
      </div>
    </OwlCarousel>
  );
};
export default OwlCarousel1;
