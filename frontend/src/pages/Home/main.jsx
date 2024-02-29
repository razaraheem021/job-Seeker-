import React, { useState } from "react";
import styled from "styled-components";
import Stepper from "./stepper";
import Step1Component from "./Step1Component";
import Step2Component from "./Step2Component";
import Step3Component from "./Step3Component";

const LeftArrow = "\u2190";
const RightArrow = "\u2192";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 0 10px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const CustomStepper = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = ["Step 1", "Step 2", "Step 3"];
  const StepComponents = [Step1Component, Step2Component, Step3Component];

  const handleNextStep = () => {
    setCurrentStep((currentStep) => currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((currentStep) => currentStep - 1);
  };

  const CurrentStepComponent = StepComponents[currentStep];
  const isLastStep = currentStep === steps.length - 1;

  return (
    <div>
      <Stepper steps={steps} currentStep={currentStep} />
      <div>
        <div>
          <CurrentStepComponent />
        </div>
        <ButtonContainer>
          {currentStep > 0 && (
            <Button onClick={handlePrevStep}>{LeftArrow} Previous</Button>
          )}
          {currentStep < steps.length - 1 && (
            <Button onClick={handleNextStep}>Next {RightArrow}</Button>
          )}
          {isLastStep && <Button onClick={handleNextStep}>Submit</Button>}
        </ButtonContainer>
      </div>
    </div>
  );
};

export default CustomStepper;
