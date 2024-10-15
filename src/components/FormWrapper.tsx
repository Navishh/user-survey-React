import React from "react";

interface FormWrapperProps {
  title: string;
  children: React.ReactNode;
}

const FormWrapper: React.FC<FormWrapperProps> = ({ title, children }) => {
  return (
    <div className="space-y-4 form-wrapper">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="form-content">{children}</div>
    </div>
  );
};

export default FormWrapper;
