import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

interface LoginProps {
  onSubmit: (email: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={(values) => {
        const errors: { email?: string; password?: string } = {};
        if (!values.email) {
          errors.email = 'Email is required';
        }
        if (!values.password) {
          errors.password = 'Password is required';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        onSubmit(values.email, values.password);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className='bg-white p-6 rounded-lg shadow-md'>
          <h2 className='text-lg font-medium mb-4'>Login</h2>
          <div className='mb-4'>
            <label className='block font-medium mb-2' htmlFor='email'>
              Email:
            </label>
            <Field
              name='email'
              type='email'
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
              name='password'
              type='password'
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
            Login
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
