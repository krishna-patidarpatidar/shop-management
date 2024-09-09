import React from 'react'
import { Link } from 'react-router-dom'
import { Formik } from 'formik'
import * as yup from 'yup'

const LoginSchema = yup.object().shape({
    email: yup.string().email('Invalid email address').required('Email is required'),
    password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters')
})

const Login = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={LoginSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        alert("You are logged in")
                        setSubmitting(false)
                    }}
                >
                    {({ values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting }) => (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">Login</h1>

                            <div className="flex flex-col">
                                <label htmlFor="email" className="text-gray-700">Email</label>
                                <input
                                    className={`border p-2 rounded-lg ${touched.email && errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-400`}
                                    type="text"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Enter a valid email"
                                />
                                {touched.email && errors.email && (
                                    <span className="text-red-600 text-sm mt-1">{errors.email}</span>
                                )}
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="password" className="text-gray-700">Password</label>
                                <input
                                    className={`border p-2 rounded-lg ${touched.password && errors.password ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-400`}
                                    type="password"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Enter your password"
                                />
                                {touched.password && errors.password && (
                                    <span className="text-red-600 text-sm mt-1">{errors.password}</span>
                                )}
                            </div>

                           <Link className="bg-blue-500 text-white p-2 rounded-lg mt-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 text-center" to={'/admin'}> <button
                                type="submit"
                                disabled={isSubmitting}
                               
                            >
                                Login
                            </button></Link>

                            <Link className="text-center text-blue-500 text-sm mt-4 hover:underline" to="/register">
                                Create a new account
                            </Link>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Login
