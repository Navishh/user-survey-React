import React from "react";
import Button from "./Button";

interface Step3Props {
  nextStep: () => void;
  prevStep: () => void;
}

const Step3: React.FC<Step3Props> = ({ prevStep, nextStep }) => {
  return (
    <div>
      <h1 className="text-xl font-bold">3. Final Review</h1>
      <p>Review your information and submit your form.</p>

      <div className="flex justify-between mt-4">
        <Button label="Back" variant="back" onClick={prevStep} />
        <Button label="Next" variant="next" onClick={nextStep} />
        {/* <Button
          label="Submit"
          variant="next"
          onClick={() => alert("Form submitted!")}
        /> */}
      </div>
    </div>
  );
};

export default Step3;
