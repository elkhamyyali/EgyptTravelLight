import React, { useState } from "react";
import { Form, Formik } from "formik";
import { Minus, Plus } from "lucide-react";
import PhoneInput from "react-phone-number-input";
import dayjs from "dayjs";
import { Input, Modal, Button } from "@mui/material";

import BaseInputField from "@/components/molecules/formik-fields/BaseInputField";
import SelectNationality from "@/components/molecules/selects/SelectNationality";
import { useMutate } from "@/hooks/UseMutate";
import { Spinner } from "../UI/Spinner";
import { notify } from "@/utils/toast";
import DatePickerModal from "@/components/molecules/dataPicker";
import DatePickerInput from "../SearchExcursions/DatePickerInput";

interface MainDataBookingFormProps {
  DetailTour: { id: number };
  setIsThanksVisible: (visible: boolean) => void;
}

const MainDataBookingForm: React.FC<MainDataBookingFormProps> = ({
  DetailTour,
  setIsThanksVisible,
}) => {
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

  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(null);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Define handleDateChange function
  const handleDateChange = (newDate: dayjs.Dayjs | null) => {
    setSelectedDate(newDate);
  };

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          nationality_id: "",
          phone: "",
          start_at: "",
          num_of_adults: 1,
          num_of_children: 0,
          num_of_infants: 0,
          tour_id: DetailTour?.id,
          duration: "1",
          phone_code: "+20",
        }}
        onSubmit={(values, { setSubmitting }) => {
          setIsModalOpen(true);
          setSubmitting(false);
        }}
      >
        {({ values, setFieldValue, handleSubmit, isSubmitting }) => (
          <Form>
            {/* Date Picker Component */}
            <DatePickerInput
              selectedDate={selectedDate}
              onDateChange={handleDateChange} // Call handleDateChange
              width="full"
              height="40px"
              labelProps={{
                fontSize: "14px",
                color: "rgba(0, 0, 0, 0.6)",
                transform: "translate(14px, 12px) scale(1)",
              }}
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
                {isSubmitting ? <Spinner /> : "Submit"}
              </button>
            </div>

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
                    placeholder="Name"
                    type="text"
                    value={values.name}
                    onChange={(e) => setFieldValue("name", e.target.value)}
                  />
                  <BaseInputField
                    name="email"
                    label="Email"
                    placeholder="Email"
                    type="email"
                    value={values.email}
                    onChange={(e) => setFieldValue("email", e.target.value)}
                  />
                  <SelectNationality
                    name="nationality_id"
                    label="National"
                    placeholder="National"
                    value={values.nationality_id}
                    onChange={(value) => setFieldValue("nationality_id", value)}
                  />
                  <div className="relative my-2">
                    <p className="mb-2 text-base text-gray-600">Number</p>
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
                      onClick={() => {
                        const month = selectedDate
                          ? selectedDate.format("MMM")
                          : "";
                        mutate({
                          ...values,
                          phone: values.phone.slice(2),
                          start_at: selectedDate
                            ? selectedDate.format("YYYY-MM-DD")
                            : "",
                          month: month,
                        });
                        setIsModalOpen(false);
                      }}
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
};

export default MainDataBookingForm;
