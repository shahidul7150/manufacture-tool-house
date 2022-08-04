import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useForm } from 'react-hook-form';
import ReactStars from "react-rating-stars-component";
import { toast } from 'react-toastify';
const AddReview = () => {

// -------------------------
  
const rating = {
  size: 30,
  color: "gray",
  activeColor: "red",
  value: 7.5,
  a11y: true,
  isHalf: true,
  emptyIcon:<FontAwesomeIcon className='text-orange-600' icon={faStar} />  ,
  filledIcon:<FontAwesomeIcon icon={faStar} />,
  onChange: newValue => {
    console.log(`Example 2: new value is ${newValue}`);
  }
};
  
// -------------------------




  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `https://obscure-harbor-94819.herokuapp.com/review`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast('Add review successfully');
      });
  };
  return (
    <div className="w-2/4 mx-auto mt-3 bg-white shadow-xl p-5">
      <h2 className="mb-3 text-xl text-center">Please add your review</h2>

      <form
        className=" flex flex-col  items-center gap-y-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          placeholder="Your name"
          {...register('name', { required: true })}
          className="input input-bordered w-full max-w-xs"
        />
        <textarea
          placeholder="Description"
          {...register('description', { required: true })}
          className="input input-bordered w-full max-w-xs"
        />

        <input
          placeholder="Your photo"
          type="text"
          {...register('img', { required: true })}
          className="input input-bordered w-full max-w-xs"
        />
        
        {/* ratting start */}
<ReactStars  {...register('rating')} {...rating} />
        
        {/* ratting end */}
        <input
          className="btn btn-primary  input input-bordered w-full max-w-xs "
          type="submit"
          value="Add Review"
        />
      </form>
    </div>
  );
};

export default AddReview;
