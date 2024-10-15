import React from "react";
import Button from "./Button";

interface Step2Props {
  nextStep: () => void;
  prevStep: () => void;
}

const Step2: React.FC<Step2Props> = ({ nextStep, prevStep }) => {
  return (
    <div>
      <h1 className="text-xl font-bold">2. Requested Services</h1>
      <p>Choose the Meal Plan you would like to receive.</p>
      <div className="flex justify-between mt-4">
        <Button label="Back" variant="back" onClick={prevStep} />
        <Button label="Next" variant="next" onClick={nextStep} />
      </div>
    </div>
  );
};

export default Step2;
