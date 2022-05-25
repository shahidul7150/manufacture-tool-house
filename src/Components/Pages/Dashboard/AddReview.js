import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
const AddReview = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `https://obscure-harbor-94819.herokuapp.com/product`;
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
        toast('Add product successfully');
      });
  };
  return (
    <div class="w-2/4 mx-auto mt-3">
      <h2 class="mb-3">Please add your review</h2>

      <form
        className=" flex flex-col gap-y-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          placeholder="Product name"
          {...register('name', { required: true })}
          class="input input-bordered w-full max-w-xs"
        />
        <textarea
          placeholder="Description"
          {...register('description', { required: true })}
          class="input input-bordered w-full max-w-xs"
        />

        <input
          placeholder="Your photo"
          type="text"
          {...register('img', { required: true })}
          class="input input-bordered w-full max-w-xs"
        />
        {/* ratting start */}
        <div>
            <h4>Your ratting</h4>
          <div class="rating">
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
            />
          </div>
        </div>
        {/* ratting end */}
        <input
          className="btn btn-primary  input input-bordered w-full max-w-xs "
          type="submit"
          value="Add Product"
        />
      </form>
    </div>
  );
};

export default AddReview;
