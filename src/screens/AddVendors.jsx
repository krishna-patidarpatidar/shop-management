import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

const VendorsValidationSchema = yup.object().shape({
    name: yup.string().min(5).required(),
    number: yup.string().length(10, "Number must be exactly 10 digits").required(),
    address: yup.string().required()
});

const AddVendors = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h2>Add Vendors</h2>
            <Formik
                initialValues={{ name: '', number: '', address: '' }}
                validationSchema={VendorsValidationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    let Vendors = JSON.parse(localStorage.getItem("AddVendors")) || [];

                    if (!Array.isArray(Vendors)) {
                        Vendors = [];
                    }

                    Vendors.push(values);

                    localStorage.setItem("AddVendors", JSON.stringify(Vendors));

                    navigate("/admin/vendors");
                    setSubmitting(false);
                }}
            >
                {({ values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting }) => (
                    <Form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Vendors Name</label>
                            <input
                                className='border'
                                name='name'
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="text"
                                placeholder='Enter Vendors name'
                            />
                            {touched.name && <span className='text-red-600'>{errors.name}</span>}
                        </div>

                        <div>
                            <label htmlFor="number">Vendors Mobile Number</label>
                            <input
                                className='border'
                                name='number'
                                value={values.number}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="text"
                                placeholder='Enter Vendors number'
                            />
                            {touched.number && <span className='text-red-600'>{errors.number}</span>}
                        </div>

                        <div>
                            <label htmlFor="address">Vendors Address</label>
                            <input
                                className='border'
                                name='address'
                                value={values.address}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="text"
                                placeholder='Enter Vendors address'
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

export default AddVendors;
