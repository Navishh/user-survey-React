import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "./Button";

interface FormData {
  mealPlan: string;
  daysRequested: string[];
}

interface Step2Props {
  nextStep: () => void;
  prevStep: () => void;
}

const Step2: React.FC<Step2Props> = ({ nextStep, prevStep }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const [daysRequested, setDaysRequested] = useState<string[]>([]);

  const mealPlan = watch("mealPlan");

  useEffect(() => {
    if (mealPlan === "Full 21 meals") {
      setDaysRequested([
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ]);
    } else {
      setDaysRequested([]);
    }
  }, [mealPlan]);

  useEffect(() => {
    setValue("daysRequested", daysRequested);
  }, [daysRequested, setValue]);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    nextStep();
  };

  const handleCheckboxChange = (day: string) => {
    if (daysRequested.includes(day)) {
      setDaysRequested(daysRequested.filter((d) => d !== day));
    } else {
      setDaysRequested([...daysRequested, day]);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-4 md:p-8">
      <h1 className="text-[26px] font-bold text-center md:text-left">
        2. Requested Services
      </h1>
      <div className="">
        <label className="font-bold text-[16px] ">
          Choose the Meal Plan you would like to receive.
          {isSubmitted && errors.mealPlan && (
            <span className="text-red-500">*</span>
          )}
        </label>
      </div>

      <div className="space-y-2">
        <label className="flex items-center">
          <input
            type="radio"
            value="Full 21 meals"
            {...register("mealPlan", { required: true })}
            className="mr-2"
          />
          Full 21 meals
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            value="Lunch and dinner"
            {...register("mealPlan", { required: true })}
            className="mr-2"
          />
          Lunch and dinner
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            value="Only dinner"
            {...register("mealPlan", { required: true })}
            className="mr-2"
          />
          Only dinner
        </label>
      </div>

      <div className="flex flex-col mt-4">
        <label className="font-bold text-[16px]">
          Days Requested{" "}
          {isSubmitted && !daysRequested.length && (
            <span className="text-red-500">*</span>
          )}
        </label>
        <div className="mt-2 space-y-2">
          {[
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ].map((day) => (
            <label key={day} className="flex items-center">
              <input
                type="checkbox"
                value={day}
                {...register("daysRequested")}
                checked={daysRequested.includes(day)}
                onChange={() => handleCheckboxChange(day)}
                className="mr-2"
              />
              {day}
            </label>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <Button label="Back" variant="back" onClick={prevStep} />
        <Button
          label="Next Step"
          variant="next"
          onClick={() => {
            setIsSubmitted(true);
            handleSubmit(onSubmit)();
          }}
        />
      </div>
    </form>
  );
};

export default Step2;
// import React, { useEffect, useState } from "react";
// import { SubmitHandler, useForm } from "react-hook-form";
// import Button from "./Button";

// interface FormData {
//   mealPlan: string;
//   daysRequested: string[];
// }

// interface Step2Props {
//   nextStep: () => void;
//   prevStep: () => void;
// }

// const Step2: React.FC<Step2Props> = ({ nextStep, prevStep }) => {
//   const {
//     register,
//     handleSubmit,
//     setValue,
//     watch,
//     formState: { errors, isSubmitted },
//   } = useForm<FormData>();
//   const [daysRequested, setDaysRequested] = useState<string[]>([]);
//   const mealPlan = watch("mealPlan");

//   useEffect(() => {
//     if (mealPlan === "Full 21 meals") {
//       setDaysRequested([
//         "Monday",
//         "Tuesday",
//         "Wednesday",
//         "Thursday",
//         "Friday",
//         "Saturday",
//         "Sunday",
//       ]);
//     }
//   }, [mealPlan]);

//   useEffect(() => {
//     setValue("daysRequested", daysRequested);
//   }, [daysRequested, setValue]);

//   const onSubmit: SubmitHandler<FormData> = (data) => {
//     if (data.mealPlan && data.daysRequested.length > 0) {
//       console.log(data);
//       nextStep();
//     }
//   };

//   const handleCheckboxChange = (day: string) => {
//     if (daysRequested.includes(day)) {
//       setDaysRequested(daysRequested.filter((d) => d !== day));
//     } else {
//       setDaysRequested([...daysRequested, day]);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="p-4 mx-auto space-y-4 g">
//       <div className="">
//         <label className="font-bold text-[16px]">
//           Choose the Meal Plan you would like to receive.
//           {isSubmitted && errors.mealPlan && (
//             <span className="text-red-500">*</span>
//           )}
//         </label>
//       </div>

//       <div className="space-y-2">
//         <label className="flex items-center">
//           <input
//             type="radio"
//             value="Full 21 meals"
//             {...register("mealPlan", { required: true })}
//             className="mr-2"
//           />
//           Full 21 meals
//         </label>
//         <label className="flex items-center">
//           <input
//             type="radio"
//             value="Lunch and dinner"
//             {...register("mealPlan", { required: true })}
//             className="mr-2"
//           />
//           Lunch and dinner
//         </label>
//         <label className="flex items-center">
//           <input
//             type="radio"
//             value="Only dinner"
//             {...register("mealPlan", { required: true })}
//             className="mr-2"
//           />
//           Only dinner
//         </label>
//       </div>

//       <div className="flex flex-col mt-4">
//         <label className="font-bold text-[16px]">
//           Days Requested
//           {isSubmitted && errors.daysRequested && (
//             <span className="text-red-500">*</span>
//           )}
//         </label>
//         <div className="mt-2 space-y-2">
//           {[
//             "Monday",
//             "Tuesday",
//             "Wednesday",
//             "Thursday",
//             "Friday",
//             "Saturday",
//             "Sunday",
//           ].map((day) => (
//             <label key={day} className="flex items-center">
//               <input
//                 type="checkbox"
//                 value={day}
//                 checked={daysRequested.includes(day)}
//                 onChange={() => handleCheckboxChange(day)}
//                 className="mr-2"
//                 {...register("daysRequested", {
//                   required: daysRequested.length === 0,
//                 })}
//               />
//               {day}
//             </label>
//           ))}
//         </div>
//       </div>

//       <div className="flex justify-between mt-4">
//         <Button label="Back" variant="back" onClick={prevStep} />
//         <Button label="Next Step" variant="next" />
//       </div>
//     </form>
//   );
// };

// export default Step2;
