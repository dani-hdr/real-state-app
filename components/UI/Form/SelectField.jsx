import React from "react";
import {useField} from 'formik'
const SelectField = ({ label,children, ...props }) => {
  const [field, meta] = useField(props);
  
  return (
    <div className="mb-5 flex flex-col flex-grow  basis-1">
      <label className="text-md">{label}</label>
      <select   className={`bg-white mt-2 ${meta.error && meta.touched  ? 'border-2 border-red-400' : ''}  py-2 rounded-lg focus:outline-none px-4`} {...props} {...field} >
        {children}
      </select>
      {meta.touched && meta.error ? <span className="text-red-500 mt-2">{meta.error}</span> : null}
    </div>
  );
};

export default SelectField;
