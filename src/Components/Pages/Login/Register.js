import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading';
const Register = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  let signInError;

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
  if (user || gUser) {
    console.log(user || gUser);
  }

  const onSubmit = (data) => {
    console.log(data);
    createUserWithEmailAndPassword(data.email, data.password);
  };
  return (
    <div className="bg-base-200 lg:w-2/6 mx-auto ">
      <div className="sm:w-5/5  mx-auto bg-base-200 m-6 form-control w-full  ">
        <div class="card-body ">
          {/* <h2 className="text-xl text-primary mt-4">Quick Login</h2> */}

          <h2 className="text-2xl text-primary mt-4">Please Register</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control w-full ">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                class="input input-bordered w-full "
                {...register('name', {
                  required: {
                    value: true,
                    message: 'Name is Required',
                  },
                })}
              />
              <label class="label">
                {errors.name?.type === 'required' && (
                  <span class="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
            <div class="form-control w-full ">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                class="input input-bordered w-full "
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
              <label class="label">
                {errors.email?.type === 'required' && (
                  <span class="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === 'pattern' && (
                  <span class="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div class="form-control w-full ">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Your Password"
                class="input input-bordered w-full "
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
              <label class="label">
                {errors.password?.type === 'required' && (
                  <span class="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === 'minLength' && (
                  <span class="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {signInError}
            <input
              className="btn btn-primary w-full "
              type="submit"
              value="Register"
            />
          </form>
          <p>
            <small>
              Already have an account ?{' '}
              <Link to="/login" className="text-primary">
                Please Login
              </Link>
            </small>
          </p>

          <div class="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            class="btn btn-primary btn-outline"
          >
            <img
              width="24px"
              className="mx-3"
              src="https://logodix.com/logo/422807.png"
              alt=""
            />
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
