import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
  const { purchaseId } = useParams();
  const [purchase, setPurchase] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/product/${purchaseId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPurchase(data));
  }, []);
  return (
    <div className="m-14">
      <div class="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={purchase.img} alt="Album" />
        </figure>
        <div class="card-body justify-center">
          <h2 class="card-title">{purchase.name}</h2>
          <p className="flex-grow-0">{purchase.description}</p>
          <p className="flex-grow-0 font-bold text-primary">Per Unit: {purchase.price} USD</p>
          {/* input      */}
          <form>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Quantity</span>
              </label>

              <input
                type="number"
                placeholder="Type here"
                class="input input-bordered w-full max-w-xs"
              />
              <label class="label">
                <span class="label-text-alt text-primary">
                  Minimum {purchase.minimum} order
                </span>
              </label>
              <label class="label">
                <span class="label-text text-lime-600">Available Now: {purchase.quantity}</span>
              </label>
            </div>
            {/* input end */}
            <div class="card-actions justify-start">
              <input
                class="btn btn-primary"
                type="submit"
                value="Add Purchase"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
