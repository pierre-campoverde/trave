import React from "react";

const ContactForm = () => {
  return (
    <div className="w-11/12 sm:w-7/12 lg:w-5/12  p-4 mx-auto">
      <form action="w-full">
        <div className="md:flex justify-between ">
          <div className="input-group md:w-5/12 lg:w-72	my-4">
            <label htmlFor="" className="block text-sm font-medium">
              First Name
            </label>
            <input
              type="text"
              className="border-2 mt-1 px-3 w-full focus:outline-none focus:ring-2 h-10 rounded-lg"
            />
          </div>
          <div className="input-group md:w-5/12 lg:w-72  my-4">
            <label htmlFor="" className="block text-sm font-medium">
              Last Name
            </label>
            <input
              type="text"
              className="border-2 mt-1 w-full px-3 focus:outline-none focus:ring-2 rounded-lg h-10"
            />
          </div>
        </div>

        <div className="input-group my-4">
          <label htmlFor="" className="block text-sm font-medium">Email</label>
          <input
            type="email"
            className="block mt-1 border-2 w-full px-3 focus:outline-none focus:ring-2 rounded-lg h-10"
          />
        </div>
        <div className="input-group my-4">
          <label htmlFor="" className="block text-sm font-medium">
            Your message
          </label>
          <textarea
            name=""
            className="resize-none mt-1 block p-3 border-2 w-full border-lg focus:outline-none focus:ring-2 rounded-md"
            id=""
            cols="30"
            rows="6"
          ></textarea>
        </div>
        <input
          type="submit"
          value="Let's talk"
          className="w-full py-3  cursor-pointer bg-gray-900 rounded-md text-white my-4"
        />
      </form>
    </div>
  );
};

export default ContactForm;
