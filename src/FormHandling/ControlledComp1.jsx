import React, { useState } from "react";

export const ControlledComp1 = () => {
    const [myData, setMyData] = useState({
        fname: "",
        lname: "",
        review: ""
    });
    const changeData = (e) => {
        const { name, value } = e.target;
        setMyData({ ...myData, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Welcome ${myData.fname} ${myData.lname}. Review: ${myData.review}`);
    };
    return (
        <div className="max-w-md h-90 mx-auto mt-8  bg-gradient-to-r from-black via-gray-700 to-gray-300 shadow-xl rounded-2xl p-4 border border-black">
            <h2 className="text-2xl font-bold mb-4 text-gray-300 text-center">
                CONTROLLED COMPONENT
            </h2>           
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex gap-8">
                    <label className="block text-sm font-semibold text-gray-200 mb-1">
                        First Name
                    </label>
                    <input
                        type="text"
                        name="fname"
                        value={myData.fname}
                        onChange={changeData}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder="Enter first name" />
                </div>
                <div className="flex gap-8">
                    <label className="block text-sm font-semibold text-gray-200">
                        Last Name
                    </label>
                    <input
                        type="text"
                        name="lname"
                        value={myData.lname}
                        onChange={changeData}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder="Enter last name"
                    />
                </div>
                <div className="flex gap-8">
                    <label className="block text-sm font-semibold text-gray-200 ">
                        Write Review
                    </label>
                    <textarea
                        name="review"
                        value={myData.review}
                        onChange={changeData}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition h-24 resize-none"
                        placeholder="Write your review..."
                    />
                </div>
                <button type="submit" className="py-2 border-2 border-black font-semibold text-white rounded-lg bg-gradient-to-l from-black via-gray-600 active:scale-95 transition">
                    Submit
                </button>
            </form>
        </div>
    );
};
