import React from "react";
const FileField = ({label,error, ...props }) => {
  
  return (
    <div className="mb-5 flex flex-col flex-grow w-full ">
      <label className="text-md">{label}</label>
      <input className={`bg-white ${error? 'border-2 border-red-400' : ''} dark:bg-slate-700  mt-2 py-2 rounded-lg focus:outline-none px-4`} {...props} />
      {error ? <span className="text-red-500 mt-2">{error}</span> : null}
    </div>
  );
};

export default FileField;
