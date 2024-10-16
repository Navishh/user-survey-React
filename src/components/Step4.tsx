// import React from "react";
// import { useForm } from "react-hook-form";
// import Button from "./Button";

// interface Step4Props {
//   prevStep: () => void;
//   nextStep: () => void;
//   firstName: string;
//   lastName: string;
// }

// const Step4: React.FC<Step4Props> = ({
//   prevStep,
//   nextStep,
//   firstName,
//   lastName,
// }) => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data: any) => {
//     console.log(data);
//     nextStep();
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="p-4 mx-auto space-y-4 ">
//       <h1 className="text-[26px] font-bold ">Review / Sign / Submit</h1>
//       <h2 className="font-bold text-[20px]">
//         Name for Signature: {firstName} {lastName}
//       </h2>
//       <div className="space-y-4">
//         <h2 className="font-bold text-[20px]">
//           Type Name Here to Virtually Sign Document:
//         </h2>
//         <input
//           type="text"
//           placeholder="First Name"
//           {...register("signFirstName", { required: true })}
//           className={`w-full p-2 border rounded ${
//             errors.signFirstName ? "border-red-600" : "border-gray-300"
//           }`}
//           aria-invalid={errors.signFirstName ? "true" : "false"}
//         />
//         <input
//           type="text"
//           placeholder="Last Name"
//           {...register("signLastName", { required: true })}
//           className={`w-full p-2 border rounded ${
//             errors.signLastName ? "border-red-600" : "border-gray-300"
//           }`}
//           aria-invalid={errors.signLastName ? "true" : "false"}
//         />
//         {errors.signatureMismatch && <p className="text-red-600">{}</p>}
//       </div>

//       <div className="flex justify-between mt-4">
//         <Button label="Back" variant="back" onClick={prevStep} />
//         <Button label="Submit" variant="next" />
//       </div>
//     </form>
//   );
// };

// export default Step4;
// import React from "react";
// import { useForm } from "react-hook-form";
// import Button from "./Button";

// interface Step4Props {
//   prevStep: () => void;
//   nextStep: () => void;
//   firstName: string;
//   lastName: string;
// }

// const Step4: React.FC<Step4Props> = ({
//   prevStep,
//   nextStep,
//   firstName,
//   lastName,
// }) => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     if (data.signFirstName !== firstName || data.signLastName !== lastName) {
//       alert("Signature name mismatch!");
//     } else {
//       nextStep();
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="p-4 mx-auto space-y-4 ">
//       <h1 className="text-[26px] font-bold ">Review / Sign / Submit</h1>
//       <div className="flex flex-row justify-between">
//         {" "}
//         <p className="font-bold text-[14px] flex flex-col">
//           Applicant’s Name:{" "}
//           <span className="font-normal">
//             {" "}
//             {firstName} {lastName}
//           </span>
//         </p>{" "}
//         <p className="font-bold text-[14px] flex flex-col">
//           Age: <span className="font-normal"> </span>
//         </p>{" "}
//         <p className="font-bold text-[14px] flex flex-col">
//           Do you have a disability? <span className="font-normal"> </span>
//         </p>{" "}
//         <p className="font-bold text-[14px] flex flex-col">
//           Disability Documentation Upload: <span className="font-normal"></span>
//         </p>
//       </div>
//       <div className="flex flex-row gap-[225px] ">
//         {" "}
//         <p className="font-bold text-[14px] flex flex-col">
//           Meal Plan Choice: <span className="font-normal"></span>
//         </p>{" "}
//         <p className="font-bold text-[14px] flex flex-col">
//           Days Requested: <span className="font-normal"> </span>
//         </p>{" "}
//       </div>
//       <div className="flex flex-row justify-between">
//         {" "}
//         <p className="font-bold text-[14px] flex flex-col">
//           Delivery Address: <span className="font-normal"></span>
//         </p>{" "}
//       </div>
//       <div className="flex flex-row justify-between">
//         {" "}
//         <p className="font-bold text-[14px] flex flex-col">
//           Delivery Instructions: <span className="font-normal"> </span>
//         </p>{" "}
//       </div>
//       <div className="flex flex-row gap-[240px]">
//         {" "}
//         <p className="font-bold text-[14px] flex flex-col">
//           Phone Number: <span className="font-normal"> </span>
//         </p>{" "}
//         <p className="font-bold text-[14px] flex flex-col">
//           Email: <span className="font-normal"> </span>
//         </p>{" "}
//       </div>

//       <div className="space-y-4">
//         <h2 className="font-bold text-[16px]">
//           Type Name Here to Virtually Sign Document:
//         </h2>
//         <div className="flex gap-20">
//           <input
//             type="text"
//             placeholder="First Name"
//             {...register("signFirstName", { required: true })}
//             className={`w-72 p-2 border rounded text-[13px] ${
//               errors.signFirstName ? "border-red-600" : "border-gray-300"
//             }`}
//           />
//           {errors.signFirstName && (
//             <span className="text-red-500">First name is required</span>
//           )}
//           <input
//             type="text"
//             placeholder="Last Name"
//             {...register("signLastName", { required: true })}
//             className={`w-72 p-2 border rounded text-[13px] ${
//               errors.signLastName ? "border-red-600" : "border-gray-300"
//             }`}
//           />
//         </div>
//         {errors.signLastName && (
//           <span className="text-red-500">Last name is required</span>
//         )}
//       </div>

//       <div className="flex justify-between">
//         <Button label="Back" variant="back" onClick={prevStep} />
//         <Button label="Next Step" variant="next" />
//       </div>
//     </form>
//   );
// };

// export default Step4;
// import React from "react";
// import { useForm } from "react-hook-form";
// import { useUser } from "../context/UserContext";
// import Button from "./Button";

// interface Step4Props {
//   prevStep: () => void;
//   nextStep: () => void;
//   firstName: string;
//   lastName: string;
//   age: string;
//   disability: string;
//   formData: FormData;
// }

// interface FormData {
//   country: string;
//   streetName: string;
//   apartment: string;
//   city: string;
//   state: string;
//   zipCode: string;
//   phoneNumberPart1: string;
//   phoneNumberPart2: string;
//   phoneNumberPart3: string;
//   sPhoneNumberPart1: string;
//   sPhoneNumberPart2: string;
//   sPhoneNumberPart3: string;
//   email: string;
//   instructions: string;
// }

// const Step4: React.FC<Step4Props> = ({
//   prevStep,
//   nextStep,
//   firstName,
//   lastName,
//   otherFirstName,
//   otherLastName,
//   relationship,
//   day,
//   month,
//   year,
//   disability,
//   formData,
// }) => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const { user } = useUser();

//   const onSubmit = (data) => {
//     console.log("FinaL submission", { ...data, formData });
//     if (data.signFirstName !== firstName || data.signLastName !== lastName) {
//       alert("Signature name mismatch!");
//     } else {
//       nextStep();
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="p-4 mx-auto space-y-4 ">
//       <h1 className="text-[26px] font-bold ">Review / Sign / Submit</h1>
//       <div className="flex flex-row justify-between">
//         {" "}
//         <p className="font-bold text-[14px] flex flex-col">
//           Applicant’s Name:{" "}
//           <span className="font-normal">
//             {" "}
//             {user.firstName} {user.lastName}
//           </span>
//         </p>{" "}
//         <p className="font-bold text-[14px] flex flex-col">
//           Age:{" "}
//           <span className="font-normal">
//             {user.day}/{user.month}/{user.year}{" "}
//           </span>
//         </p>{" "}
//         <p className="font-bold text-[14px] flex flex-col">
//           Do you have a disability?{" "}
//           <span className="font-normal">{user.disability} </span>
//         </p>{" "}
//         <p className="font-bold text-[14px] flex flex-col">
//           Disability Documentation Upload: <span className="font-normal"></span>
//         </p>
//       </div>
//       <div className="flex flex-row gap-[225px] ">
//         {" "}
//         <p className="font-bold text-[14px] flex flex-col">
//           Meal Plan Choice: <span className="font-normal"></span>
//         </p>{" "}
//         <p className="font-bold text-[14px] flex flex-col">
//           Days Requested: <span className="font-normal"> </span>
//         </p>{" "}
//       </div>
//       <div className="flex flex-row justify-between">
//         {" "}
//         <p className="font-bold text-[14px] flex flex-col">
//           Delivery Address:{" "}
//           <span className="font-normal">
//             {/* {formData.streetName},{formData.city},{formData.state},
//             {formData.zipCode},{formData.country} */}
//             {formData.country}
//           </span>
//         </p>{" "}
//       </div>
//       <div className="flex flex-row justify-between">
//         {" "}
//         <p className="font-bold text-[14px] flex flex-col">
//           Delivery Instructions: <span className="font-normal"> </span>
//         </p>{" "}
//       </div>
//       <div className="flex flex-row gap-[240px]">
//         {" "}
//         <p className="font-bold text-[14px] flex flex-col">
//           Phone Number: <span className="font-normal"> </span>
//         </p>{" "}
//         <p className="font-bold text-[14px] flex flex-col">
//           Email: <span className="font-normal"> </span>
//         </p>{" "}
//       </div>

//       <div className="space-y-4">
//         <h2 className="font-bold text-[16px]">
//           Type Name Here to Virtually Sign Document:
//         </h2>
//         <div className="flex gap-20">
//           <input
//             type="text"
//             placeholder="First Name"
//             {...register("signFirstName", { required: true })}
//             className={`w-72 p-2 border rounded text-[13px] ${
//               errors.signFirstName ? "border-red-600" : "border-gray-300"
//             }`}
//           />
//           {errors.signFirstName && (
//             <span className="text-red-500">First name is required</span>
//           )}
//           <input
//             type="text"
//             placeholder="Last Name"
//             {...register("signLastName", { required: true })}
//             className={`w-72 p-2 border rounded text-[13px] ${
//               errors.signLastName ? "border-red-600" : "border-gray-300"
//             }`}
//           />
//         </div>
//         {errors.signLastName && (
//           <span className="text-red-500">Last name is required</span>
//         )}
//       </div>

//       <div className="flex justify-between">
//         <Button label="Back" variant="back" onClick={prevStep} />
//         <Button label="Submit" variant="next" />
//       </div>
//     </form>
//   );
// };

// export default Step4;
import React from "react";
import { useForm } from "react-hook-form";
import { useUser } from "../context/UserContext";
import Button from "./Button";

interface Step4Props {
  prevStep: () => void;
  nextStep: () => void;
  firstName: string;
  lastName: string;
  age: string;
  disability: string;
  formData: FormData;
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
  instructions: string;
}

const Step4: React.FC<Step4Props> = ({
  prevStep,
  nextStep,
  firstName,
  lastName,
  age,
  disability,
  formData,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { user } = useUser();

  const onSubmit = (data) => {
    console.log("Final submission", { ...data, formData });
    if (data.signFirstName !== firstName || data.signLastName !== lastName) {
      alert("Signature name mismatch!");
    } else {
      nextStep();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 mx-auto space-y-4 ">
      <h1 className="text-[26px] font-bold ">Review / Sign / Submit</h1>

      {/* Applicant Info */}
      <div className="flex flex-row justify-between">
        <p className="font-bold text-[14px] flex flex-col">
          Applicant’s Name:{" "}
          <span className="font-normal">
            {user.firstName} {user.lastName}
          </span>
        </p>
        <p className="font-bold text-[14px] flex flex-col">
          Age:{" "}
          <span className="font-normal">
            {user.day}/{user.month}/{user.year}
          </span>
        </p>
        <p className="font-bold text-[14px] flex flex-col">
          Do you have a disability?{" "}
          <span className="font-normal">{user.disability}</span>
        </p>
        <p className="font-bold text-[14px] flex flex-col">
          Disability Documentation Upload: <span className="font-normal"></span>
        </p>
      </div>

      {/* Delivery Address */}
      <div className="flex flex-row justify-between">
        <p className="font-bold text-[14px] flex flex-col">
          Delivery Address:{" "}
          <span className="font-normal">
            {formData?.streetName}, {formData?.city}, {formData?.state},{" "}
            {formData?.zipCode}, {formData?.country}
          </span>
        </p>
      </div>

      {/* Additional Details */}
      <div className="flex flex-row justify-between">
        <p className="font-bold text-[14px] flex flex-col">
          Delivery Instructions:{" "}
          <span className="font-normal">{formData?.instructions}</span>
        </p>
      </div>

      <div className="flex flex-row gap-[240px]">
        <p className="font-bold text-[14px] flex flex-col">
          Phone Number:{" "}
          <span className="font-normal">{`${formData?.phoneNumberPart1}-${formData?.phoneNumberPart2}-${formData?.phoneNumberPart3}`}</span>
        </p>
        <p className="font-bold text-[14px] flex flex-col">
          Email: <span className="font-normal">{formData?.email}</span>
        </p>
      </div>

      {/* Signature */}
      <div className="space-y-4">
        <h2 className="font-bold text-[16px]">
          Type Name Here to Virtually Sign Document:
        </h2>
        <div className="flex gap-20">
          <input
            type="text"
            placeholder="First Name"
            {...register("signFirstName", { required: true })}
            className={`w-72 p-2 border rounded text-[13px] ${
              errors.signFirstName ? "border-red-600" : "border-gray-300"
            }`}
          />
          {errors.signFirstName && (
            <span className="text-red-500">First name is required</span>
          )}
          <input
            type="text"
            placeholder="Last Name"
            {...register("signLastName", { required: true })}
            className={`w-72 p-2 border rounded text-[13px] ${
              errors.signLastName ? "border-red-600" : "border-gray-300"
            }`}
          />
        </div>
        {errors.signLastName && (
          <span className="text-red-500">Last name is required</span>
        )}
      </div>

      {/* Buttons */}
      <div className="flex justify-between">
        <Button label="Back" variant="back" onClick={prevStep} />
        <Button label="Submit" variant="next" />
      </div>
    </form>
  );
};

export default Step4;
