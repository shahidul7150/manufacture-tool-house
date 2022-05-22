import React from 'react';
import Social from './Social';

const Login = () => {
  return (
    <div className="w-2/5 mx-auto bg-base-200 m-6">
      <div class="card-body ">
        <h2 className="text-xl text-primary mt-4">Quick Login</h2>
        <Social />
        <div class="divider">OR</div>
        <h2 className="text-xl text-primary mt-4">
          Please Login with email and password
        </h2>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" class="input input-bordered" />
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
            <a href="#" class="label-text-alt link link-hover">
              New tools house? <span>Please Register</span>
            </a>
          </label>
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
