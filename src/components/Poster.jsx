import React from "react";

function Poster() {
  return (
    <div className=" bg-black text-white lg:bg-black lg:text-white">
      <div class="lg:grid lg:grid-cols-2 border-y-8 border-stone-800 lg:border-y-8 lg:border-stone-800">
        <div >
          <div className=" text-4xl font-bold ml-12  lg:text-5xl lg:font-bold lg:ml-36 lg:mt-40 mt-12">Enjoy on your TV</div>
          <div className="lg:text-2xl py-5 text-lg lg:px-0 px-7 mx-2  lg:w-[80%] lg:py-5 lg:ml-36">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </div>
        </div>

        <div className=" py-1 lg:py-5">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            alt=""
          />
        </div>
      </div>
      <div class="lg:grid lg:grid-cols-2">
        <img
          className="lg:ml-32"
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
          alt=""
        />

        <div className=" py-1 lg:py-5">
          <div>
            <div className="text-3xl lg:text-5xl font-bold lg:font-bold  mt-12  lg:mx-0  mx-7 lg:mt-40 lg:w-[75%]">
              Download your shows to watch offline
            </div>
            <div className=" text-lg py-6 lg:mx-0 mx-6  lg:text-2xl lg:w-[70%] lg:py-5 ">
              Save your favourites easily and always have something to watch.
            </div>
          </div>
        </div>
      </div>
      <div class="lg:grid lg:grid-cols-2 border-t-8 border-stone-800  lg:border-t-8 lg:border-stone-800">
        <div className=" lg:ml-48">
          <div className="text-3xl mt-12 lg:mx-0 mx-4 font-bold lg:ml-0 ml-16 lg:text-5xl lg:font-bold lg:mt-40 lg:w-[75%]">
          Watch everywhere
          </div>
          <div className="lg:text-2xl text-lg lg:w-[90%] lg:py-5 py-3 lg:mx-0 mx-5">
          Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
          </div>
        </div>

        <div className="py-5">
          <img
            
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
            alt=""
          />
        </div>
      </div>
      <div class="lg:grid lg:grid-cols-2 lg:gap-7 border-y-8 border-stone-800 lg:border-y-8 lg:border-stone-800">
        <img
          className="lg:py-0 py-3 lg:ml-32"
          src="https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d"
          alt=""
        />

        <div className="lg:py-5">
          <div>
            <div className=" text-3xl font-bold lg:ml-0 ml-10 lg:text-5xl lg:font-bold lg:mt-40 lg:w-[75%]">
            Create profiles for kids
            </div>
            <div className="lg:text-2xl lg:w-[70%] text-xl  py-3  lg:px-0 px-6 lg:py-5 ">
            Send children on adventures with their favourite characters in a space made just for them—free with your membership.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Poster;
