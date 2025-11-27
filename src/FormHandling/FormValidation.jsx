import React, { useState } from "react";

const FormValidation = () => {
  const [myData, setMyData] = useState({
    fname: "",
    lname: "",
    review: ""
  });

  const [errors, setErrors] = useState({});

  const changeData = (e) => {
    const { name, value } = e.target;
    setMyData({ ...myData, [name]: value });
  };

  const validate = () => {
    let newErrors = {};

    if (!myData.fname.trim()) newErrors.fname = "First name is required";
    if (!myData.lname.trim()) newErrors.lname = "Last name is required";
    if (!myData.review.trim()) newErrors.review = "Review cannot be empty";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    alert(`Welcome ${myData.fname} ${myData.lname}. Review: ${myData.review}`);
    setErrors({});
  };

  return (
    <div className="max-w-sm h-70 mx-auto mt-8 p-6 rounded-2xl shadow-xl text-black bg-white">

      <h2 className="text-2xl font-bold text-center mb-4">
        Form Validation
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-8">
          <label className="font-semibold">First Name</label>
          <input
            type="text"
            name="fname"
            value={myData.fname}
            onChange={changeData}
            className="w-full mt-1 px-4 py-2 rounded-lg border
                       focus:ring-2 focus:ring-emerald-300 text-black"
            placeholder="Enter first name"
          />
          {errors.fname && (
            <p className="text-red-200 text-sm mt-1">{errors.fname}</p>
          )}
        </div>
        <div className="flex gap-8">
          <label className="font-semibold">Last Name</label>
          <input
            type="text"
            name="lname"
            value={myData.lname}
            onChange={changeData}
            className="w-full mt-1 px-4 py-2 rounded-lg border 
                       focus:ring-2 focus:ring-emerald-300 text-black"
            placeholder="Enter last name"/>
          {errors.lname && (
            <p className="text-red-200 text-sm mt-1">{errors.lname}</p>
          )}
        </div>
        <button
          type="submit"
          className="mt-2 font-bold text-white rounded-lg bg-gradient-to-r from-emerald-900 via-emerald-600 to-emerald-900">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormValidation;
