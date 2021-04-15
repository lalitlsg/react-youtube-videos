import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

import first from "../images/first.svg";
import second from "../images/second.svg";
import third from "../images/third.svg";
import forth from "../images/forth.svg";
import fifth from "../images/fifth.svg";
import AppImage from "./AppImage";

const forwardArrowAnimation = keyframes`
0%{
    left: 50%;
}
100%{
    left: 90%;
}
`;

const backwardArrowAnimation = keyframes`
0%{
    left: 50%;
}
100%{
    left: 5%;
}
`;

const StyledCarouselContainer = styled.div`
  width: 90%;
  height: 80vh;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const StyledArrowContainer = styled.div`
  font-size: 35px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  left: ${(props) => props.leftPosition};
  position: absolute;

  ${(props) =>
    props.arrowDir === "forward"
      ? css`
          animation: ${forwardArrowAnimation} 1s ease;
        `
      : css`
          animation: ${backwardArrowAnimation} 1s ease;
          left: 5%;
        `}
  z-index: 1;
  cursor: pointer;
  :hover {
    background-color: #d9d9d9;
  }
`;

const StyledIndicatorContainer = styled.div`
  width: 200px;
  margin: 0 auto;
  display: flex;
`;

const StyledIndicator = styled.div`
  width: 30px;
  height: 8px;
  margin: 5px;
  background-color: #d9d9d9;
  background-color: ${(props) => props.bgColor};
  border-radius: 5px;
`;

const images = [first, second, third, forth, fifth];

const CarouselComponent = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState("forward");

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => prevIndex + 1);
    setDirection("forward");
  };

  const preImage = () => {
    setCurrentImageIndex((prevIndex) => prevIndex - 1);
    setDirection("backward");
  };

  return (
    <>
      <StyledCarouselContainer>
        {currentImageIndex !== 0 && (
          <StyledArrowContainer
            onClick={preImage}
            leftPosition="10%"
            arrowDir="backward"
          >
            <MdKeyboardArrowLeft />
          </StyledArrowContainer>
        )}
        <AppImage src={images[currentImageIndex]} imageDir={direction} />
        {currentImageIndex !== images.length - 1 && (
          <StyledArrowContainer
            onClick={nextImage}
            leftPosition="90%"
            arrowDir="forward"
          >
            <MdKeyboardArrowRight />
          </StyledArrowContainer>
        )}
      </StyledCarouselContainer>
      <StyledIndicatorContainer>
        {images.map((img, index) => (
          <StyledIndicator
            key={img}
            bgColor={index === currentImageIndex ? "#1aff1a" : ""}
          />
        ))}
      </StyledIndicatorContainer>
    </>
  );
};

export default CarouselComponent;
