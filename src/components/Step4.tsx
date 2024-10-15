import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "./Button";

interface Step3Props {
  nextStep: () => void;
  prevStep: () => void;
}

const Step3: React.FC<Step3Props> = ({ prevStep, nextStep }) => {
  const [isAttemptedSubmit, setIsAttemptedSubmit] = useState(false);

  const {
    handleSubmit,
    // formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-4 md:p-8">
      <div className="flex flex-row justify-between">
        <Button label="Back" variant="back" onClick={prevStep} />
        <Button
          label="Next Step"
          variant="next"
          onClick={() => {
            setIsAttemptedSubmit(true);
            handleSubmit(onSubmit)();
          }}
        />
      </div>
    </form>
  );
};

export default Step3;
