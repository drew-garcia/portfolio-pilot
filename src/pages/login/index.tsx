import React, { useState } from 'react';

interface LoginProps {
  onSubmit: (username: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(username, password);
  };

  return (
    <form className='bg-white p-6 rounded-lg' onSubmit={handleSubmit}>
      <h2 className='text-lg font-medium mb-4'>Login</h2>
      <div className='mb-4'>
        <label className='block font-medium mb-2' htmlFor='username'>
          Username:
        </label>
        <input
          className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
          type='text'
          id='username'
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div className='mb-4'>
        <label className='block font-medium mb-2' htmlFor='password'>
          Password:
        </label>
        <input
          className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
          type='password'
          id='password'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button
        className='bg-purple-500 hover:bg-purple-400 text-white font-medium py-2 px-4 rounded-full focus:outline-none focus:shadow-outline'
        type='submit'
      >
        Login
      </button>
    </form>
  );
};

export default Login;
