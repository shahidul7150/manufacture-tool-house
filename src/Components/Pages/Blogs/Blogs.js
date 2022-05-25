import React from 'react';

const Blogs = () => {
  return (
    <div class="px-12">
      <p class="uppercase pl-12 text-2xl font-bold w-3/5 p-5 bg-green-600  mt-5 text-white">
        Welcome to our blog portal
      </p>

      <div class=" mt-5  ">
        <img
          class="w-3/5  "
          src="https://res.cloudinary.com/proxify-io/image/upload/c_fill,f_auto,q_auto,w_1440,h_600/v1/cms/images/articles/0S2oGmon8xrcPwq6heTRyh3DayYVh6e2ftTjGuDA.jpg"
          alt=""
        />

        <h3 class="text-2xl py-3">
          Q:1 How will you improve the performance of a React Application?
        </h3>
        <p>
          React application performance improve is essential for an
          application.Make an application performance powerful you need to take
          some actions.
          <ul>
            <li>◉ Create simple folder structure </li>
            <li>◉ Use Dry to make code more powerful</li>
            <li>◉ stope write same code again so you can make custom hooks</li>
            <li>◉ Avoid unnecessary re-render code</li>
            <li>◉ Use pure function</li>
          </ul>
          So in this way you can improve your react code performance.
        </p>
      </div>
      <div class=" mt-5  ">
        <img
          class="w-3/5  "
          src="https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/690102/retina_1708x683_image_0-1967657e3078be54d78ccc4d57eae106-f763757d0bd43e58ff9976083b458547.png"
          alt=""
        />

        <h3 class="text-2xl py-3">
          Q:2 What are the different ways to manage a state in a React
          application?
        </h3>
        <p>
          React application State management has different ways for manage rect
          application state.
          <ul>
            <li>◉ Create React Context api </li>
            <li>◉ Use React query system</li>
            <li>◉ Redux is most useful for big application state management</li>
            <li>◉ useReducer use for react state management</li>
          </ul>
        </p>
      </div>
      <div class=" mt-5  ">
        <img
          class="w-3/5  "
          src="https://cdn-media-1.freecodecamp.org/images/1*cR8HEE-toHzj9rXVXbJ_ng.png"
          alt=""
        />

        <h3 class="text-2xl py-3">
          Q:3 How does prototypical inheritance work?{' '}
        </h3>
        <p>
          Prototypical inheritance refers to the perform to access object
          properties form another object.
          <br /> A prototype is working object instance.
          <br /> Prototypical inheritance is based on concatenative
          inheritance.Prototypical inheritance uses the concept for prototype
          chaining.When constructor
          <br /> function create an object it does not create it based on the
          constructor's prototype.
        </p>
      </div>
      <div class=" mt-5  ">
        <img
          class="w-3/5  "
          src="https://paper-attachments.dropbox.com/s_EAEEAE9063B0CA7CBC6574F36123E82B36B6C1EC3724A86DA7C0B4C67C2DD652_1645380076460_explaining+useeffect+local+storage.jpg"
          alt=""
        />

        <h3 class="text-2xl py-3">
          Q:4 Why you do not set the state directly in React. For example, if
          you have const [products, setProducts] = useState([]). Why you do not
          set products = [...] instead, you use the setProducts{' '}
        </h3>
        <p>
          If you want to set a product you do not set you new update product on
          products = [...]. const [products, setProducts] = useState([]) is mean
          product store now on products but you need to open it when you need
          product set another palace setProduct help you to show your data.
        </p>
      </div>
      <div class=" mt-5  ">
        <img
          class="w-3/5  "
          src="https://ucarecdn.com/39483ff6-4269-400d-bca7-1dd059c31c02/"
          alt=""
        />

        <h3 class="text-2xl py-3">
          Q:5 What is a unit test? Why should write unit tests?{' '}
        </h3>
        <p>
          Unit test
          <ul>
            <li>◉ unit testing reduce the level of bugs in production code .</li>
            <li>◉ Save your development time.</li>
            <li>◉ For the unit testing your debugging time reduce.</li>
            <li>◉ Unit test allow you to make a big changes to code quickly.</li>
            <li>◉ Unit testing is essential for organizational approaches.</li>
            <li>◉ Unit test is important for better design.</li>
            <li>◉ A good unit test are a form of documentation.</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default Blogs;
