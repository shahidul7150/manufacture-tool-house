import React from 'react';
import { useNavigate } from 'react-router-dom';
import Social from './Social';

const Register = () => {
  const navigate = useNavigate();
  return (
    <div className="sm:w-5/5  lg:w-2/5 mx-auto bg-base-200 m-6">
      <div class="card-body ">
        <h2 className="text-xl text-primary mt-4">Please Registration</h2>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" class="input input-bordered" />
        </div>
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
            <a
              href="#"
              onClick={() => navigate('/login')}
              class="label-text-alt link link-hover"
            >
              Already have an account ? <span>Please login</span>
            </a>
          </label>
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary">Login</button>
        </div>

        <div class="divider">OR</div>

        <Social />
      </div>
    </div>
  );
};

export default Register;
