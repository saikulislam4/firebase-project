import React from 'react';
import { useState } from "react";

const About = () => {
    const [step, setStep] = useState(1);

    const handleNext = () => {
      setStep(step + 1);
    };
  
    const handleBack = () => {
      setStep(step - 1);
    };

    return (
        <div className="flex items-center justify-center h-screen">
          <div className="bg-white p-6 rounded-lg shadow-md w-full lg:max-w-xl">
            <h2 className="text-lg font-medium mb-4">Step {step} of 2</h2>
            <div className="flex mb-4">
              <div
                className={`w-1/2 border-r border-gray-400 ${
                  step === 1 ? "bg-blue-500 text-white" : "bg-gray-200"
                } p-2 text-center cursor-pointer`}
                onClick={() => setStep(1)}
              >
                Step 1
              </div>
              <div
                className={`w-1/2 ${
                  step === 2 ? "bg-blue-500 text-white" : "bg-gray-200"
                } p-2 text-center cursor-pointer`}
                onClick={() => setStep(2)}
              >
                Step 2
              </div>
            </div>
            {step === 1 ? <Step1 /> : <Step2 />}
            <div className="flex justify-between mt-6">
              {step > 1 && (
                <button
                  className="bg-gray-300 px-6 py-1.5 rounded-lg text-gray-700 hover:bg-gray-400"
                  onClick={handleBack}
                >
                  Back
                </button>
              )}
              {step < 2 && (
                <button
                  className="bg-blue-500 px-6 py-1.5 rounded-lg text-white hover:bg-blue-600"
                  onClick={handleNext}
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      );
    };
    
    const Step1 = () => (
      <div>
        <h3 className="text-lg font-medium mb-4">Step 1</h3>
        <div className="mb-4">
          <label className="block font-medium mb-2 text-gray-700" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full border border-gray-400 p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2 text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border border-gray-400 p-2"
          />
        </div>
      </div>
    );
    
    const Step2 = () => (
      <div>
        <h3 className="text-lg font-medium mb-4">Step 2</h3>
        <div className="mb-4">
          <label
            className="block font-medium mb-2 text-gray-700"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full border border-gray-400 p-2"
          />
        </div>
      </div>
    );

export default About;