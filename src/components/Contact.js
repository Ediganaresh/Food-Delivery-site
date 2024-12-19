// import React from 'react';

// const ContactUs = () => {
//   return (
//     <div className="bg-white p-8 rounded-md shadow-md">
//       <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
//       <p className="text-lg text-gray-800 mb-6">
//         Have a question or feedback? We'd love to hear from you! Feel free to reach out to us using any of the methods below:
//       </p>
//       <div className="mb-6">
//         <h2 className="text-xl font-bold mb-2">Email:</h2>
//         <p className="text-lg text-gray-800">info@chef2door.com</p>
//       </div>
//       <div className="mb-6">
//         <h2 className="text-xl font-bold mb-2">Phone:</h2>
//         <p className="text-lg text-gray-800">1-800-CHEF-2-DOOR</p>
//       </div>
//       <div className="mb-6">
//         <h2 className="text-xl font-bold mb-2">Address:</h2>
//         <p className="text-lg text-gray-800">
//           Chef 2 Door Headquarters <br />
//           123 Delicious Ave <br />
//           Foodie City, FC 12345
//         </p>
//       </div>
//       <p className="text-lg text-gray-800">
//         We're here to assist you with any inquiries or concerns. Don't hesitate to get in touch with us! Thank you for choosing Chef 2 Door.
//       </p>
//     </div>
//   );
// };

// export default ContactUs;

import { useState } from "react";
// import contactUs from "../assets/contactUs.png";


const Contact = () => {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="flex flex-row flex-wrap justify-evenly items-center my-5 mt-16 overflow-y-hidden h-[76vh]">
      <div className="flex justify-center items-center">
        {/* <img src={contactUs} alt="Contact us" /> */}
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
