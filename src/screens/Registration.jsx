import { Formik } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom'
import * as yup from 'yup'



const RegistrationSchema = yup.object().shape({
    name: yup.string().required().min(5).max(15),
    email: yup.string().email().required(),
    number: yup.string().required().matches(/^[0-9]{10}$/, "Mobile number must be 10 digits"),

    password: yup.string().required().min(8),
    confirmPassword: yup.string().oneOf([yup.ref("password")], "confirm password must be same as password").required()

})

const Registration = () => {

    return (
        <div className='max-w-[450px] mx-auto text-xl mt-7 border p-4 rounded-xl bg-slate-200'>
            <Formik
                initialValues={{ name: '', email: '', number: '', password: '', confirmPassword: '' }}
                validationSchema={RegistrationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(false);
                }}
            >
                {({ values, errors, handleBlur, handleChange, handleSubmit, touched, isSubmitting }) => (
                    <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
                        <h1 className='text-2xl text-center'>Registration Form</h1>
                        <div className='flex flex-col'>
                            <label htmlFor="">Name</label>
                            <input className='border rounded-lg p-1'
                                placeholder=' enter your name'
                                type="text"
                                name='name'
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur} />
                            {touched.name && <span className='text-red-600 text-sm text-left absolute mt-[61px]'>{errors.name}</span>}
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="">Email</label>
                            <input className='border rounded-lg p-1'
                                placeholder=' enter your Email'
                                type="text"
                                name='email'
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur} />
                            {touched.email && <span className='text-red-600 text-sm text-left absolute mt-[61px]'>{errors.email}</span>}
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="">Mobile Number</label>
                            <input className='border rounded-lg p-1'
                                placeholder='enter your Mobile Number'
                                type="text"
                                name='number'
                                value={values.number}
                                onChange={handleChange}
                                onBlur={handleBlur} />
                            {touched.number && <span className='text-red-600 text-sm text-left absolute mt-[61px]'>{errors.number}</span>}
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="">Password</label>
                            <input className='border rounded-lg p-1'
                                placeholder='enter new password'
                                type="password"
                                name='password'
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur} />
                            {touched.password && <span className='text-red-600 text-sm text-left absolute mt-[61px]'>{errors.password}</span>}
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="">Confirm Password</label>
                            <input className='border rounded-lg p-1'
                                placeholder='confirm password'
                                type="password"
                                name='confirmPassword'
                                value={values.confirmPassword}
                                onChange={handleChange}
                                onBlur={handleBlur} />
                            {touched.confirmPassword && <span className='text-red-600 text-sm text-left absolute mt-[61px]'>{errors.confirmPassword}</span>
                            }
                        </div>
                        <Link to={'/'} className='border border-black rounded-lg px-1 mt-2 text-center bg-blue-600'>
                        <button type="submit" disabled={isSubmitting}>Submit</button>
                        </Link>
                        <div className=' gap-2 md:flex'>
                        <p>Already registered ?</p> <Link className='text-lg text-blue-800' to={'/login'}>Login Hare</Link>
                        </div>


                    </form>
                )}

            </Formik>

        </div>
    )
}

export default Registration