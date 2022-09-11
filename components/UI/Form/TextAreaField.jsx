import React from "react";
import {useField} from 'formik'
const TextAreaField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  
  return (
    <div className="mb-5 flex flex-col flex-grow  w-full">
      <label className="text-md">{label}</label>
      <textarea type="textarea"  className={`bg-white mt-2 w-full ${meta.error && meta.touched  ? 'border-2 border-red-400' : ''}  py-2 rounded-lg focus:outline-none px-4`} {...props} {...field} />
      {meta.touched && meta.error ? <p className="text-red-500 mt-2">{meta.error}</p> : null}
    </div>
  );
};

export default TextAreaField;
