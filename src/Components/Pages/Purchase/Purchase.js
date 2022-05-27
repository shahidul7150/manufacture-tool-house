import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';
const Purchase = () => {
  const [user, loading, error] = useAuthState(auth);
  const { purchaseId } = useParams();
  const [purchase, setPurchase] = useState({});

  // const [increase, setIncrease] = useState(0);

  // const [change, setChange] = useState('');
  const { _id, name, quantity, img, description, price, minimum } = purchase;

  // const increasehandle = () => {
  //   const count = increase + 1;
  //   setIncrease(count);
  // };
  // const decreasehandle = () => {
  //   const count = increase - 1;
  //   setIncrease(count);
  // };

  // const changeValue = (event) => {
  //   setChange(event.target.value);
  // };

  // ------------------------------------------
  let [increase, setIncrease] = useState(0);
  let incNum = () => {
    if (increase < quantity) {
      setIncrease(Number(increase) + 1);
    }
  };
  let decNum = () => {
    if (increase > 0) {
      setIncrease(increase - 1);
    }
  };

  let handleChange = (e) => {
    setIncrease(e.target.value);
    console.log(increase);
  };
  // --------------------------------------
  const minimumQuantity = quantity - increase;

  useEffect(() => {
    const url = `https://obscure-harbor-94819.herokuapp.com/product/${purchaseId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPurchase(data));
  }, []);

  const formSubmit = (event) => {
    event.preventDefault();
    // console.log(purchaseAmount, name, _id);
    let purchaseAmount = event.target.name.value;
    // console.log(purchaseAmount, name, _id);
    console.log(purchaseAmount);
    const booking = {
      purchaseId: _id,
      img,
      price,
      purchase: name,
      email: user.email,
      avatarName: user.displayName,
      Amount: purchaseAmount,
    };
    fetch('https://obscure-harbor-94819.herokuapp.com/booking', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast('order completed');
      });
  };

  return (
    <div className="m-14">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img className="p-5" src={img} alt="Album" />
        </figure>
        <div className="card-body justify-center">
          <h2 className="card-title">{name}</h2>
          <p className="flex-grow-0">{description}</p>
          <p className="flex-grow-0 font-bold text-primary">
            Per Unit: {price} USD
          </p>
          {/* input      */}
          <form onSubmit={formSubmit}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>

              {/* ====================================== */}

              {/* <div > */}
                {/* <div className="input-group"> */}
                  <div >
                    <label className=" lg:input-group  ">
                      <span className="btn btn-primary  " type="button" onClick={incNum}>
                        +
                      </span>

                      <input
                      
                        type="text"
                        name="name"
                        value={increase}
                        onChange={handleChange}
                        className=" input input-bordered"
                      />
                      <span
                        className="btn  btn-primary"
                        type="button"
                        onClick={decNum}
                      >
                        -
                      </span>
                    </label>
                  </div>
                {/* </div> */}
              {/* </div> */}

              {/* ------------------------------------------- */}

              <label className="label">
                <span className="label-text-alt text-primary">
                  Minimum {minimum} order
                </span>
              </label>
              <label className="label">
                <span className="label-text text-lime-600">
                  Available Now: {minimumQuantity}
                </span>
              </label>
            </div>
            {/* input end */}
            <div className="card-actions justify-start">
              {increase < minimum ? (
                <input
                  disabled
                  className="btn  btn-primary"
                  type="submit"
                  value="Add Purchase"
                />
              ) : (
                <input
                  className="btn  btn-primary"
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
