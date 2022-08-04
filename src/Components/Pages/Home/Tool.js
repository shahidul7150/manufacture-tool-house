import "animate.css";
import { useNavigate } from "react-router-dom";

const Tool = ({ tool }) => {
  const { _id, name, img, price, description, minimum, quantity } = tool;
  const navigate = useNavigate();
  const navigateToPurchaseDetail = (id) => {
    navigate(`/purchase/${id}`);
  };
  return (
    <div className="h-80 px-3 pt-1 border-2 border-gradient-to-r from-sky-500 to-indigo-500 my-3 rounded-2xl shadow-md hover:shadow-2xl">
      <div className="max-h-28 mx-auto overflow-hidden ">
        <img width="150px" className="mx-auto " src={img} alt="" />
      </div>
      <div className="h-14 text-xl px-2">
        <h1 className="font-bold">
          {name}
          <div class="badge badge-secondary ml-2 animate__animated animate__pulse animate__infinite	infinite">NEW</div>
        </h1>
      </div>

      <div className="h-5 p-2">
        <p className="text-sm ">{description}</p>
      </div>
      <div className=" h-24 flex justify-between items-end p-2">
        <h1 className="font-bold flex ">
          <small>Per Unit:</small><p className=" ml-1"> $ {price}</p>
        </h1>
        <div>
        <button
          onClick={() => navigateToPurchaseDetail(_id)}
          className="btn btn-sm  outline-none border-0 mt-2  bg-gradient-to-r from-sky-500 to-indigo-500 text-xs hover:shadow-lg hover:shadow-sky-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>{" "}
          
        </button>
        </div>
      </div>
    </div>

    // ----------------------------------
    // <div className='shadow-lg py-5 '>
    //     <img src={img} alt="" />
    //     <div className='px-4'>
    //     <h1 className='text-xl font-bold'>{name}</h1>
    //     <p>{description}</p>
    //     <h3 className=' font-bold text-primary'>Price Unit: {price}</h3>
    //     <p><small>Minimum Order: {minimum}</small></p>
    //     <p className='text-secondary'><small>Available Unites:{quantity}</small></p>
    //     <button onClick={()=>navigateToPurchaseDetail(_id)} className='btn btn-primary outline-none border-0 mt-2'>book now</button>
    //     </div>
    // </div>
  );
};

export default Tool;
