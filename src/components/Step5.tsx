import { useNavigate } from "react-router-dom"; // Import useNavigate
import Button from "./Button";

const Step5 = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-y-28">
      <h2 className="mb-4 text-2xl font-bold text-center">
        Thank You For Submitting Your Application
      </h2>
      <div className="flex flex-col items-center justify-center mt-4 mb-4 gap-y-5">
        <p className="mb-2 text-center">
          Thank you for submitting your application. A confirmation email has
          been sent to the email address you provided. Please retain this for
          your records.
        </p>
        <p className="mb-2 text-center">
          If you have any inquiries or require assistance regarding your
          application, you may contact us during business hours at
          1-800-123-4567 or via email at support@email.com. We appreciate your
          interest in the Meals on Wheels program, dedicated to supporting
          individuals in need of supplemental meal services.
        </p>
        <p className="mb-2 text-center">
          Privacy Notice: Your personal information will be kept confidential
          and used only for processing your application. It will not be shared
          with third parties without your consent.
        </p>
      </div>
      <div className="flex flex-row justify-between w-full">
        <Button
          label="Return to Homepage"
          variant="purple"
          onClick={() => navigate("/home")}
        />
        <Button label="Print Confirmation" onClick={() => {}} variant="next" />
      </div>
    </div>
  );
};

export default Step5;
