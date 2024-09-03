import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

const CustomerValidationSchema = yup.object().shape({
    name: yup.string().min(5).required(),
    number: yup.string().length(10, "Number must be exactly 10 digits").required(),
    address: yup.string().required()
});

const AddCustomer = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h2>Add Customer</h2>
            <Formik
                initialValues={{ name: '', number: '', address: '' }}
                validationSchema={CustomerValidationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    let customers = JSON.parse(localStorage.getItem("AddCustomer")) || [];

                    if (!Array.isArray(customers)) {
                        customers = [];
                    }

                    customers.push(values);

                    localStorage.setItem("AddCustomer", JSON.stringify(customers));

                    navigate("/admin/contact");
                    setSubmitting(false);
                }}
            >
                {({ values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting }) => (
                    <Form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Customer Name</label>
                            <input
                                className='border'
                                name='name'
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="text"
                                placeholder='Enter customer name'
                            />
                            {touched.name && <span className='text-red-600'>{errors.name}</span>}
                        </div>

                        <div>
                            <label htmlFor="number">Customer Mobile Number</label>
                            <input
                                className='border'
                                name='number'
                                value={values.number}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="text"
                                placeholder='Enter customer number'
                            />
                            {touched.number && <span className='text-red-600'>{errors.number}</span>}
                        </div>

                        <div>
                            <label htmlFor="address">Customer Address</label>
                            <input
                                className='border'
                                name='address'
                                value={values.address}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="text"
                                placeholder='Enter customer address'
                            />
                            {touched.address && <span className='text-red-600'>{errors.address}</span>}
                        </div>

                        <div>
                            <button type="submit" disabled={isSubmitting}>Save</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default AddCustomer;
