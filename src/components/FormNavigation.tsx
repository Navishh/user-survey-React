import React from "react";

interface Props {
  step: number;
  nextStep: () => void;
  prevStep: () => void;
}

const FormNavigation: React.FC<Props> = ({ step, nextStep, prevStep }) => {
  return (
    <div className="flex justify-between mt-4">
      {step > 1 && (
        <button onClick={prevStep} className="p-2 bg-gray-200">
          Back
        </button>
      )}
      {step < 3 && (
        <button onClick={nextStep} className="p-2 text-white bg-blue-500">
          Next
        </button>
      )}
    </div>
  );
};

export default FormNavigation;
