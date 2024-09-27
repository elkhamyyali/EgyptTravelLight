import React, { useState } from "react";
import BaseInputField from "@/components/molecules/formik-fields/BaseInputField";
import SelectMonth from "@/components/molecules/selects/SelectMonth";
import SelectNationality from "@/components/molecules/selects/SelectNationality";
import { Form, Formik } from "formik";
import { Minus, Plus } from "lucide-react";
import PhoneInput from "react-phone-number-input";
import Dropdown from "./Dropdown";
import { useMutate } from "@/hooks/UseMutate";
import DatePickerModal from "@/components/molecules/dataPicker"; // Adjust the path accordingly
import { Input, Modal, Button } from "@mui/material"; // Import Modal and Button from MUI
import dayjs, { Dayjs } from "dayjs"; // Make sure to import Dayjs correctly
import { Spinner } from "../UI/Spinner";
import { notify } from "@/utils/toast";

function MainDataBookingForm({ DetailTour, setIsThanksVisible }) {
  const { mutate, isPending } = useMutate({
    mutationKey: ["bookings"],
    endpoint: `bookings`,
    onSuccess: () => {
      setIsThanksVisible(true);
    },
    onError: (err) => {
      notify("error", err?.response?.data?.message);
    },
    formData: true,
  });

  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null); // Ensure this is initialized as null or Dayjs
  const [rangeDays, setRangeDays] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [finalValues, setFinalValues] = useState({
    name: "",
    email: "",
    nationality_id: "",
    phone: "",
  });

  const handleDateChange = (date: Dayjs | null, days: number) => {
    setSelectedDate(date ? dayjs(date) : null);
    setRangeDays(days);
  };

  const handleConfirm = () => {
    // Extract the month from the selected date
    const month = selectedDate ? selectedDate.format("MMM") : ""; // Get month (1-12)

    // Submit the final values along with other form data, including month
    mutate({
      ...finalValues,
      phone: finalValues.phone.slice(2),
      start_at: selectedDate ? selectedDate.format("YYYY-MM-DD") : "",
      month: month, // Include the month in the API request
    });
    setIsModalOpen(false);
  };

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          nationality_id: "",
          phone: "",
          start_at: selectedDate ? selectedDate.format("YYYY-MM-DD") : "",
          num_of_adults: 1,
          num_of_children: 0,
          num_of_infants: 0,
          tour_id: DetailTour?.id,
          duration: "",
          phone_code: "+20",
        }}
        onSubmit={(values) => {
          // Open the modal and set the values
          setFinalValues(values);
          setIsModalOpen(true);
        }}
      >
        {({ setFieldValue, values }) => (
          <Form>
            <div className="my-2">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Start Date"
                  value={
                    selectedDate
                      ? `${selectedDate.format("YYYY-MM-DD")} to ${selectedDate
                          .add(rangeDays - 1, "day")
                          .format("YYYY-MM-DD")}`
                      : "Select a date range"
                  }
                  onClick={() => setIsDatePickerOpen(true)}
                  className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* DatePickerModal Integration */}
            <DatePickerModal
              open={isDatePickerOpen}
              onClose={() => setIsDatePickerOpen(false)}
              onDateChange={handleDateChange}
              setFieldValue={setFieldValue}
            />

            <div className="space-y-4 mt-3 mb-2">
              {[
                { label: "Adults", name: "num_of_adults" },
                { label: "Children", name: "num_of_children" },
                { label: "Infants", name: "num_of_infants" },
              ].map(({ label, name }) => (
                <div key={label} className="flex justify-between items-center">
                  <span className="text-gray-700">{`Number of ${label}`}</span>
                  <div className="flex items-center space-x-2">
                    <button
                      type="button"
                      onClick={() =>
                        setFieldValue(name, Math.max(0, values[name] - 1))
                      }
                      className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 active:bg-gray-200 transition duration-150"
                    >
                      <Minus size={16} />
                    </button>
                    <span>{values[name]}</span>
                    <button
                      type="button"
                      onClick={() => setFieldValue(name, values[name] + 1)}
                      className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 active:bg-gray-200 transition duration-150"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full p-3 bg-blue-950 text-white rounded-md hover:bg-blue-700 transition duration-150"
              >
                {isPending ? <Spinner /> : "Submit"}
              </button>
            </div>

            {/* Modal for confirming booking details */}
            <Modal
              open={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              aria-labelledby="confirm-modal-title"
              aria-describedby="confirm-modal-description"
            >
              <div className="flex items-center justify-center h-full">
                <div className="bg-white p-6 rounded-md shadow-md w-80">
                  <h2
                    id="confirm-modal-title"
                    className="text-lg font-medium mb-2"
                  >
                    Confirm Your Details
                  </h2>
                  <BaseInputField
                    name="name"
                    label="Name"
                    placeholder="Email"
                    type="text"
                    value={finalValues.name}
                    onChange={(e) =>
                      setFinalValues({ ...finalValues, name: e.target.value })
                    }
                  />
                  <BaseInputField
                    name="email"
                    label="Email"
                    placeholder="Email"
                    type="email"
                    value={finalValues.email}
                    onChange={(e) =>
                      setFinalValues({ ...finalValues, email: e.target.value })
                    }
                  />
                  <SelectNationality
                    name="nationality_id"
                    label="National"
                    placeholder="National"
                    value={finalValues.nationality_id}
                    onChange={(value) =>
                      setFinalValues({ ...finalValues, nationality_id: value })
                    }
                  />
                  <div className="relative my-2">
                    <p className="mb-2 text-base text-gray-600"> Number</p>
                    <PhoneInput
                      placeholder="Enter Your Number"
                      value={values.phone}
                      onChange={(value) => setFieldValue("phone", value)}
                      defaultCountry="EG"
                      className="w-full p-3 border border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="mt-4 flex justify-end">
                    <Button
                      variant="outlined"
                      onClick={() => setIsModalOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleConfirm}
                      className="ml-2 bg-blue-900"
                    >
                      Confirm
                    </Button>
                  </div>
                </div>
              </div>
            </Modal>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default MainDataBookingForm;
