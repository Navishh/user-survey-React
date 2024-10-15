// import React, { useEffect, useState } from "react";
// import { SubmitHandler, useForm } from "react-hook-form";
// import Button from "./Button";
// import ContactInfo from "./ContactInfo";
// import CountrySelect, { CountrySelectValue } from "./CountrySelector";

// interface Step3Props {
//   nextStep: () => void;
//   prevStep: () => void;
// }

// interface FormData {
//   country: string;
//   streetName: string;
//   apartment: string;
//   city: string;
//   state: string;
//   zipCode: string;
// }

// const Step3: React.FC<Step3Props> = ({ prevStep, nextStep }) => {
//   const [isAttemptedSubmit, setIsAttemptedSubmit] = useState(false);

//   const [instructions, setInstructions] = useState("");

//   const handleInstructionsChange = (
//     event: React.ChangeEvent<HTMLTextAreaElement>
//   ) => {
//     const words = event.target.value.split(/\s+/);
//     if (words.length <= 75) {
//       setInstructions(event.target.value);
//     }
//   };

//   const [selectedCountry, setSelectedCountry] = useState<
//     CountrySelectValue | undefined
//   >(undefined);

//   const {
//     handleSubmit,
//     setError,
//     register,
//     formState: { errors },
//   } = useForm<FormData>();

//   const onSubmit: SubmitHandler<FormData> = (data) => {
//     if (selectedCountry?.label === "Sri Lanka") {
//       console.log(data);
//       nextStep();
//     } else {
//       setError("country", {
//         type: "manual",
//         message: "This program is only available for Sri Lanka.",
//       });
//     }
//   };

//   useEffect(() => {
//     const defaultCountry = {
//       value: "LKA",
//       label: "Sri Lanka",
//       flag: "",
//       latlng: [],
//       region: "",
//     };
//     setSelectedCountry(defaultCountry);
//   }, []);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-4 md:p-8">
//       <h1 className="text-[26px] font-bold text-center md:text-left">
//         1. Your Information
//       </h1>

//       <div className="flex flex-col gap-2">
//         <label className="font-bold text-[16px]">
//           Delivery Address{" "}
//           {isAttemptedSubmit &&
//             (errors.apartment ||
//               errors.city ||
//               errors.country ||
//               errors.state ||
//               errors.streetName ||
//               errors.zipCode) && <span className="text-red-500">*</span>}
//         </label>

//         <div className="flex flex-col gap-2 sm:flex-row">
//           <input
//             {...register("streetName", { required: true })}
//             placeholder="Street Name"
//             className="flex-1 p-2 border rounded-[8px]"
//           />
//           <input
//             {...register("apartment", { required: true })}
//             placeholder="Apartment, suite, etc"
//             className="flex-1 p-2 border rounded-[8px]"
//           />
//         </div>
//         <div className="flex flex-col gap-2 sm:flex-row">
//           <input
//             {...register("city", { required: true })}
//             placeholder="City"
//             className="flex-1 p-2 border rounded-[8px]"
//           />
//           <input
//             {...register("state", { required: true })}
//             placeholder="State"
//             className="flex-1 p-2 border rounded-[8px]"
//           />
//           <input
//             {...register("zipCode", { required: true })}
//             placeholder="Postal / zip code"
//             className="flex-1 p-2 border rounded-[8px]"
//           />
//         </div>
//         <div className="flex flex-col gap-2 sm:flex-row">
//           <CountrySelect
//             value={selectedCountry}
//             onChange={(value) => setSelectedCountry(value)}
//           />
//           {isAttemptedSubmit && selectedCountry?.label !== "Sri Lanka" && (
//             <p className="text-sm text-red-500">
//               This program is only available for Sri Lanka.
//             </p>
//           )}
//         </div>

//         <div className="relative">
//           <p className="text-[16px]">Delivery Instructions: (optional) </p>
//           <textarea
//             className="w-full p-2 border rounded-md"
//             placeholder="- ie., condo gate, phone first, dog will eat you, etc."
//             value={instructions}
//             onChange={handleInstructionsChange}
//           />
//           <p className="absolute text-sm text-gray-500 bottom-2 right-2">
//             {instructions.split(/\s+/).length}/75 words
//           </p>
//         </div>

//         <ContactInfo />
//       </div>

//       <div className="flex flex-row justify-between">
//         <Button label="Back" variant="back" onClick={prevStep} />
//         <Button
//           label="Next Step"
//           variant="next"
//           onClick={() => {
//             setIsAttemptedSubmit(true);
//             handleSubmit(onSubmit)();
//           }}
//         />
//       </div>
//     </form>
//   );
// };

// export default Step3;
// import React, { useEffect, useState } from "react";
// import { SubmitHandler, useForm } from "react-hook-form";
// import Button from "./Button";
// import ContactInfo from "./ContactInfo";
// import CountrySelect, { CountrySelectValue } from "./CountrySelector";

// interface Step3Props {
//   nextStep: () => void;
//   prevStep: () => void;
// }

// interface FormData {
//   country: string;
//   streetName: string;
//   apartment: string;
//   city: string;
//   state: string;
//   zipCode: string;
// }

// const Step3: React.FC<Step3Props> = ({ prevStep, nextStep }) => {
//   const [isAttemptedSubmit, setIsAttemptedSubmit] = useState(false);
//   const [instructions, setInstructions] = useState("");
//   const [selectedCountry, setSelectedCountry] = useState<
//     CountrySelectValue | undefined
//   >(undefined);

//   const {
//     handleSubmit,
//     setError,
//     register,
//     formState: { errors },
//   } = useForm<FormData>();

//   const handleInstructionsChange = (
//     event: React.ChangeEvent<HTMLTextAreaElement>
//   ) => {
//     const words = event.target.value.split(/\s+/);
//     if (words.length <= 75) {
//       setInstructions(event.target.value);
//     }
//   };

//   const onSubmit: SubmitHandler<FormData> = (data) => {
//     if (selectedCountry?.label === "Sri Lanka") {
//       console.log(data);
//       nextStep();
//     } else {
//       setError("country", {
//         type: "manual",
//         message: "This program is only available for Sri Lanka.",
//       });
//     }
//   };

//   const handleContactInfoSubmit = (contactData: any) => {
//     console.log("Contact Info Submitted:", contactData);
//   };

//   useEffect(() => {
//     const defaultCountry = {
//       value: "LKA",
//       label: "Sri Lanka",
//       flag: "",
//       latlng: [],
//       region: "",
//     };
//     setSelectedCountry(defaultCountry);
//   }, []);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-4 md:p-8">
//       <h1 className="text-[26px] font-bold text-center md:text-left">
//         1. Your Information
//       </h1>

//       <div className="flex flex-col gap-2">
//         <label className="font-bold text-[16px]">
//           Delivery Address{" "}
//           {isAttemptedSubmit &&
//             (errors.apartment ||
//               errors.city ||
//               errors.country ||
//               errors.state ||
//               errors.streetName ||
//               errors.zipCode) && <span className="text-red-500">*</span>}
//         </label>

//         <div className="flex flex-col gap-2 sm:flex-row">
//           <input
//             {...register("streetName", { required: true })}
//             placeholder="Street Name"
//             className="flex-1 p-2 border rounded-[8px]"
//           />
//           <input
//             {...register("apartment", { required: true })}
//             placeholder="Apartment, suite, etc"
//             className="flex-1 p-2 border rounded-[8px]"
//           />
//         </div>
//         <div className="flex flex-col gap-2 sm:flex-row">
//           <input
//             {...register("city", { required: true })}
//             placeholder="City"
//             className="flex-1 p-2 border rounded-[8px]"
//           />
//           <input
//             {...register("state", { required: true })}
//             placeholder="State"
//             className="flex-1 p-2 border rounded-[8px]"
//           />
//           <input
//             {...registAer("zipCode", { required: true })}
//             placeholder="Postal / zip code"
//             className="flex-1 p-2 border rounded-[8px]"
//           />
//         </div>

//         <div className="flex flex-col gap-2 sm:flex-row">
//           <CountrySelect
//             value={selectedCountry}
//             onChange={(value) => setSelectedCountry(value)}
//           />
//           {isAttemptedSubmit && selectedCountry?.label !== "Sri Lanka" && (
//             <p className="text-sm text-red-500">
//               This program is only available for Sri Lanka.
//             </p>
//           )}
//         </div>

//         <div className="relative">
//           <p className="text-[16px]">Delivery Instructions: (optional) </p>
//           <textarea
//             className="w-full p-2 border rounded-md"
//             placeholder="- ie., condo gate, phone first, dog will eat you, etc."
//             value={instructions}
//             onChange={handleInstructionsChange}
//           />
//           <p className="absolute text-sm text-gray-500 bottom-2 right-2">
//             {instructions.split(/\s+/).length}/75 words
//           </p>
//         </div>

//         <ContactInfo onSubmit={handleContactInfoSubmit} />
//       </div>

//       <div className="flex flex-row justify-between">
//         <Button label="Back" variant="back" onClick={prevStep} />
//         <Button
//           label="Next Step"
//           variant="next"
//           onClick={() => {
//             setIsAttemptedSubmit(true);
//             handleSubmit(onSubmit)();
//           }}
//         />
//       </div>
//     </form>
//   );
// };

// export default Step3;

import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "./Button";
import CountrySelect, { CountrySelectValue } from "./CountrySelector";

interface Step3Props {
  nextStep: () => void;
  prevStep: () => void;
}

interface FormData {
  country: string;
  streetName: string;
  apartment: string;
  city: string;
  state: string;
  zipCode: string;
  phoneNumberPart1: string;
  phoneNumberPart2: string;
  phoneNumberPart3: string;
  sPhoneNumberPart1: string;
  sPhoneNumberPart2: string;
  sPhoneNumberPart3: string;
  email: string;
}

const Step3: React.FC<Step3Props> = ({ prevStep, nextStep }) => {
  const [isAttemptedSubmit, setIsAttemptedSubmit] = useState(false);
  const [instructions, setInstructions] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<
    CountrySelectValue | undefined
  >(undefined);

  const {
    handleSubmit,
    setError,
    register,
    formState: { errors },
  } = useForm<FormData>();

  const handleInstructionsChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const words = event.target.value.split(/\s+/);
    if (words.length <= 75) {
      setInstructions(event.target.value);
    }
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (selectedCountry?.label === "Sri Lanka") {
      console.log("Main form submitted", data);
      nextStep();
    } else {
      setError("country", {
        type: "manual",
        message: "This program is only available for Sri Lanka.",
      });
    }
  };

  const handleContactInfoSubmit = (contactData: any) => {
    console.log("Contact Info Submitted:", contactData);
  };

  useEffect(() => {
    const defaultCountry = {
      value: "LKA",
      label: "Sri Lanka",
      flag: "",
      latlng: [],
      region: "",
    };
    setSelectedCountry(defaultCountry);
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-4 md:p-8">
      <h1 className="text-[26px] font-bold text-center md:text-left">
        1. Your Information
      </h1>

      <div className="flex flex-col gap-2">
        <label className="font-bold text-[16px]">
          Delivery Address{" "}
          {isAttemptedSubmit &&
            (errors.apartment ||
              errors.city ||
              errors.country ||
              errors.state ||
              errors.streetName ||
              errors.zipCode) && <span className="text-red-500">*</span>}
        </label>

        <div className="flex flex-col gap-2 sm:flex-row">
          <input
            {...register("streetName", { required: true })}
            placeholder="Street Name"
            className="flex-1 p-2 border rounded-[8px]"
          />
          <input
            {...register("apartment", { required: true })}
            placeholder="Apartment, suite, etc"
            className="flex-1 p-2 border rounded-[8px]"
          />
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <input
            {...register("city", { required: true })}
            placeholder="City"
            className="flex-1 p-2 border rounded-[8px]"
          />
          <input
            {...register("state", { required: true })}
            placeholder="State"
            className="flex-1 p-2 border rounded-[8px]"
          />
          <input
            {...register("zipCode", { required: true })}
            placeholder="Postal / zip code"
            className="flex-1 p-2 border rounded-[8px]"
          />
        </div>

        <div className="flex flex-col gap-2 sm:flex-row">
          <CountrySelect
            value={selectedCountry}
            onChange={(value) => setSelectedCountry(value)}
          />
          {isAttemptedSubmit && selectedCountry?.label !== "Sri Lanka" && (
            <p className="text-sm text-red-500">
              This program is only available for Sri Lanka.
            </p>
          )}
        </div>

        <div className="relative">
          <p className="text-[16px]">Delivery Instructions: (optional) </p>
          <textarea
            className="w-full p-2 border rounded-md"
            placeholder="- ie., condo gate, phone first, dog will eat you, etc."
            value={instructions}
            onChange={handleInstructionsChange}
          />
          <p className="absolute text-sm text-gray-500 bottom-2 right-2">
            {instructions.split(/\s+/).length}/75 words
          </p>
        </div>

        {/* <ContactInfo onSubmit={handleContactInfoSubmit} /> */}

        <div>
          {" "}
          <label className="font-bold text-[16px]">
            Contact Information{" "}
            {isAttemptedSubmit &&
              (errors.phoneNumberPart1 ||
                errors.phoneNumberPart2 ||
                errors.phoneNumberPart3) && (
                <span className="text-red-500">*</span>
              )}
          </label>
          <div>
            <div className="py-2">
              <label className="font-bold text-[14px]">Phone Number</label>
            </div>
            <div className="flex space-x-2">
              <input
                {...register("phoneNumberPart1", { required: true })}
                placeholder="xxx"
                maxLength={3}
                inputMode="numeric"
                pattern="[0-9]*"
                className={`w-16 p-2 border rounded-md `}
              />
              {`-`}
              <input
                {...register("phoneNumberPart2", { required: true })}
                placeholder="xxx"
                maxLength={3}
                inputMode="numeric"
                pattern="[0-9]*"
                className={`w-16 p-2 border rounded-md `}
              />
              {`-`}
              <input
                {...register("phoneNumberPart3", { required: true })}
                placeholder="xxxx"
                maxLength={4}
                inputMode="numeric"
                pattern="[0-9]*"
                className={`w-20 p-2 border rounded-md `}
              />
            </div>
          </div>
          <div>
            <div className="py-2">
              <label className="font-bold text-[14px]">
                Secondary Phone Number
              </label>
            </div>
            <div className="flex space-x-2">
              <input
                {...register("sPhoneNumberPart1", { required: true })}
                placeholder="xxx"
                maxLength={3}
                inputMode="numeric"
                pattern="[0-9]*"
                className={`w-16 p-2 border rounded-md `}
              />
              {`-`}
              <input
                {...register("sPhoneNumberPart2", { required: true })}
                placeholder="xxx"
                maxLength={3}
                inputMode="numeric"
                pattern="[0-9]*"
                className={`w-16 p-2 border rounded-md `}
              />
              {`-`}
              <input
                {...register("sPhoneNumberPart3", { required: true })}
                placeholder="xxxx"
                maxLength={4}
                inputMode="numeric"
                pattern="[0-9]*"
                className={`w-20 p-2 border rounded-md `}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="py-2">
              <label className="font-bold text-[14px]">
                Email{" "}
                {isAttemptedSubmit && errors.email && (
                  <span className="text-red-500">*</span>
                )}
              </label>
            </div>
            <div className="flex space-x-2">
              <input
                {...register("email", { required: true })}
                placeholder="applicant.email@email.com"
                className={`w-64 p-2 border rounded-md `}
              />
            </div>
          </div>
        </div>
      </div>

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
