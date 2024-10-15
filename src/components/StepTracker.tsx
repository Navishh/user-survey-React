// import React from "react";

// interface StepTrackerProps {
//   currentStep: number;
//   totalSteps: number;
// }

// const StepTracker: React.FC<StepTrackerProps> = ({
//   currentStep,
//   totalSteps,
// }) => {
//   return (
//     <div className="flex items-center justify-between mb-4">
//       {Array.from({ length: totalSteps }, (_, index) => (
//         <div
//           key={index}
//           className={`flex items-center justify-center h-12 w-12 rounded-full  ${
//             index < currentStep ? "bg-orange-500" : "bg-purple-500"
//           } border-purple-500 text-white font-bold transition-all duration-300`}
//         >
//           {index + 1}
//         </div>
//         {index < totalSteps - 1 && (
//             <div
//               className={`h-1 flex-1 ${
//                 index < currentStep - 1 ? "bg-orange-500" : "bg-purple-500"
//               } transition-all duration-300`}
//               style={{ height: "5px" }}
//             />
//           )}
//       ))}
//     </div>
//   );
// };

// export default StepTracker;
import React from "react";

interface StepTrackerProps {
  currentStep: number;
  totalSteps: number;
}

const StepTracker: React.FC<StepTrackerProps> = ({
  currentStep,
  totalSteps,
}) => {
  return (
    <div className="flex items-center justify-between mb-10">
      {Array.from({ length: totalSteps }, (_, index) => (
        <React.Fragment key={index}>
          <div
            className={`flex items-center justify-center h-12 w-12 rounded-full ${
              index < currentStep ? "bg-orange-500" : "bg-purple-900"
            } border-purple-900 text-white font-bold transition-all duration-300`}
          >
            {index + 1}
          </div>
          {index < totalSteps - 1 && (
            <div
              key={`connector-${index}`}
              className={`h-1 flex-1 ${
                index < currentStep - 1 ? "bg-orange-500" : "bg-purple-900"
              } transition-all duration-300`}
              style={{ height: "5px" }}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default StepTracker;
