import React, { useEffect } from 'react';
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../../hooks/useToken';
import Loading from '../../Shared/Loading';

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const location = useLocation();
const [token]=useToken(user || gUser)
  let signInError;
  let from = location.state?.from?.pathname || '/';


  
  if (loading || gLoading) {
    return <Loading />;
  }

  if (error || gError) {
    signInError = (
      <p>
        <small className="text-red-600">
          {error?.message || gError?.message}
        </small>
      </p>
    );
  }

  
  if (token) {
    navigate(from, { replace: true });
  }

  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
  };
  return (
    <div className="bg-base-200 lg:w-2/6 mx-auto ">
      <div className="sm:w-5/5  mx-auto bg-base-200 m-6 form-control w-full  ">
        <div className="card-body ">
          {/* <h2 className="text-xl text-primary mt-4">Quick Login</h2> */}

          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-primary btn-outline"
          >
            <img
              width="24px"
              className="mx-3"
              src="https://logodix.com/logo/422807.png"
              alt=""
            />
            Login with Google
          </button>

          <div className="divider">OR</div>
          <h2 className="text-2xl text-primary mt-4">Please Login</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full "
                {...register('email', {
                  required: {
                    value: true,
                    message: 'Email is Required',
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: 'Provide a valid Email',
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === 'required' && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === 'pattern' && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Your Password"
                className="input input-bordered w-full "
                {...register('password', {
                  required: {
                    value: true,
                    message: 'Password is Required',
                  },
                  minLength: {
                    value: 6,
                    message: 'Must bre 6 characters or longer',
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === 'required' && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === 'minLength' && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {signInError}
            <input
              className="btn btn-primary w-full "
              type="submit"
              value="Login"
            />
          </form>
          <p>
            <small>
              New to Tools User ?{' '}
              <Link to="/register" className="text-primary">
                Create New Account
              </Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
