import React from 'react';
import { useNavigate } from 'react-router-dom';

import Social from './Social';

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="sm:w-5/5  lg:w-2/5 mx-auto bg-base-200 m-6">
      <div class="card-body ">
        <h2 className="text-xl text-primary mt-4">Quick Login</h2>
        <Social />
        <div class="divider">OR</div>
        <h2 className="text-xl text-primary mt-4">
          Please Login with email and password
              </h2>
              

        <form>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="password"
              class="input input-bordered"
            />
            <label class="label">
              <a href="#" class="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
            <label class="label">
              <a
                href="#"
                onClick={() => navigate('/register')}
                class="label-text-alt link link-hover"
              >
                New tools house? <span>Please Register</span>
              </a>
            </label>
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-primary">Login</button>
          </div>
              </form>
              
              
      </div>
    </div>
  );
};

export default Login;
