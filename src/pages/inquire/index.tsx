import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import TravelImageInquire from "../../../public/assets/pexels-te-lensfix-380994-1371360.jpg";
import PhoneInput from "react-phone-number-input";
import { useFormik } from "formik";
import * as Yup from "yup";

type Props = {};

// Define validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  nationality: Yup.string().required("Please select your nationality"),
  phone: Yup.string().required("Phone number is required"),
  budget: Yup.string().required("Please select your average budget"),
});

const Inquire = (props: Props) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      nationality: "",
      phone: "",
      adults: 2,
      children: 0,
      infants: 0,
      budget: "",
      flightOffer: false,
      additionalInfo: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form values", values);
      // Handle form submission logic
    },
  });

  return (
    <div className="font-sans max-w-6xl mx-auto bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-xl overflow-hidden mt-28 mb-6 p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Section: Image */}
        <div className="flex items-center justify-center">
          <Image
            src={TravelImageInquire}
            className="w-full h-full max-w-xs md:max-w-md object-cover"
            alt="Contact Us"
            width={400}
            height={400}
          />
        </div>

        {/* Right Section: Form */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl text-yellow-600 text-center mb-8 capitalize font-segoe">
            Tell us about the travelers
          </h2>
          <form className="space-y-6" onSubmit={formik.handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Name *"
                className="w-full bg-gray-100 rounded-lg py-3 px-4 text-sm outline-yellow-600 focus:bg-white"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              {formik.errors.name && formik.touched.name && (
                <div className="text-red-500 text-xs">{formik.errors.name}</div>
              )}

              <input
                type="email"
                name="email"
                placeholder="Email *"
                className="w-full bg-gray-100 rounded-lg py-3 px-4 text-sm outline-yellow-600 focus:bg-white"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.errors.email && formik.touched.email && (
                <div className="text-red-500 text-xs">
                  {formik.errors.email}
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <select
                name="nationality"
                className="w-full bg-gray-100 rounded-lg py-3 px-4 text-sm outline-yellow-600 focus:bg-white"
                value={formik.values.nationality}
                onChange={formik.handleChange}
              >
                <option value="" disabled>
                  Select your Nationality *
                </option>
                <option value="any">Any</option> {/* Added "Any" option */}
                {/* Add nationality options here */}
              </select>
              {formik.errors.nationality && formik.touched.nationality && (
                <div className="text-red-500 text-xs">
                  {formik.errors.nationality}
                </div>
              )}

              <div className="relative flex items-center">
                <PhoneInput
                  value={formik.values.phone}
                  onChange={(value) => formik.setFieldValue("phone", value)}
                  placeholder="Enter Your Number"
                  defaultCountry="EG"
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
                {formik.errors.phone && formik.touched.phone && (
                  <div className="text-red-500 text-xs">
                    {formik.errors.phone}
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Adults input */}
              <div className="flex items-center justify-between p-1">
                <label className="text-xs">Adults (+12)</label>
                <div className="flex items-center">
                  <button
                    type="button"
                    onClick={() =>
                      formik.setFieldValue(
                        "adults",
                        Math.max(formik.values.adults - 1, 0)
                      )
                    }
                    className="bg-gray-200 rounded w-8 h-8 flex items-center justify-center text-lg"
                  >
                    -
                  </button>
                  <span className="mx-3 text-xs font-medium">
                    {formik.values.adults}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      formik.setFieldValue("adults", formik.values.adults + 1)
                    }
                    className="bg-gray-200 rounded w-8 h-8 flex items-center justify-center text-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Children input */}
              <div className="flex items-center justify-between p-1">
                <label className="text-xs">Children (2 to 11)</label>
                <div className="flex items-center">
                  <button
                    type="button"
                    onClick={() =>
                      formik.setFieldValue(
                        "children",
                        Math.max(formik.values.children - 1, 0)
                      )
                    }
                    className="bg-gray-200 rounded w-8 h-8 flex items-center justify-center text-lg"
                  >
                    -
                  </button>
                  <span className="mx-3 text-xs font-medium">
                    {formik.values.children}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      formik.setFieldValue(
                        "children",
                        formik.values.children + 1
                      )
                    }
                    className="bg-gray-200 rounded w-8 h-8 flex items-center justify-center text-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Infants input */}
              <div className="flex items-center justify-between p-1">
                <label className="text-xs">Infants (0 to 2)</label>
                <div className="flex items-center">
                  <button
                    type="button"
                    onClick={() =>
                      formik.setFieldValue(
                        "infants",
                        Math.max(formik.values.infants - 1, 0)
                      )
                    }
                    className="bg-gray-200 rounded w-8 h-8 flex items-center justify-center text-lg"
                  >
                    -
                  </button>
                  <span className="mx-3 text-xs font-medium">
                    {formik.values.infants}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      formik.setFieldValue("infants", formik.values.infants + 1)
                    }
                    className="bg-gray-200 rounded w-8 h-8 flex items-center justify-center text-lg"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div>
              <select
                name="budget"
                className="w-full bg-gray-100 rounded-lg py-3 px-4 text-xs outline-yellow-600 focus:bg-white"
                value={formik.values.budget}
                onChange={formik.handleChange}
              >
                <option value="" disabled>
                  Your average budget per person
                </option>
                <option value="any">Any</option> {/* Added "Any" option */}
                {/* Add budget options here */}
              </select>
              {formik.errors.budget && formik.touched.budget && (
                <div className="text-red-500 text-xs">
                  {formik.errors.budget}
                </div>
              )}
              <small className="block text-sm mt-2 text-gray-500">
                Per person (international flights NOT included)
              </small>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="flightOffer"
                name="flightOffer"
                checked={formik.values.flightOffer}
                onChange={formik.handleChange}
                className="mr-2"
              />
              <label htmlFor="flightOffer" className="text-sm">
                Add flight offer to your vacation package
              </label>
            </div>

            <textarea
              name="additionalInfo"
              placeholder="Additional Info"
              rows={4}
              className="w-full bg-gray-100 rounded-lg py-3 px-4 text-sm outline-yellow-600 focus:bg-white"
              value={formik.values.additionalInfo}
              onChange={formik.handleChange}
            />

            <Button
              type="submit"
              variant="contained"
              className="mt-6 w-full bg-yellow-600 py-3"
            >
              Submit Inquiry
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Inquire;
