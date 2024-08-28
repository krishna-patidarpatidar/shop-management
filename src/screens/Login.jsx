import React from 'react'
import { Link } from 'react-router-dom'
import { Formik } from 'formik'
import * as yup from 'yup'

const LoginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required().min(8)
})
const Login = () => {
    return (
        <div className='max-w-[300px] mx-auto mt-8 border p-6 text-2xl rounded-lg bg-lime-100'>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={LoginSchema}
                onSubmit={(values, { setSubmitting }) => {
                    alert="you are login"
                    setSubmitting(false)
                }}
            >
                {({ values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting }) => (
                    <form onSubmit={handleSubmit} action="" className='flex flex-col gap-2 text-center'>

                        <h1>Login </h1>
                        <label htmlFor="email"  className='text-left'>Email</label>
                        <input className='border bg-slate-100 text-[16px] py-1 px-2 rounded-lg'
                            type="text"
                            name='email'
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder='enter a valid email' />
                        {touched.email && <span className='text-red-600 text-sm text-left absolute mt-[115px] ml-[106px]'>{errors.email}</span>}
                        <label htmlFor="Password"  className='text-left'>Password</label>
                        <input className='border  bg-slate-100 text-[16px] py-1 px-2 rounded-lg'
                            type="password"
                            name='password'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            placeholder='enter a valid password' />
                        {touched.password && <span className='text-red-600 text-sm text-left absolute mt-[205px] ml-20'>{errors.password}</span>}
                        <button type='submit' disabled={isSubmitting} className='border w-[100px] mx-auto mt-2 rounded-lg bg-green-400 p-1'>login</button>
                        <Link className='text-blue-500 text-[20px]' to={'/register'}><p>Create new account</p></Link>
                    </form>



                )}

            </Formik>


        </div>
    )
}

export default Login