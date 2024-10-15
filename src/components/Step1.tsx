import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "./Button";

interface FormData {
  firstName: string;
  lastName: string;
  otherFirstName?: string;
  otherLastName?: string;
  relationship?: string;
  day: string;
  month: string;
  year: string;
  disability: "yes" | "no";
}

interface Step1Props {
  nextStep: () => void;
}

const Step1: React.FC<Step1Props> = ({ nextStep }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [isSubmittingForSomeoneElse, setIsSubmittingForSomeoneElse] =
    useState(false);
  const [hasDisability, setHasDisability] = useState(false);
  const [isAttemptedSubmit, setIsAttemptedSubmit] = useState(false);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-4 md:p-8">
      <h1 className="text-[26px] font-bold text-center md:text-left">
        1. Your Information
      </h1>

      <div className="flex flex-col gap-2">
        <label className="font-bold text-[16px]">
          Applicant's Name{" "}
          {isAttemptedSubmit && errors.firstName && (
            <span className="text-red-500">*</span>
          )}
        </label>
        <div className="flex flex-col gap-2 sm:flex-row">
          <input
            {...register("firstName", { required: true })}
            placeholder="First Name"
            className="flex-1 p-2 border rounded-md"
          />
          <input
            {...register("lastName", { required: true })}
            placeholder="Last Name"
            className="flex-1 p-2 border rounded-md"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          onChange={() =>
            setIsSubmittingForSomeoneElse(!isSubmittingForSomeoneElse)
          }
          className="w-5 h-5"
        />
        <label className="text-sm">
          Are you submitting this application on behalf of someone else?
        </label>
      </div>

      {isSubmittingForSomeoneElse && (
        <>
          <div className="flex flex-col gap-2">
            {isSubmittingForSomeoneElse && (
              <p className="text-sm italic text-gray-600">
                If you are submitting this form for another person, please
                provide your information below:
                {errors.firstName && errors.lastName && (
                  <span className="pl-2 text-red-500">*</span>
                )}
              </p>
            )}

            <div className="flex flex-col gap-2 sm:flex-row">
              <input
                {...register("otherFirstName")}
                placeholder="First Name"
                className="flex-1 p-2 border rounded-md"
              />
              <input
                {...register("otherLastName")}
                placeholder="Last Name"
                className="flex-1 p-2 border rounded-md"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label>
              Relationship to Applicant{" "}
              {isAttemptedSubmit && errors.relationship && (
                <span className="text-red-500">*</span>
              )}
            </label>
            <select
              {...register("relationship", { required: true })}
              className="w-full p-2 border rounded-md sm:w-48"
            >
              <option value="">Select</option>
              <option value="parent">Parent</option>
              <option value="guardian">Guardian</option>
            </select>
          </div>
        </>
      )}

      <div className="flex flex-col gap-2">
        <label className="font-bold text-[16px]">
          Age{" "}
          {isAttemptedSubmit && (errors.day || errors.month || errors.year) && (
            <span className="text-red-500">*</span>
          )}
        </label>
        <div className="flex flex-col gap-2 sm:flex-row">
          <input
            {...register("day", { required: true })}
            placeholder="DD"
            className="flex-1 p-2 border rounded-md"
          />
          <input
            {...register("month", { required: true })}
            placeholder="MM"
            className="flex-1 p-2 border rounded-md"
          />
          <input
            {...register("year", { required: true })}
            placeholder="YYYY"
            className="flex-1 p-2 border rounded-md"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-bold text-[16px]">
          Do you have a disability?{" "}
          {isAttemptedSubmit && errors.disability && (
            <span className="text-red-500">*</span>
          )}
        </label>
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <input
              type="radio"
              value="yes"
              {...register("disability", { required: true })}
              onChange={() => setHasDisability(true)}
              className="w-5 h-5"
            />
            <label>Yes</label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              value="no"
              {...register("disability", { required: true })}
              onChange={() => setHasDisability(false)}
              className="w-5 h-5"
            />
            <label>No</label>
          </div>
        </div>
      </div>

      {hasDisability && (
        <div>
          <label className="text-sm italic text-gray-600">
            If yes, please upload documentation of your disability:
          </label>
          <input type="file" className="p-2 border rounded-md" />
        </div>
      )}

      <div className="flex flex-row justify-between">
        <Button label="Back" variant="back" />
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

export default Step1;
