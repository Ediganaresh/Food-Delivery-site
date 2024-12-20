
import { useState } from "react";
import contactUs from "../assets/contactUs.png";


const Contact = () => {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="flex flex-row flex-wrap justify-evenly items-center my-5 mt-16 overflow-y-hidden h-[76vh]">
      <div className="flex justify-center items-center">
        <img src={contactUs} alt="Contact us" />
      </div>
      <div className="flex flex-col items-center justify-center text-xl">
        <h1>Contact us</h1>
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
          <input className="p-[10px] m-[10px] rounded-[5px] box-border shadow-[1px_2px_4px_0_rgba(0,0,0,0.08)] border border-[#c26100] min-w-[40vw]" type="text" placeholder="Name" required />
          <input className="p-[10px] m-[10px] rounded-[5px] box-border shadow-[1px_2px_4px_0_rgba(0,0,0,0.08)] border border-[#c26100] min-w-[40vw]"  type="email" placeholder="Email" required />
          <textarea className="p-[10px] m-[10px] rounded-[5px] box-border shadow-[1px_2px_4px_0_rgba(0,0,0,0.08)] border border-[#c26100] min-w-[40vw]" placeholder="Type your Message here..." required></textarea>
          <button className="px-[20px] py-[10px] m-[10px] bg-[#c26100] shadow-[1px_2px_4px_0_rgba(0,0,0,0.08)] text-lg cursor-pointer border-none rounded-[5px]" type="submit">Submit</button>
          {message && (
            <span>Thanks for contacting CHEF:2 DOOR, We will reply ASAP.</span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
