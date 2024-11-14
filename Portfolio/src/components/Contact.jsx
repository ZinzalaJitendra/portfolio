import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async(data) => {
    const userInfo ={
      name:data.name,
      email:data.email,
      message:data.message,
    }
    try {
      await axios.post("https://getform.io/f/apjmvnza", userInfo)
      toast.success('Successfully Sent!')
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong")
    }
  }
  // const onSubmit = (data) => console.log(data)

  return (
    <>
      <div name="Contact" className="max-w-screen-2xl container mx-auto px-4 md:px-16 mt-16">
        <h1 className="text-4xl font-bold mb-5">Contact Me</h1>
        <span>Please fill out the form to contact me</span>
        <div className="flex flex-col justify-center items-center mt-5">
          <form 
          onSubmit={handleSubmit(onSubmit)}
          action="https://getform.io/f/apjmvnza" method="POST"
           className="bg-slate-200 w-96 px-8 py-6 rounded-xl">
            <h2 className="mb-4 text-xl font-semibold">Send Your Message</h2>
            <div className="flex flex-col mb-4">
              <label className="text-gray-700 block">Full Name</label>
              <input
                {...register("name", { required: true })}
                type="text"
                className="shadow border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                placeholder="Name"
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="text-gray-700 block">Email Address</label>
              <input
                {...register("email", { required: true })}
                type="text"
                className="shadow border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                placeholder="abcd123@gmail.com"
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="text-gray-700 block">Message</label>
              <textarea
                {...register("message", { required: true })}
                name="message"
                id="message"
                className="shadow border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Hello, How are you?"
              ></textarea>
              {errors.message && <span>This field is required</span>}
            </div>
            <button type="submit" className="px-5 py-2 text-[18px] bg-blue-700 hover:bg-blue-900 rounded-xl text-white cursor-pointer">
                Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
