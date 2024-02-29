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

import React, { useEffect } from "react";
import Main from "./main";
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser, postLoginUser, postRegisterUser } from "@/redux/features/Users";

const index = () => {
  const dispatch = useDispatch();
  const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;
const user=useSelector((state)=>state.users.user)
const mydata=useSelector((state)=>state.users)


console.log(mydata)





useEffect(()=>{
dispatch(getCurrentUser());
},[dispatch])


useEffect(()=>{
console.log(user)
},[])

  const handleLoginUser =()=>{
    try {
      const data={
        email:"az@gmail.com",
        password:"12345678",
        role:"Job Seeker"
    }
    dispatch(postLoginUser(data));
    } catch (error) {
      console.error('Error logging in:', error);
    }
  }
  const handleRegionUser =()=>{
    try {
      const data={
        "name":"pasaaa",
        "email":"z27azp@gmail.com",
        "phone":1234567,
        "role":"Job Seeker",
        "password":"12345678"
    }
    dispatch(postRegisterUser(data));
    } catch (error) {
      console.error('Error logging in:', error);
    }
  }
  return (
    <div>
      <p>Base URL: {baseUrl}</p>
      <button onClick={handleLoginUser}>Click Me</button>
      <br />
      <br />
      <br />
      <p>{user?.name}</p>
      <br />
      <br />
      <br />
      <button onClick={handleRegionUser} >Clcik</button>
      <br />
      <br />
      <Main />
    </div>
  );
};

export default index;
