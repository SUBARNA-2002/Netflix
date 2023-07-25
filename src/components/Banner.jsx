import React from "react";
import bg_img from "./assets/bg-img.jpg";
function Banner() {
  return (
    <>
      <div
        className="  lg:h-screen "
        style={{
          backgroundImage: `url(${bg_img})`,
        }}
      >
        <div className="flex lg:flex mx-4 py-3 justify-between lg:mx-44 lg:py-4 lg:justify-between">
          <div>
            <img
              className=" h-9 lg:h-12"
              src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
              alt="netflix-logo"
            />
          </div>
          <div className=" py-1 lg:py-2  space-x-3 lg:space-x-6">
            <select className="px-2 py-1 rounded bg-neutral-700 text-white">
              <option value={1}>English</option>
              <option value={2}>Hindi</option>
            </select>
            <button class="rounded lg:rounded px-3 lg:py-1 lg:px-3 py-1 text-white lg:text-white bg-[#e50914] hover:bg-[#c11119] font-semibold ">
              Sign in
            </button>
          </div>
        </div>
        <center>
          <div className="lg:text-white text-white  py-16 lg:py-0  lg:my-52">
            <div className=" text-3xl font-bold lg:text-5xl lg:font-bold lg:px-0 px-2">
              Unlimited movies, TV shows and more
            </div>
            <div className="text-xl  my-2 lg:text-2xl lg:my-5 lg:font-medium">
              Watch anywhere. Cancel anytime.
            </div>
            <div className=" text-xl lg:text-xl lg:font-medium lg:px-0 px-2  ">
              Ready to watch? Enter your email to create or restart your
              membership.
            </div>
            <div 
              className="relative mb-3 my-7 lg:relative lg:mb-3 lg:flex lg:my-5  "
              data-te-input-wrapper-init=""
            >
              <input
                type="email"
                className="peer block min-h-[auto] h-14 lg:ml-[31%] lg:w-[25%] w-[80%] rounded border-0 bg-black opacity-70 lg:opacity-80 px-3  leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlInputEmail"
                placeholder="Example label"
              />
              <label
                htmlFor="exampleFormControlInputEmail"
                className="pointer-events-none absolute left-3 ml-12 lg:ml-[31%] top-2 lg:top-2 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
              >
                Email address
              </label>
              <button className="bg-[#e50914] rounded lg:mx-2 py-3 lg:my-0 my-3 lg:py-0 w-48 lg:w-48 text-2xl font-semibold px-4 hover:bg-[#c11119]">
                Get Started{" >"}
              </button>
            </div>
          </div>
        </center>
      </div>
    </>
  );
}

export default Banner;
