import React from "react";
import image from "../../../assets/code.jpg";
const MyPortfolio = () => {
  return (
    <div className="bg-base-200  pb-12">
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content lg:justify-between flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/6nWMMrN/home-desktop.png"
            class="max-w-sm "
          />
          <div>
            <h2 className="text-lg tracking-wider font-light">Hey there !</h2>
            <h1 class="text-5xl font-bold">I'm Shahidul Islam</h1>
            <h3 className="text-2xl tracking-widest ">
              Junior MERN Stack Developer
            </h3>
          </div>
        </div>
      </div>

      <div className="">
        <img
          width="30%"
          className="mx-auto rounded-full "
          style={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          src="https://i.ibb.co/bRKzZP0/IMG-depositphotos-bgremover-1.png"
          alt=""
        />
      </div>
      <h1 className="text-3xl text-center py-2 font-bold">Shahidul Islam</h1>
      <p className="w-3/5 mx-auto bg-white p-5 rounded-xl shadow-lg">
        I’m a positive and enthusiastic web developer. who has build-up a
        diverse range of skills, qualities and attributes that graduate I will
        perform highly in this role. I have mass working experience with a team
        and single role. I give my best effort in my work sincerely. I would
        like to challenge web development projects that require eminent creative
        and technical capability and the ability to ensure all work is optimized
        across a wide range of platforms. I always like to participate in
        challenging web development work and web programming technology because
        I would like to learn more new ideas and technology so that I can
        discover myself as a wide-level developer.
      </p>

      <div className="mt-12 ">
        <h2 className="text-2xl font-bold text-center py-3">
          My Skills
        </h2>
        <div className="grid lg:grid-rows-4 lg:grid-cols-4 lg:w-4/6 mx-auto justify-center items-center self-center gap-5">
         
        <div className="flex items-center bg-white p-3 rounded-2xl">
                  <img
                    width="60px"
                    src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png"
                    alt=""
                  />
                  <h2 className="px-3">HTML</h2>
                </div>
                <div    className="flex items-center bg-white p-3 rounded-2xl">
                  <img
                    width="60px"
                    src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"
                    alt=""
                  />
                  <h2 className="px-3">CSS</h2>
                </div>
                <div   className="flex items-center bg-white p-3 rounded-2xl">
                  <img
                    width="60px"
                    src="https://icon-library.com/images/bootstrap-icon-png/bootstrap-icon-png-28.jpg"
                    alt=""
                  />
                  <h2 className="px-3">Bootstrap-5</h2>
                </div>
                <div  className="flex items-center bg-white p-3 rounded-2xl">
                  <img
                    width="60px"
                    src="https://vasterra.com/blog/wp-content/uploads/2021/08/Tailwind-img.png"
                    alt=""
                  />
                  <h2 className="px-3">Tailwind CSS</h2>
                </div>
                <div className="flex items-center bg-white p-3 rounded-2xl">
                  <img
                    width="60px"
                    src="https://ionicframework.com/docs/icons/logo-react-icon.png"
                    alt=""
                  />
                  <h2 className="px-3">React js</h2>
                </div>
                <div className="flex items-center bg-white p-3 rounded-2xl">
                  <img
                    width="60px"
                    src="https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/node-512.png"
                    alt=""
                  />
                  <h2 className="px-3">Node js</h2>
                </div>
                <div className="flex items-center bg-white p-3 rounded-2xl">
                  <img
                    width="60px"
                    src="https://assets.website-files.com/61ca3f775a79ec5f87fcf937/6202fcdee5ee8636a145a41b_1234.png"
                    alt=""
                  />
                  <h2 className="px-3">Express js</h2>
                </div>
                <div className="flex items-center bg-white p-3 rounded-2xl">
                  <img
                    width="60px"
                    src="https://riohilmy.github.io/img/icon/mongodb-logo.png"
                    alt=""
                  />
                  <h2 className="px-3">Mongodb</h2>
                </div>


        </div>
      </div>
    </div>
  );
};
export default MyPortfolio;
