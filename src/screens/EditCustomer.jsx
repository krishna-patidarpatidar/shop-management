import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useCustomerEditMutation } from '../Redux/serviec';

const CustomerValidationSchema = yup.object().shape({
    name: yup.string().min(5).required(),
    mobile: yup.string().length(10, "mobile must be exactly 10 digits").required(),
    address: yup.string().required()
});

const EditCustomer = () => {
    const navigate = useNavigate();
  const [editCustomer] = useCustomerEditMutation()

    const{contectId}=useParams()
    const [queryParams] = useSearchParams()
    const name = queryParams.get("name")
    const mobile = queryParams.get("mobile")
    const address = queryParams.get("address")
  
    return (
        <div className='mt-[200px]'>
            <h2>Add Customer</h2>
            <Formik
                initialValues={{ name: name, mobile: mobile, address: address }}
                validationSchema={CustomerValidationSchema}
                onSubmit={(values, { setSubmitting }) => {

                    let customersToken = localStorage.getItem("auth")
                    console.log(values)
                    editCustomer({ customerData: values, token: customersToken ,id:contectId})
                        .then((res) => {
                            console.log(res)
                        })


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
                                name='mobile'
                                value={values.mobile}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="text"
                                placeholder='Enter customer number'
                            />
                            {touched.mobile && <span className='text-red-600'>{errors.mobile}</span>}
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

export default EditCustomer;
