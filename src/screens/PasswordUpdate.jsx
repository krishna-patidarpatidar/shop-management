import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

const PasswordUpdate = () => {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    currentPassword: Yup.string().required('Current password is required'),
    newPassword: Yup.string()
      .min(8, 'New password must be at least 8 characters')
      .required('New password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
      .required('Confirm password is required'),
  });

  // Initial form values
  const initialValues = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  };

  // Form submission logic
  const handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <div className=" mt-8 flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Update Password</h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Current Password Field */}
              <div>
                <label htmlFor="currentPassword" className="block text-gray-700">
                  Current Password
                </label>
                <input
                  name="currentPassword"
                  type="password"
                  placeholder="Enter current password"
                  value={values.currentPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full px-4 py-2 border rounded mt-1"
                />
                {errors.currentPassword && touched.currentPassword && (
                  <div className="text-red-500 text-sm mt-1">{errors.currentPassword}</div>
                )}
              </div>

              {/* New Password Field */}
              <div>
                <label htmlFor="newPassword" className="block text-gray-700">
                  New Password
                </label>
                <input
                  name="newPassword"
                  type="password"
                  placeholder="Enter new password"
                  value={values.newPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full px-4 py-2 border rounded mt-1"
                />
                {errors.newPassword && touched.newPassword && (
                  <div className="text-red-500 text-sm mt-1">{errors.newPassword}</div>
                )}
              </div>

              {/* Confirm Password Field */}
              <div>
                <label htmlFor="confirmPassword" className="block text-gray-700">
                  Confirm Password
                </label>
                <input
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm new password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full px-4 py-2 border rounded mt-1"
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <div className="text-red-500 text-sm mt-1">{errors.confirmPassword}</div>
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

export default PasswordUpdate;
