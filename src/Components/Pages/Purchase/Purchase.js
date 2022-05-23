import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
  const { purchaseId } = useParams();
  const [purchase, setPurchase] = useState({});

    const [increase, setIncrease] = useState(0);
    const [change,setChange]=useState('')
  const increasehandle = () => {
    const count = increase + 1;
    setIncrease(count);
  };
  const decreasehandle = () => {
    const count = increase - 1;
    setIncrease(count);
  };
    console.log(increase);
    

    const changeValue=(event)=> {
    setChange(event.target.value);
}
  useEffect(() => {
    const url = `http://localhost:5000/product/${purchaseId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPurchase(data));
  }, []);

  const formSubmit = (event) => {
    event.preventDefault();
  };
  const minimumQuantity = parseInt(purchase.quantity)-increase;
  return (
    <div className="m-14">
      <div class="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={purchase.img} alt="Album" />
        </figure>
        <div class="card-body justify-center">
          <h2 class="card-title">{purchase.name}</h2>
          <p className="flex-grow-0">{purchase.description}</p>
          <p className="flex-grow-0 font-bold text-primary">
            Per Unit: {purchase.price} USD
          </p>
          {/* input      */}
          <form onSubmit={formSubmit}>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Quantity</span>
              </label>

              {/* <input
                type="number"
                placeholder="Type here"
                class="input input-bordered w-full max-w-xs"
              /> */}

              <div class="form-control">
                <label class="label">
                  <span class="label-text">Enter amount</span>
                </label>
                <label class="input-group">
                  <button
                    onClick={increasehandle}
                    className="bg-gray-300 px-5 text-2xl font-bold text-primary"
                  >
                    +
                  </button>
                  <input onChange={changeValue} type="text" name="name" id="" className='text-center' value={increase} />
                  {increase < 1 ? (
                    <button
                      disabled
                      className="bg-gray-300 px-5 text-2xl font-bold text-primary"
                    >
                      -
                    </button>
                  ) : (
                    <button
                      onClick={decreasehandle}
                      className="bg-gray-300 px-5 text-2xl font-bold text-primary"
                    >
                      -
                    </button>
                  )}
                </label>
              </div>

              <label class="label">
                <span class="label-text-alt text-primary">
                  Minimum {purchase.minimum} order
                </span>
              </label>
              <label class="label">
                <span class="label-text text-lime-600">
                  Available Now: {minimumQuantity}
                </span>
              </label>
            </div>
            {/* input end */}
            <div class="card-actions justify-start">
              {increase < purchase.minimum ? (
                <input
                  disabled
                  class="btn  btn-primary"
                  type="submit"
                  value="Add Purchase"
                />
              ) : (
                <input
                  class="btn  btn-primary"
                  type="submit"
                  value="Add Purchase"
                />
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
