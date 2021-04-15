import React from "react";
import styled from "styled-components";
import CarouselComponent from "./components/CarouselComponent";

const StyledContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

function App() {
  return (
    <>
      <StyledContainer>
        <CarouselComponent />
      </StyledContainer>
    </>
  );
}

export default App;
