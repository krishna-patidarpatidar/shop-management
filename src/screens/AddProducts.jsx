import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup'; // Import Yup for validation
import { useAddProductsMutation } from '../Redux/serviec';

// Validation schema
const validationSchema = Yup.object({
  name: Yup.string()
    .required('Product name is required'), // Required name field
  sellingPrice: Yup.number()
    .required('sellingPrice is required')
    .positive('sellingPrice must be positive'),
  productCode: Yup.string()
    .required('Product code is required')
});

const AddProducts = () => {
  const [addProducts] = useAddProductsMutation();
 const token = localStorage.getItem("auth")
  const initialValues = {
    name: '',
    sellingPrice: '',
    productCode: ''
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    addProducts({productData: values,token})
      .then((response) => {
        console.log('Product Added:', response);
        resetForm();
      })
      .catch((error) => {
        console.error('Error adding product:', error);
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-4 mt-40">
      <div className="max-w-lg mx-auto bg-white rounded-lg p-6 shadow-md">
        <h1 className="text-2xl font-bold text-center mb-4">Add Product</h1>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema} // Use validation schema here
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              {/* Product Name */}
              <div className="mb-4">
                <label className="block text-lg font-semibold">Product Name</label>
                <input
                  name="name"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  placeholder="Enter product name"
                  className={`w-full px-3 py-2 border rounded-md ${errors.name && touched.name ? 'border-red-500' : ''}`}
                />
                {errors.name && touched.name && (
                  <div className="text-red-500 text-sm">{errors.name}</div>
                )}
              </div>

              {/* sellingPrice */}
              <div className="mb-4">
                <label className="block text-lg font-semibold">sellingPrice</label>
                <input
                  name="sellingPrice"
                  type="number"
                  value={values.sellingPrice}
                  onChange={handleChange}
                  placeholder="Enter sellingPrice"
                  className={`w-full px-3 py-2 border rounded-md ${errors.sellingPrice && touched.sellingPrice ? 'border-red-500' : ''}`}
                />
                {errors.sellingPrice && touched.sellingPrice && (
                  <div className="text-red-500 text-sm">{errors.sellingPrice}</div>
                )}
              </div>

              {/* Product Code */}
              <div className="mb-4">
                <label className="block text-lg font-semibold">Product Code</label>
                <input
                  name="productCode"
                  type="text"
                  value={values.productCode}
                  onChange={handleChange}
                  placeholder="Enter product code"
                  className={`w-full px-3 py-2 border rounded-md ${errors.productCode && touched.productCode ? 'border-red-500' : ''}`}
                />
                {errors.productCode && touched.productCode && (
                  <div className="text-red-500 text-sm">{errors.productCode}</div>
                )}
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md"
                >
                  Add Product
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddProducts;
