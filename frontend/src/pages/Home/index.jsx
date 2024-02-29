// import React, { useState } from "react";
// import styled from "styled-components";
// import Step3Component from "./Step3Component";
// import Step2Component from "./Step2Component";
// import Step1Component from "./Step1Component";

// const LeftArrow = "\u2190";
// const RightArrow = "\u2192";

// // Define styles for the stepper
// const StepperContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

// const Step = styled.div`
//   flex: 1;
//   text-align: center;
//   font-weight: bold;
//   color: ${(props) => (props.active ? "green" : "gray")};
// `;

// const Line = styled.div`
//   flex: 1;
//   height: 2px;
//   background-color: ${(props) => (props.active ? "green" : "gray")};
// `;

// const ButtonContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-top: 20px; /* Adjust top margin */
// `;

// const Button = styled.button`
//   padding: 10px 20px;
//   margin: 0 10px;
//   font-size: 16px;
//   background-color: #007bff;
//   color: #fff;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
// `;

// const Stepper = ({ steps, currentStep }) => {
//   return (
//     <StepperContainer>
//       {steps.map((step, index) => (
//         <React.Fragment key={index}>
//           <Step active={index <= currentStep}>{step}</Step>
//           {index < steps.length - 1 && <Line active={index < currentStep} />}
//         </React.Fragment>
//       ))}
//     </StepperContainer>
//   );
// };

// // Example usage
// const CustomStepper = () => {
//   const [currentStep, setCurrentStep] = useState(0);

//   const steps = ["Step 1", "Step 2", "Step 3"];
//   const StepComponents = [Step1Component, Step2Component, Step3Component]; // Import and define your step components

//   const handleNextStep = () => {
//     setCurrentStep((currentStep) => currentStep + 1);
//   };

//   const handlePrevStep = () => {
//     setCurrentStep((currentStep) => currentStep - 1);
//   };

//   const CurrentStepComponent = StepComponents[currentStep];

//   const isLastStep = currentStep === steps.length - 1;

//   return (
//     <div>
//       <Stepper steps={steps} currentStep={currentStep} />
//       <div>
//         <div>
//           <CurrentStepComponent />
//         </div>
//         <ButtonContainer>
//           {currentStep > 0 && (
//             <Button onClick={handlePrevStep}>{LeftArrow} Previous</Button>
//           )}
//           {currentStep < steps.length - 1 && (
//             <Button onClick={handleNextStep}>Next {RightArrow}</Button>
//           )}
//           {isLastStep && (
//             <Button onClick={handleNextStep}>Submit</Button>
//           )}
//         </ButtonContainer>
//       </div>
//     </div>
//   );
// };

// export default CustomStepper;

import React from 'react'
import Main from './main'

const index = () => {
  return (
    <div><Main/></div>
  )
}

export default index