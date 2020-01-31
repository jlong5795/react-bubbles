import React from "react";
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    //console.log(data);

    axios
      .post('http://localhost:5000/api/login', data)
      .then(response => {
        //console.log('Token Response', response)
        localStorage.setItem('token', response.data.payload)
        props.history.push('/bubble-page')
      })
      .catch(error => console.log(error))
      
      
  };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
                <label>Username: 
                <input
                    type='text'
                    name='username'
                    ref={register}
                />
                </label>
                <label>Password: 
                <input
                    type='password'
                    name='password'
                    ref={register}
                />
                </label>
                <input
                    type='submit'
                />
            </form>
    </>
  );
};

export default Login;
