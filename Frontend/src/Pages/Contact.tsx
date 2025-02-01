import React from "react";
import GradientButton from "../Components/GradientButton";

function Contact() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-darkblack">
      <form className="bg-greyish p-8 rounded-lg shadow-md w-full max-w-3xl mt-50 ">
        <h2 className="text-6xl text-glitchgreen text-center font-vt323">
          Contact
        </h2>
        <p className="text-white text-center mb-5">
          Lets create something great!
        </p>

        <div className="flex flex-row w-full gap-4">
          <div className="w-1/2 mb-4">
            <label
              className="block text-glitchgreen text-4xl mb-2 font-vt323"
              htmlFor="name"
            >
              Name*
            </label>
            <input
              className="w-full p-2 border border-white rounded-md focus:outline-none focus:ring-2 ring-glitchgreen"
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="w-1/2 mb-4">
            <label
              className="block text-glitchgreen text-4xl mb-2 font-vt323"
              htmlFor="email"
            >
              Email*
            </label>
            <input
              className="w-full p-2 border border-white rounded-md focus:outline-none focus:ring-2 ring-glitchgreen"
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>
        </div>
        <div className="flex flex-row w-full gap-4">
          <div className="w-1/2 mb-4">
            <label
              className="block text-glitchgreen text-4xl mb-2 font-vt323"
              htmlFor="phone_number"
            >
              Phone Number
            </label>
            <input
              className="w-full p-2 border border-white rounded-md focus:outline-none focus:ring-2 ring-glitchgreen"
              type="text"
              id="phone_number"
              name="phone_number"
              placeholder="Your Phone Number"
            />
          </div>
          <div className="w-1/2 mb-4">
            <label
              className="block text-glitchgreen text-4xl mb-2 font-vt323"
              htmlFor="reason"
            >
              Reason for message*
            </label>
            <input
              className="w-full p-2 border border-white rounded-md focus:outline-none focus:ring-2 ring-glitchgreen"
              type="text"
              id="reason"
              name="reason"
              placeholder="Reason for Contact"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            className="block text-glitchgreen text-4xl font-vt323 mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="w-full p-2 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-glitchgreen"
            id="message"
            name="message"
            placeholder="Your Message"
            rows={5}
            required
          ></textarea>
        </div>
        <div className="justify-center items-center flex">
          <button
            className="bg-gradient-glitchgreen text-white text-xl py-1 px-5 rounded mt-4"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
