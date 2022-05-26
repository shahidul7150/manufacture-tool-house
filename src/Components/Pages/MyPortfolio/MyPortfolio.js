import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading';
const MyPortfolio = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user);

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="hero  bg-base-200">
        <div className="hero-content  flex-col  lg:flex-row-reverse">
          <div>
            <div className="bg-slate-400">
              <img
                width="200px"
                src="https://i.ibb.co/2yvjbhB/IMG-20210616-160740-removebg-preview-1.png"
                className=" mx-auto max-w-sm rounded-lg "
              />
            </div>
            <h1 className="text-xl font-bold text-center">Shahidul Islam</h1>
          </div>
          <div className="bg-base-100  p-20">
            <h1 className="text-3xl font-bold text-start">
              I'm a full-stack web-developer.
            </h1>
            <p className="py-6">
              Hi, I'm Shahidul Islam is a full-stack web-developer.I already
              completed more than 10 project using React for frontend
              development ,Node.js library express.js using for develop backend
              side.Mongodb-atlas use for store my projects data.
            </p>

            <div className="  ">
              <h2 className="text-2xl">
                <span>Contact</span> 
              </h2>
              <div className="bg-lime-100 p-5 ">
                <h2 className="font-bold">
                  Email:{' '}
                  <span className="font-normal">
                    shahidulislam1474@gmail.com
                  </span>
                </h2>
                <h2 className="font-bold">
                  Phone: <span className="font-normal">8801750432592</span>
                </h2>
              </div>
            </div>
            <div className=" ">
              <h2 className="text-2xl">
                <span> Education</span>
              </h2>
              <div className="bg-lime-100 p-5 ">
                <h2 className="font-bold">
                Graduation Degree:{' '}
                  <span className="font-normal">
                  Bachelor of Business Administration (BBA)
                  </span>
                </h2>
                <h2 className="font-bold">
                  Institute: <span className="font-normal">Government BM College, Barishal</span>
                </h2>
              </div>


              <div className="bg-primary p-8">
              
              <p className="text-xl font-bold text-white">My Recent Project:</p>
              <hr className="w-20 mb-3" />
              <p className="text-white">Github Link: https://github.com/shahidul7150/doctors-portals-server</p>
              <p className="text-white">Github Link: https://github.com/shahidul7150/Tour-Travel-Agency-Website</p>
              </div>
            </div>
            <div className="pt-12 text-start">
              <h1 className="text-2xl font-bold my-3">My Skills</h1>
              <div className="flex flex-wrap gap-4">
                <div>
                  <img
                    width="60px"
                    src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png"
                    alt=""
                  />
                  <h2 className="text-center">HTML</h2>
                </div>
                <div>
                  <img
                    width="60px"
                    src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"
                    alt=""
                  />
                  <h2 className="text-center">CSS</h2>
                </div>
                <div>
                  <img
                    width="60px"
                    src="https://icon-library.com/images/bootstrap-icon-png/bootstrap-icon-png-28.jpg"
                    alt=""
                  />
                  <h2 className="text-center">Bootstrap-5</h2>
                </div>
                <div>
                  <img
                    width="60px"
                    src="https://vasterra.com/blog/wp-content/uploads/2021/08/Tailwind-img.png"
                    alt=""
                  />
                  <h2 className="text-center">Tailwind CSS</h2>
                </div>
                <div>
                  <img
                    width="60px"
                    src="https://ionicframework.com/docs/icons/logo-react-icon.png"
                    alt=""
                  />
                  <h2 className="text-center">React js</h2>
                </div>
                <div>
                  <img
                    width="60px"
                    src="https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/node-512.png"
                    alt=""
                  />
                  <h2 className="text-center">Node js</h2>
                </div>
                <div>
                  <img
                    width="60px"
                    src="https://assets.website-files.com/61ca3f775a79ec5f87fcf937/6202fcdee5ee8636a145a41b_1234.png"
                    alt=""
                  />
                  <h2 className="text-center">Express js</h2>
                </div>
                <div>
                  <img
                    width="60px"
                    src="https://riohilmy.github.io/img/icon/mongodb-logo.png"
                    alt=""
                  />
                  <h2 className="text-center">Mongodb</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
