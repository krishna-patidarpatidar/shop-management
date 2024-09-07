import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

const NameUpdate = () => {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    currentName: Yup.string().required('Current name is required'),
    newName: Yup.string()
      .min(3, 'New name must be at least 3 characters')
      .required('New name is required'),
    confirmName: Yup.string()
      .oneOf([Yup.ref('newName'), null], 'Names must match')
      .required('Confirm name is required'),
  });

  // Initial form values
  const initialValues = {
    currentName: '',
    newName: '',
    confirmName: '',
  };

  // Form submission logic
  const handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <div className=" mt-8 flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Update Name</h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Current Name Field */}
              <div>
                <label htmlFor="currentName" className="block text-gray-700">
                  Current Name
                </label>
                <input
                  name="currentName"
                  type="text"
                  placeholder="Enter current name"
                  value={values.currentName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full px-4 py-2 border rounded mt-1"
                />
                {errors.currentName && touched.currentName && (
                  <div className="text-red-500 text-sm mt-1">{errors.currentName}</div>
                )}
              </div>

              {/* New Name Field */}
              <div>
                <label htmlFor="newName" className="block text-gray-700">
                  New Name
                </label>
                <input
                  name="newName"
                  type="text"
                  placeholder="Enter new name"
                  value={values.newName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full px-4 py-2 border rounded mt-1"
                />
                {errors.newName && touched.newName && (
                  <div className="text-red-500 text-sm mt-1">{errors.newName}</div>
                )}
              </div>

              {/* Confirm Name Field */}
              <div>
                <label htmlFor="confirmName" className="block text-gray-700">
                  Confirm Name
                </label>
                <input
                  name="confirmName"
                  type="text"
                  placeholder="Confirm new name"
                  value={values.confirmName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full px-4 py-2 border rounded mt-1"
                />
                {errors.confirmName && touched.confirmName && (
                  <div className="text-red-500 text-sm mt-1">{errors.confirmName}</div>
                )}
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default NameUpdate;
