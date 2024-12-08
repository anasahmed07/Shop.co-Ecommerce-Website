"use client";
import React, { useState } from "react";

// const Contact = () => {
//   const [name, setName] = useState("");
//   const [msg, setMsg] = useState("");
//   const [email, setEmail] = useState("");
//   const [result, setResult] = React.useState("");

//   const sumbitHandler = async (event: any) => {
//     setName("");
//     setEmail("");
//     setMsg("");
//     event.preventDefault();


//     setResult("Sending....");
//     const formData = new FormData(event.target);

//     formData.append("access_key", "06617c84-b326-43c2-bf86-b41cd7efd1a0");

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData,
//     });

//     const data = await response.json();

//     if (data.success) {
//       setResult("Form Submitted Successfully");
//       event.target.reset();
//     } else {
//       console.log("Error", data);
//       setResult(data.message);
//     }
//   };

//   return (
//     <>
//       <main
//         id="contact"
//         className="h-auto w-full bg-no-repeat bg-center bg-cover flex flex-col pt-16 sm:px-0 px-2 mb-56"
//       >
//         <h1 className="txt xs:text-6xl text-5xl drop-shadow-txt uppercase w-full text-center py-5 font-bold xxs:translate-y-0 translate-y-5">
//           contact us
//         </h1>
//         <div className="h-auto w-full flex md:flex-row flex-col items-center">
//           {/* LEFT SECTION */}
//           {/* <section className="h-auto md:w-1/2 xs:w-4/5 w-full flex items-center justify-center">
//             <div className="h-auto md:w-[90%] w-full bg-black shadow-car rounded-lg text-white px-4 py-5 flex flex-col my-10 gap-2 border-[0.5px] border-red-950 ">
//               <h1 className="xs:text-4xl text-3xl capitalize font-semibold">
//                 contact details
//               </h1>
//               <p className="xs:text-lg text-sm text-white/60 font-semibold">
//                 Feel free to contact us
//               </p>
//               <h2 className="xs:text-xl xxs:text-lg text-sm w-full py-4 px-2 bg-zinc-900 rounded-xl">
//                 <b>Name:</b> Anas Ahmed
//               </h2>
//               <h2 className="xs:text-xl xxs:text-lg text-sm w-full py-4 px-2 bg-zinc-900 rounded-xl">
//                 <b>Email:</b> anas@codtecs.com
//               </h2>
//               <h2 className="xs:text-xl xxs:text-lg text-sm w-full py-4 px-2 bg-zinc-900 rounded-xl">
//                 <b>Phone:</b> +92 309 2328094
//               </h2>
//               <h2 className="xs:text-xl xxs:text-lg text-sm w-full py-4 px-2 bg-zinc-900 rounded-xl">
//                 <b>Address: </b> Karachi, Pakistan
//               </h2>
//             </div>
//           </section> */}

//           {/* RIGHT SECTION */}
//           <section className="h-auto md:w-1/2 xs:w-4/5 w-full py-10 flex items-center justify-center text-white ">
//             <div className="h-full md:w-[90%] px-0 py-[4px] w-full bg-black shadow-car flex items-center justify-center rounded-lg border-[0.5px] border-red-950 xxs:translate-y-0 -translate-y-10">
//               <form
//                 onSubmit={sumbitHandler}
//                 className="h-[98.5%] w-[98.5%] bg-black rounded-lg px-10 py-6 flex flex-col gap-4"
//               >
//                 <div className="flex flex-col gap-2">
//                   <label
//                     htmlFor="name"
//                     className="text-xl capitalize font-semibold"
//                   >
//                     name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={name}
//                     onChange={(data) => setName(data.target.value)}
//                     required
//                     className="rounded-md h-14 w-full bg-zinc-900 px-2"
//                   />
//                 </div>
//                 <div className="flex flex-col gap-2">
//                   <label
//                     htmlFor="email"
//                     className=" text-xl capitalize font-semibold"
//                   >
//                     email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={email}
//                     onChange={(data) => setEmail(data.target.value)}
//                     required
//                     className="rounded-md h-14 w-full bg-zinc-900 px-2 "
//                   />
//                 </div>
//                 <div className="flex flex-col gap-2">
//                   <label
//                     htmlFor="message"
//                     className=" text-xl capitalize font-semibold"
//                   >
//                     message
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     value={msg}
//                     onChange={(data) => setMsg(data.target.value)}
//                     required
//                     className="rounded-md sm:h-32 h-24 w-full bg-zinc-900 px-2 py-1"
//                   ></textarea>
//                 </div>
//                 <input type="hidden" name="subject" value="New Newsletter Subscrioption Request"></input>
//                 <div className="flex items-center justify-center">
//                   <button
//                     className="text-sm mt-2 h-10 w-28 rounded-md font-bold  border-2 uppercase flex gap-2 items-center justify-center overflow-hidden"
//                     type="submit"
//                   >
//                     <h3>send</h3>
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </section>

//         </div>
//       </main>
//     </>
//   );
// };

// export default Contact;
import { Send, Phone, Mail, MapPin } from 'lucide-react'

export default function ContactUs() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', { name, email, message })
    setSubmitted(true)
    // Reset form fields
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 mb-24">
        <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Get in touch</h2>
            <div className="mt-3">
              <p className="text-lg text-gray-500">
                We're here to help and answer any question you might have. We look forward to hearing from you.
              </p>
            </div>
            <div className="mt-9">
              <div className="flex">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>+1 (555) 123-4567</p>
                  <p className="mt-1">Mon-Fri 9am to 6pm EST</p>
                </div>
              </div>
              <div className="mt-6 flex">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>support@shop.co</p>
                </div>
              </div>
              <div className="mt-6 flex">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>123 Fashion Street</p>
                  <p className="mt-1">New York, NY 10001</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 md:mt-0">
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Send us a message</h2>
            {submitted ? (
              <div className="mt-6 bg-green-50 border border-green-200 rounded-md p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-green-800">Message sent successfully</h3>
                    <div className="mt-2 text-sm text-green-700">
                      <p>Thank you for your message. We'll get back to you as soon as possible.</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Send Message
                    <Send className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
  )
}