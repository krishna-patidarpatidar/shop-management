import { Formik } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom'
import * as yup from 'yup'

const RegistrationSchema = yup.object().shape({
    name: yup.string().required('Name is required').min(5, 'Name must be at least 5 characters').max(15, 'Name can\'t be more than 15 characters'),
    email: yup.string().email('Invalid email').required('Email is required'),
    number: yup.string().required('Mobile number is required').matches(/^[0-9]{10}$/, "Mobile number must be 10 digits"),
    password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
    confirmPassword: yup.string().oneOf([yup.ref("password")], "Passwords must match").required('Confirm password is required')
})

const Registration = () => {

    return (
        <div className='min-h-screen flex justify-center items-center bg-gray-100'>
            <div className='max-w-lg w-full bg-white p-6 rounded-lg shadow-lg'>
                <Formik
                    initialValues={{ name: '', email: '', number: '', password: '', confirmPassword: '' }}
                    validationSchema={RegistrationSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        setSubmitting(false);
                        alert('Registration Successful');
                    }}
                >
                    {({ values, errors, handleBlur, handleChange, handleSubmit, touched, isSubmitting }) => (
                        <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
                            <h1 className=' text-xl md:text-3xl font-bold text-center text-blue-600 md:mb-6'>Create a new account</h1>

                            <div className='flex flex-col'>
                                <label htmlFor="name" className='text-lg'>Name</label>
                                <input
                                    className={`border p-2 rounded-lg ${touched.name && errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-400`}
                                    type="text"
                                    name='name'
                                    placeholder='Enter your name'
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.name && errors.name && <span className='text-red-600 text-sm mt-[70px] absolute'>{errors.name}</span>}
                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor="email" className='text-lg'>Email</label>
                                <input
                                    className={`border p-2 rounded-lg ${touched.email && errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-400`}
                                    type="text"
                                    name='email'
                                    placeholder='Enter your email'
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.email && errors.email && <span className='text-red-600 text-sm mt-[70px] absolute'>{errors.email}</span>}
                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor="number" className='text-lg'>Mobile Number</label>
                                <input
                                    className={`border p-2 rounded-lg ${touched.number && errors.number ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-400`}
                                    type="text"
                                    name='number'
                                    placeholder='Enter your mobile number'
                                    value={values.number}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.number && errors.number && <span className='text-red-600 text-sm mt-[70px] absolute'>{errors.number}</span>}
                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor="password" className='text-lg'>Password</label>
                                <input
                                    className={`border p-2 rounded-lg ${touched.password && errors.password ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-400`}
                                    type="password"
                                    name='password'
                                    placeholder='Enter new password'
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.password && errors.password && <span className='text-red-600 text-sm mt-[70px] absolute'>{errors.password}</span>}
                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor="confirmPassword" className='text-lg'>Confirm Password</label>
                                <input
                                    className={`border p-2 rounded-lg ${touched.confirmPassword && errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-400`}
                                    type="password"
                                    name='confirmPassword'
                                    placeholder='Confirm  password'
                                    value={values.confirmPassword}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.confirmPassword && errors.confirmPassword && <span className='text-red-600 text-sm mt-[70px] absolute'>{errors.confirmPassword}</span>}
                            </div>

                           <Link  className='w-full bg-blue-500 text-center text-white p-3 rounded-lg font-semibold mt-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400' to={'/admin'}>
                           <button
                                type="submit"
                                disabled={isSubmitting}
                               
                            >
                                Sign Up
                            </button>
                           </Link>

                            <div className='flex justify-center mt-4'>
                                <p>Already have an account? </p>
                                <Link to='/' className='text-blue-600 font-semibold ml-1 hover:underline'>
                                    Login
                                </Link>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Registration
