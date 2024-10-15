import React, { useState } from "react";
import "./App.css";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import StepTracker from "./components/StepTracker";

const App: React.FC = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 5;

  // const nextStep = () => setStep(step + 1);
  const nextStep = () =>
    setStep((prevStep) => Math.min(prevStep + 1, totalSteps));
  // const prevStep = () => setStep(step - 1);
  const prevStep = () => setStep((prevStep) => Math.max(prevStep - 1));

  return (
    <div className="container p-4 mx-auto">
      <StepTracker currentStep={step} totalSteps={totalSteps} />

      {step === 1 && <Step1 nextStep={nextStep} />}
      {step === 2 && <Step2 nextStep={nextStep} prevStep={prevStep} />}
      {step === 3 && <Step3 nextStep={nextStep} prevStep={prevStep} />}

      {/* <FormNavigation step={step} nextStep={nextStep} prevStep={prevStep} /> */}
    </div>
  );
};

export default App;
