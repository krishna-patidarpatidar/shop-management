import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import AdminPage from './AdminPage';
import { useNavigate } from 'react-router-dom';

const VandorsValidationSchema = yup.object().shape({
    name: yup.string().min(5).required(),
    number: yup.string().length(10, "Number must be exactly 10 digits").required(),
    address: yup.string().required()
});

const AddVandors = () => {
    const navigate = useNavigate();

    return (
        <div>
            <AdminPage />
            <h2>Add Vandors</h2>
            <Formik
                initialValues={{ name: '', number: '', address: '' }}
                validationSchema={VandorsValidationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    let Vandors = JSON.parse(localStorage.getItem("AddVandors")) || [];
                  
                    if (!Array.isArray(Vandors)) {
                        Vandors = [];
                    }

                    Vandors.push(values);

                    localStorage.setItem("AddVandors", JSON.stringify(Vandors));

                    navigate("/vandors");
                    setSubmitting(false);
                }}
            >
                {({ values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting }) => (
                    <Form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Vandors Name</label>
                            <input
                                className='border'
                                name='name'
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="text"
                                placeholder='Enter Vandors name'
                            />
                            {touched.name && <span className='text-red-600'>{errors.name}</span>}
                        </div>

                        <div>
                            <label htmlFor="number">Vandors Mobile Number</label>
                            <input
                                className='border'
                                name='number'
                                value={values.number}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="text"
                                placeholder='Enter Vandors number'
                            />
                            {touched.number && <span className='text-red-600'>{errors.number}</span>}
                        </div>

                        <div>
                            <label htmlFor="address">Vandors Address</label>
                            <input
                                className='border'
                                name='address'
                                value={values.address}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="text"
                                placeholder='Enter Vandors address'
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

export default AddVandors;
