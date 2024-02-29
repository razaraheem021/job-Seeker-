import React from "react";
import styled from "styled-components";

const StepperContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Step = styled.div`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: ${(props) => (props.active ? "green" : "gray")};
`;

const Line = styled.div`
  flex: 1;
  height: 2px;
  background-color: ${(props) => (props.active ? "green" : "gray")};
`;

const Stepper = ({ steps, currentStep }) => {
  return (
    <StepperContainer>
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <Step active={index <= currentStep}>{step}</Step>
          {index < steps.length - 1 && <Line active={index < currentStep} />}
        </React.Fragment>
      ))}
    </StepperContainer>
  );
};

export default Stepper;
