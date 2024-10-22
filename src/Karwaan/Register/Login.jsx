import React, { useState } from "react";

const Login = () => {
  const [currentStep, setCurrentStep] = useState(1);

  // Handler to move to the next step
  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  // Handler to move to the previous step
  const handleBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  // Handler to reset the stepper
  const handleReset = () => {
    setCurrentStep(1);
  };

  // State to manage the selected payment method
  const [selectedMethod, setSelectedMethod] = useState("visa");

  // Function to handle tab click
  const handleTabClick = (method) => {
    setSelectedMethod(method);
  };
  return (
    <>
      <div className="flex  lg:justify-center lg:items-center h-screen">
        <div className="lg:w-[65vw] w-full p-4">
          {/* Stepper Nav */}
          <ul className="relative flex flex-row gap-x-2">
            {[1, 2, 3].map((step) => (
              <li
                key={step}
                className={`flex items-center gap-x-2 shrink basis-0 flex-1 group ${
                  currentStep === step
                    ? "hs-stepper-active:bg-black text-white"
                    : ""
                }`}
              >
                <span className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle">
                  <span
                    className={`size-7 flex justify-center items-center shrink-0 font-medium text-gray-800 rounded-full ${
                      currentStep === step
                        ? "bg-black text-white"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {currentStep > step ? (
                      <svg
                        className="size-3"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    ) : (
                      step
                    )}
                  </span>
                  <span className="ms-2 text-md font-medium text-gray-800">
                    Step {step}
                  </span>
                </span>
                {step !== 3 && (
                  <div className="w-full h-px flex-1 bg-gray-200 group-last:hidden"></div>
                )}
              </li>
            ))}
          </ul>
          {/* End Stepper Nav */}

          {/* Stepper Content */}
          <div className="mt-5 sm:mt-8">
            {currentStep === 1 && (
              <div className="p-4 lg:p-10 lg:h-auto bg-gray-50 border border-dashed border-gray-200 rounded-xl">
                {/* --------------------------- */}
                <h1 className="text-3xl mb-5">Registration</h1>
                <div className="inner h-full items-center flex">
                  <form class="lg:w-[45%] md:w-[45%] w-full">
                    <div class="mb-4">
                      <label
                        for="name"
                        class="block mb-2 text-md font-medium text-gray-900 "
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Enter your full name"
                        class="bg-gray-50 border  border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 "
                        required
                      />
                    </div>

                    <div class="mb-4">
                      <label
                        for="email"
                        class="block mb-2 w-96 text-md font-medium text-gray-900 "
                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        id="email"
                        class="bg-gray-50 border  border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 "
                        placeholder="name@flowbite.com"
                        required
                      />
                    </div>
                    <div class="mb-4">
                      <label
                        for="number"
                        class="block mb-2 text-md font-medium text-gray-900 "
                      >
                        Phone Number
                      </label>
                      <input
                        type="number"
                        id="number"
                        placeholder="Enter active numver"
                        class="bg-gray-50 border  border-gray-300 text-gray-900 text-md rounded-lg  block w-full p-4 "
                        required
                      />
                    </div>
                    <div class="mb-4">
                      <label
                        for="password"
                        class="block mb-2 text-md font-medium text-gray-900 "
                      >
                        Your password
                      </label>
                      <input
                        type="password"
                        id="password"
                        placeholder="Enter Password"
                        class="bg-gray-50 border  border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 "
                        required
                      />
                    </div>
                  </form>
                  <div className="company  justify-center h-full lg:w-[50%]  hidden lg:block md:block items-center">
                    <h1 className="text-[6rem] rotate-90 font-extrabold">
                      Karwaa.n
                    </h1>
                  </div>
                </div>

                {/* --------------------------- */}
              </div>
            )}

            {currentStep === 2 && (
              <div className="p-10 h-auto bg-gray-50  border border-dashed border-gray-200 rounded-xl">
                <h1 className="text-3xl mb-5">Addres</h1>
                <div className="inner2 flex">
                  <div className="lg:w-[60%] w-full">
                    <form class="lg:w-[100%] md:w-[65%] w-full">
                      <div class="mb-4">
                        <label
                          for="address1"
                          class="block mb-2 text-md font-medium text-gray-900"
                        >
                          Address Line 1
                        </label>
                        <input
                          type="text"
                          id="address1"
                          placeholder="Enter your street address"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4"
                          required
                        />
                      </div>

                      <div class="mb-4">
                        <label
                          for="address2"
                          class="block mb-2 text-md font-medium text-gray-900"
                        >
                          Address Line 2
                        </label>
                        <input
                          type="text"
                          id="address2"
                          placeholder="Apartment, suite, etc. (optional)"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4"
                        />
                      </div>

                      <div className="state lg:flex gap-4 w-full">
                        <div class="mb-4">
                          <label
                            for="city"
                            class="block mb-2 text-md font-medium text-gray-900"
                          >
                            City
                          </label>
                          <input
                            type="text"
                            id="city"
                            placeholder="Enter your city"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4"
                            required
                          />
                        </div>

                        <div class="mb-4">
                          <label
                            for="state"
                            class="block mb-2 text-md font-medium text-gray-900"
                          >
                            State
                          </label>
                          <input
                            type="text"
                            id="state"
                            placeholder="Enter your state"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4"
                            required
                          />
                        </div>
                      </div>

                      <div className="code lg:flex gap-3 ">
                        <div class="mb-4">
                          <label
                            for="country"
                            class="block mb-2 text-md font-medium text-gray-900"
                          >
                            Country
                          </label>
                          <input
                            type="text"
                            id="country"
                            placeholder="Enter your country"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4"
                            required
                          />
                        </div>

                        <div class="mb-4">
                          <label
                            for="postalcode"
                            class="block mb-2 text-md font-medium text-gray-900"
                          >
                            Postal Code
                          </label>
                          <input
                            type="number"
                            id="postalcode"
                            placeholder="Enter your postal code"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4"
                            required
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="location ml-24 items-center hidden lg:block justify-center h-full bg-red">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="300"
                      height="300"
                      fill="currentColor"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                    </svg>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="p-9 h-auto bg-gray-50 flex border border-dashed border-gray-200 rounded-xl">
                <div>
                  {/* Tabs for different payment methods */}
                  <h1 className="text-3xl font-semibold text-gray-900 mb-5">
                    Default Payment Method
                  </h1>
                  <div className="w-full ">
                    {/* Tabs for different payment methods */}
                    <div className="flex justify-around w-full mb-5">
                      <div
                        onClick={() => handleTabClick("visa")}
                        className={`cursor-pointer p-3 font-bold ${
                          selectedMethod === "visa"
                            ? "border-b-4 border-black text-black"
                            : "text-gray-500"
                        }`}
                      >
                        Visa
                      </div>
                      <div
                        onClick={() => handleTabClick("easypaisa")}
                        className={`cursor-pointer p-3 font-bold ${
                          selectedMethod === "easypaisa"
                            ? "border-b-4 border-black text-black"
                            : "text-gray-500"
                        }`}
                      >
                        EasyPaisa
                      </div>
                      <div
                        onClick={() => handleTabClick("jazzcash")}
                        className={`cursor-pointer p-3 font-bold ${
                          selectedMethod === "jazzcash"
                            ? "border-b-4 border-black text-black"
                            : "text-gray-500"
                        }`}
                      >
                        JazzCash
                      </div>
                      <div
                        onClick={() => handleTabClick("cod")}
                        className={`cursor-pointer p-3 font-bold ${
                          selectedMethod === "cod"
                            ? "border-b-4 border-black text-black"
                            : "text-gray-500"
                        }`}
                      >
                        Cash on Delivery
                      </div>
                    </div>

                    {/* Render form based on selected payment method */}
                    <div className="p-5 w-full">
                      {selectedMethod === "visa" && <VisaForm />}
                      {selectedMethod === "easypaisa" && <EasyPaisaForm />}
                      {selectedMethod === "jazzcash" && <JazzCashForm />}
                      {selectedMethod === "cod" && <CODForm />}
                    </div>
                  </div>
                </div>
                <div className="pay lgL:w-[30%] md:w-[30%] hidden lg:block md:block justify-center items-center">
                  <img src="https://static.thenounproject.com/png/195163-200.png" alt="" />
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="p-4 m-4 h-auto bg-gray-50 flex justify-center items-center border border-dashed border-gray-200 rounded-xl">
                <h3 className="text-gray-500">Final content</h3>
              </div>
            )}

            {/* Button Group */}
            <div className="mt-5 p-4 flex justify-between items-center gap-x-2">
              <button
                type="button"
                onClick={handleBack}
                disabled={currentStep === 1}
                className="py-2 absolute lg:relative lg:bottom-0 lg:left-0 bottom-3 left-4 px-3 inline-flex items-center gap-x-1 text-md font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none disabled:opacity-50"
              >
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15 18-6-6 6-6"></path>
                </svg>
                Back
              </button>

              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="py-2 absolute lg:relative bottom-4 lg:bottom-0 right-4 lg:right-0 px-3 inline-flex items-center gap-x-1 text-md font-medium rounded-lg border border-transparent bg-black text-white hover:bg-gray-700 focus:outline-none"
                >
                  Next
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </button>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="py-2 px-3 absolute lg:relative bottom-4 lg:bottom-0 right-5 lg:right-0 inline-flex items-center gap-x-1 text-md font-medium rounded-lg border border-transparent bg-black text-white hover:bg-gray-700 focus:outline-none"
                  >
                    Finish
                  </button>

                  <button
                    type="reset"
                    onClick={handleReset}
                    className="py-2 px-3 absolute lg:relative bottom-4 lg:bottom-0 right-24 lg:right-0 inline-flex items-center gap-x-1 text-md font-medium rounded-lg border border-transparent bg-black text-white hover:bg-gray-700 focus:outline-none"
                  >
                    Reset
                  </button>
                </>
              )}
            </div>
            {/* End Button Group */}
          </div>
          {/* End Stepper Content */}
        </div>
      </div>
    </>
  );
};

const VisaForm = () => (
  <form>
    <h3 className="text-xl  font-bold mb-4">Visa Payment</h3>
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label className="block text-gray-700 mb-2">Card Number</label>
        <input
          type="text"
          name="cardNumber"
          placeholder="Enter card number"
          className="w-full p-4 text-lg border border-gray-300 rounded-md"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 mb-2">Cardholder Name</label>
        <input
          type="text"
          name="cardholderName"
          placeholder="Enter cardholder name"
          className="w-full p-4 text-lg border border-gray-300 rounded-md"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 mb-2">Expiry Date</label>
        <input
          type="text"
          name="expiryDate"
          placeholder="MM/YY"
          className="w-full p-4 text-lg border border-gray-300 rounded-md"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 mb-2">CVV</label>
        <input
          type="password"
          name="cvv"
          placeholder="Enter CVV"
          className="w-full p-4 text-lg border border-gray-300 rounded-md"
          required
        />
      </div>
      <div className="col-span-2">
        <label className="block text-gray-700 mb-2">Billing Address</label>
        <input
          type="text"
          name="billingAddress"
          placeholder="Enter billing address"
          className="w-full p-4 text-lg border border-gray-300 rounded-md"
          required
        />
      </div>
    </div>
  </form>
);

// EasyPaisa Payment Form with more detailed inputs
const EasyPaisaForm = () => (
  <form>
    <h3 className="text-xl font-bold mb-4">EasyPaisa Payment</h3>
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label className="block text-gray-700 mb-2">Mobile Number</label>
        <input
          type="text"
          name="mobileNumber"
          placeholder="Enter mobile number"
          className="w-full p-4 text-lg border border-gray-300 rounded-md"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 mb-2">Account Holder Name</label>
        <input
          type="text"
          name="accountHolderName"
          placeholder="Enter account holder name"
          className="w-full p-4 text-lg border border-gray-300 rounded-md"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 mb-2">Transaction ID</label>
        <input
          type="text"
          name="transactionId"
          placeholder="Enter transaction ID"
          className="w-full p-4 text-lg border border-gray-300 rounded-md"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 mb-2">PIN</label>
        <input
          type="password"
          name="pin"
          placeholder="Enter PIN"
          className="w-full p-4 text-lg border border-gray-300 rounded-md"
          required
        />
      </div>
    </div>
  </form>
);

// JazzCash Payment Form with more detailed inputs
const JazzCashForm = () => (
  <form>
    <h3 className="text-xl font-bold mb-4">JazzCash Payment</h3>
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label className="block text-gray-700 mb-2">Mobile Number</label>
        <input
          type="text"
          name="mobileNumber"
          placeholder="Enter mobile number"
          className="w-full p-4 text-lg border border-gray-300 rounded-md"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 mb-2">Account Holder Name</label>
        <input
          type="text"
          name="accountHolderName"
          placeholder="Enter account holder name"
          className="w-full p-4 text-lg border border-gray-300 rounded-md"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 mb-2">Transaction ID</label>
        <input
          type="text"
          name="transactionId"
          placeholder="Enter transaction ID"
          className="w-full p-4 text-lg border border-gray-300 rounded-md"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 mb-2">PIN</label>
        <input
          type="password"
          name="pin"
          placeholder="Enter PIN"
          className="w-full p-4 text-lg border border-gray-300 rounded-md"
          required
        />
      </div>
    </div>
  </form>
);

// Cash on Delivery (COD) Form with more detailed inputs
const CODForm = () => (
  <form>
    <h3 className="text-xl font-bold mb-4">Cash on Delivery</h3>
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label className="block text-gray-700 mb-2">Full Name</label>
        <input
          type="text"
          name="fullName"
          placeholder="Enter full name"
          className="w-full p-4 text-lg border border-gray-300 rounded-md"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 mb-2">Delivery Address</label>
        <input
          type="text"
          name="deliveryAddress"
          placeholder="Enter delivery address"
          className="w-full p-4 text-lg border border-gray-300 rounded-md"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 mb-2">Contact Number</label>
        <input
          type="text"
          name="contactNumber"
          placeholder="Enter contact number"
          className="w-full p-4 text-lg border border-gray-300 rounded-md"
          required
        />
      </div>
      <div className="col-span-2">
        <label className="block text-gray-700 mb-2">Special Instructions</label>
        <input
          type="text"
          name="specialInstructions"
          placeholder="Any special instructions"
          className="w-full p-4 text-lg border border-gray-300 rounded-md"
        />
      </div>
    </div>
  </form>
);

export default Login;
