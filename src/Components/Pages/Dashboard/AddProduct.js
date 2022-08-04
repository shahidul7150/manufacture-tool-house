import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
      console.log(data)
    const url=`https://obscure-harbor-94819.herokuapp.com/product`;
    fetch(url,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(result=>{
        console.log(result);
        toast('Add product successfully')
    })
    };
  return (
    <div className="w-2/4 mx-auto mt-3 bg-white shadow-xl p-5">
      <h2 className="mb-3 text-xl text-center">Please add a product</h2>

      <form
        className=" flex flex-col gap-y-3 items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          placeholder="Product name"
          {...register('name', { required: true })}
          className="input input-bordered w-full max-w-xs"
        />
        <textarea
          placeholder="Description"
          {...register('description', { required: true })}
          className="input input-bordered w-full max-w-xs"
        />
        <input
          placeholder="Price per unit"
          type="number"
          {...register('price', { required: true })}
          className="input input-bordered w-full max-w-xs"
        />
        <input
          placeholder="Total quantity"
          type="number"
          {...register('quantity', { required: true })}
          className="input input-bordered w-full max-w-xs"
        />
        <input
          placeholder="Minimum order"
          type="number"
          {...register('minimum', { required: true })}
          className="input input-bordered w-full max-w-xs"
        />
        <input
          placeholder="Photo url"
          type="text"
          {...register('img', { required: true })}
          className="input input-bordered w-full max-w-xs"
        />

        <input
          className="btn btn-primary  input input-bordered w-full max-w-xs "
          type="submit"
          value="Add Product"
        />
      </form>
    </div>
  );
};

export default AddProduct;
