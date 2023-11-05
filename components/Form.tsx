import React from "react";

const Form = () => {
  return (
    <div className="bg-gray-300 pb-6 rounded-lg ">
      <div className="grid md:grid-cols-2 gap-4 p-4 pt-6 m-3 mt-8">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 bg-gray-50 text-sm font-sans outline-none"
        />
        <input
          type="email"
          required
          placeholder="Your Email"
          className="p-3 bg-gray-50 text-sm font-sans outline-none"
        />
      </div>
      <div className="flex flex-col">
        <div className="bg-gray-50 text-sm font-sans outline-none mx-7 p-3">
          <input
            type="text"
            placeholder="Subject"
            className="bg-gray-50 text-sm font-sans outline-none"
          />
        </div>
        <div className="mt-6 m-7">
          <textarea
            name=""
            id=""
            rows={8}
            placeholder="Message"
            className="bg-gray-50 w-full p-3 text-sm"
          />
        </div>
        <div className="flex justify-center mx-auto">
          <button className="bg-gray-900 hover:bg-gray-800 py-3 px-4 text-white rounded-md font-bold text-md font-sans ease-in-out duration-200">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
