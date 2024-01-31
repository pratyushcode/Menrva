// import React, { useState } from 'react';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     companyName: '',
//     message: '',
//     file: null,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     setFormData({ ...formData, file: e.target.files[0] });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here (e.g., send data to server)
//     console.log(formData);
//   };

//   return (
//     // <div className="container mx-auto my-8 p-4 bg-gray-500  w-full flex flex-wrap">
//     //   <form onSubmit={handleSubmit}>
//     //     <div className="mb-4  w-1/2 ">
//     //       <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//     //         Name:
//     //       </label>
//     //       <input
//     //         type="text"
//     //         id="name"
//     //         name="name"
//     //         value={formData.name}
//     //         onChange={handleChange}
//     //         className="mt-1 p-2 w-full border rounded-md"
//     //         required
//     //       />
//     //     </div>

//     //     <div className="mb-4 w-1/2">
//     //       <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//     //         Email:
//     //       </label>
//     //       <input
//     //         type="email"
//     //         id="email"
//     //         name="email"
//     //         value={formData.email}
//     //         onChange={handleChange}
//     //         className="mt-1 p-2 w-full border rounded-md"
//     //         required
//     //       />
//     //     </div>

//     //     <div className="mb-4">
//     //       <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
//     //         Phone Number:
//     //       </label>
//     //       <input
//     //         type="tel"
//     //         id="phone"
//     //         name="phone"
//     //         value={formData.phone}
//     //         onChange={handleChange}
//     //         className="mt-1 p-2 w-full border rounded-md"
//     //         required
//     //       />
//     //     </div>

//     //     <div className="mb-4">
//     //       <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
//     //         Company Name:
//     //       </label>
//     //       <input
//     //         type="text"
//     //         id="companyName"
//     //         name="companyName"
//     //         value={formData.companyName}
//     //         onChange={handleChange}
//     //         className="mt-1 p-2 w-full border rounded-md"
//     //       />
//     //     </div>

//     //     <div className="mb-4">
//     //       <label htmlFor="message" className="block text-sm font-medium text-gray-700">
//     //         Message:
//     //       </label>
//     //       <textarea
//     //         id="message"
//     //         name="message"
//     //         value={formData.message}
//     //         onChange={handleChange}
//     //         className="mt-1 p-2 w-full border rounded-md"
//     //         rows="4"
//     //         required
//     //       ></textarea>
//     //     </div>

//     //     <div className="mb-4">
//     //       <label htmlFor="file" className="block text-sm font-medium text-gray-700">
//     //         File Attachment:
//     //       </label>
//     //       <input
//     //         type="file"
//     //         id="file"
//     //         name="file"
//     //         onChange={handleFileChange}
//     //         className="mt-1 p-2 w-full border rounded-md"
//     //       />
//     //     </div>

//     //     <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
//     //       Send
//     //     </button>
//     //   </form>
//     // </div>

//   );
// };

// export default ContactForm;

import { useState } from "react";
// import { ChevronDownIcon } from ''
// import { Switch } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

export default function Example() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="isolate bg-white px-6 py-2  lg:px-8">
      <form
        action="#"
        method="POST"
        className="mx-auto mt-2 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-xl leading-6 text-gray-900"
            >
              Name
            </label>
            <div className="mt-2.5">
              <input className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" placeholder="Name" />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-xl leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 " placeholder="Email"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="first-name"
              className="block text-xl leading-6 text-gray-900"
            >
              Phone Number
            </label>
            <div className="mt-2.5">
              <input className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" placeholder="Phone Number" />
            </div>
          </div>
          <div>
            <label
              htmlFor="first-name"
              className="block text-xl leading-6 text-gray-900"
            >
              Company Name
            </label>
            <div className="mt-2.5">
              <input className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"  placeholder="Company Name"/>
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-xl leading-6 text-gray-900"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
               
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="file"
              className="block text-xl text-gray-900"
            >
              File Attachment:
            </label>
            <input
              type="file"
              id="file"
              name="file"
              onChange={handleFileChange}
              className="mt-1 p-2 w-full border rounded-md"
              
            />
          </div>
        </div>
        <div className="mt-10 flex justify-center mb-5">
          <button
            type="submit"
            className="block w-28 h-10 rounded-md bg-white text-black border-2 border-primary text-center text-xl  shadow-sm hover:bg-primary "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
