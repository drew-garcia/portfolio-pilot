import React, { FC } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignUp: FC = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const handleSubmit = (values: any) => {
    console.log('Sign up data: ', values);
    // make an API call to submit the sign-up data to the server
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className='bg-white p-6 rounded-lg shadow-md'>
          <h2 className='text-lg font-medium mb-4'>Signup</h2>
          <div className='mb-4'>
            <label className='block font-medium mb-2' htmlFor='email'>
              Email:
            </label>
            <Field
              type='email'
              name='email'
              className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
            />
            <ErrorMessage
              name='email'
              component='div'
              className='text-red-500 text-sm font-medium'
            />
          </div>
          <div className='mb-4'>
            <label className='block font-medium mb-2' htmlFor='password'>
              Password:
            </label>
            <Field
              type='password'
              name='password'
              className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
            />
            <ErrorMessage
              name='password'
              component='div'
              className='text-red-500 text-sm font-medium'
            />
          </div>
          <button
            className='bg-purple-500 hover:bg-purple-400 text-white font-medium py-2 px-4 rounded-full focus:outline-none focus:shadow-outline hover:cursor-pointer'
            type='submit'
            disabled={isSubmitting}
          >
            Sign Up
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUp;
