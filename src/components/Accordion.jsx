import React, { useState } from "react";
import "./accordion.css";
const Accordion = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveAccordion(index === activeAccordion ? null : index);
  };

  const accordionData = [
    {
      title: "What is Netflix?",
      content:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
    },
    {
      title: "How much does Netflix cost?",
      content:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 649 to ₹ 149 a month. No extra costs, no contracts.",
    },
    {
      title: "Where can I watch?",
      content:
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
    },
    {
      title: "How do I cancel?",
      content:
        "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },
    {
      title: "What can I watch on Netflix?",
      content:
        "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    },
    {
      title: "Is Netflix good for kids?",
      content:
        "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
    },
  ];

  return (
    <div className="lg:bg-black lg:text-white lg:py-5 bg-black text-white py-4">
      <div className=" text-4xl font-bold text-center lg:text-5xl lg:font-bold lg:text-center lg:py-11 py-11">
        Frequently Asked Questions
      </div>
      <div>
        {accordionData.map((item, index) => (
          <div
            key={index}
            className="accordion-item my-2 bg-neutral-800 text-white lg:py-3 py-4 lg:mx-48 mx-2 lg:px-0 px-2  cursor-pointer"
          >
            <div
              className="flex justify-between "
              onClick={() => handleAccordionClick(index)}
            >
              <div className="accordion-button  mx-2 lg:mx-8 text-xl lg:text-2xl  bg-neutral-800 text-white  h-16 py-4 lg:py-3 block 0">
                {item.title}
              </div>
              <div className="mx-5 text-5xl">{"+"}</div>
            </div>

            <div
              className={`accordion-content ${
                index === activeAccordion ? "active" : ""
              }`}
            >
              <hr />
              <p className="lg:text-2xl lg:px-8 px-2 py-5 lg:py-6 ">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className="lg:text-xl text-xl text-center lg:px-0 px-3  lg:text-center lg:mt-10 lg:py-5 py-5">
          Ready to watch? Enter your email to create or restart your membership.
        </div>
        <div className="lg:relative relative lg:mb-3  mb-3 lg:flex" data-te-input-wrapper-init="">
          <input
            type="email"
            className="peer block min-h-[auto] h-14 ml-10 w-[80%] lg:ml-[31%]  lg:w-[25%] rounded border-0 bg-slate-800 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlInputEmail"
            placeholder="Example label"
          />
          <label
            htmlFor="exampleFormControlInputEmail"
            className="pointer-events-none absolute  lg:left-3 ml-14 lg:ml-[31%]  top-2 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
          >
            Email address
          </label>
          <button className="bg-[#e50914] rounded lg:mx-2 mx-24  py-3 lg:my-0 my-3 lg:py-0 w-48 lg:w-48 text-2xl font-semibold px-4 hover:bg-[#c11119]">
                Get Started{" >"}
              </button>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
