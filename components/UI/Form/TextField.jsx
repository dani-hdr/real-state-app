import React from "react";
import {useField} from 'formik'
const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  
  return (
    <div className="mb-5 flex flex-col flex-grow  basis-1">
      <label className="text-md">{label}</label>
      <input   className={`bg-white mt-2 ${meta.error && meta.touched  ? 'border-2 border-red-400' : ''} dark:bg-slate-700 py-2 rounded-lg focus:outline-none px-4`} {...props} {...field} />
      {meta.touched && meta.error ? <span className="text-red-500 mt-2">{meta.error}</span> : null}
    </div>
  );
};

export default TextField;
