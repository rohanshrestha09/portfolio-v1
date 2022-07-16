import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [userdata, setUserdata] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { name, email, subject, message } = userdata;

  const onChange = (e) => {
    setUserdata({ ...userdata, [e.target.name]: e.target.value });
  };

  const formSubmission = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/contact", userdata);
      setUserdata({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {}
  };

  return (
    <div
      className="w-full min-h-screen md:h-screen py-6 flex flex-col justify-evenly items-center"
      id="contact"
    >
      <div className="flex items-center flex-col">
        <p className="text-2xl lg:text-3xl font-bold">Contact Me</p>
        <p className="text-sm decoration-rose-500 underline underline-offset-2 decoration-2">
          Get in touch with me
        </p>
      </div>
      <div className="h-[29rem] md:h-3/4 lg:h-[52%] flex flex-col lg:flex-row justify-between w-full">
        <div className="h-[35%] lg:w-[47%] lg:h-3/4 flex flex-col justify-evenly lg:justify-between lg:py-6">
          {[
            ["fa-user", "Name", "Rohan Shrestha"],
            ["fa-location-dot", "Address", "Siddhipur, Lalitpur"],
            ["fa-envelope", "Email", "shrestharohan00@gmail.com"],
          ].map((element, index) => (
            <div key={index} className="flex items-center h-full">
              <i className={`fa-solid ${element[0]} text-3xl h-auto w-3`}></i>
              <div className="text-base lg:text-lg leading-tight px-12">
                <p>{element[1]}</p>
                <p className="text-slate-400">{element[2]}</p>
              </div>
            </div>
          ))}
        </div>
        <form
          className="flex flex-col w-full h-3/5 lg:h-full lg:w-[47%] justify-evenly lg:justify-between lg:py-6"
          onSubmit={formSubmission}
        >
          <p className="text-lg lg:text-2xl">Message Me</p>
          <div className="grid grid-cols-2 gap-4 grid-rows-auto w-full">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={onChange}
              className="bg-[rgb(29,29,29)] h-12 w-full rounded-md px-3 focus:border-0 focus:outline-none focus:border-b-2 focus:border-rose-500"
              required
            ></input>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={onChange}
              className="bg-[rgb(29,29,29)] h-12 w-full rounded-md px-3 focus:border-0 focus:outline-none focus:border-b-2 focus:border-rose-500"
              required
            ></input>
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              value={subject}
              onChange={onChange}
              className="col-span-full w-full bg-[rgb(29,29,29)] h-12 rounded-md px-3 focus:border-0 focus:outline-none focus:border-b-2 focus:border-rose-500"
              required
            ></input>
            <textarea
              type="text"
              cols="60"
              placeholder="Message"
              name="message"
              value={message}
              onChange={onChange}
              className="resize-none col-span-full w-full bg-[rgb(29,29,29)] rounded-md px-3 py-3 focus:border-0 focus:outline-none focus:border-b-2 focus:border-rose-500"
              required
            ></textarea>
            <div className="w-40 flex items-center justify-between px-3 py-3 bg-rose-600 hover:bg-rose-500 rounded-md cursor-pointer">
              <input
                type="submit"
                value="Send Message"
                className="cursor-pointer"
              />
              <i className="fa-solid fa-location-arrow rotate-45"></i>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
