import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createUser } from '../../../Store/Slices/UserSlice';

const SignInForm = () => {
    const dispatch = useDispatch();
  //*FORM VALIDATION
  const [userCredentials, setUserCredentials] = useState({
    firstName: "",
    familyName: "",
    password: "",
    email: "",
  });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserCredentials((prevState) => ({ ...prevState, [name]: value }));
      };
      //*HANDLE SUBMIT
    
      const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createUser(userCredentials));
      };
    
    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group my-2">
              <label htmlFor="email" className="text-sm font-medium">
                Nombre
              </label>
              <input
                onChange={handleChange}
                type="text"
                name="firstName"
                className="input"
              />
            </div>

            <div className="input-group my-2">
              <label htmlFor="email" className="text-sm font-medium">
                Apellido
              </label>
              <input
                onChange={handleChange}
                type="text"
                name="familyName"
                className="input"
              />
            </div>

            <div className="input-group my-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email Adress
              </label>
              <input
                onChange={handleChange}
                type="email"
                name="email"
                className="input"
              />
            </div>
            <div className="input-group my-2">
              <label htmlFor="email" className="text-sm font-medium">
                Password
              </label>
              <input
                onChange={handleChange}
                type="password"
                name="password"
                className="input"
              />
            </div>
            <div className="input-group my-2">
              <input
                type="submit"
                value="Sign Up "
                className="btn-primary w-full mt-2"
              />
            </div>
          </form>
    )
}

export default SignInForm
