"use client";
import React from "react";
import { useForm } from "react-hook-form";

const User = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <form
        className="w-1/2 mx-auto p-6 border-2 shadow-lg my-10 rounded-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4 flex gap-6">
          <div className="w-1/2">
            <label className="text-md font-bold" htmlFor="firstName">
              First Name :
            </label>
            <input
              className="w-full border-2 py-1 px-2 rounded-lg "
              placeholder="Enter your FirstName ..."
              type="text"
              name="firstName"
              {...register("firstName", { required: true, minLength:4, maxLength : 7 })}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">
                {errors.firstName.type === "required" && <span>This field is required!</span>}
                {errors.firstName.type === "minLength" && <span>Minimum 4 character </span> }
                {errors.firstName.type === "maxLength" && <span>Maximum 7 character </span> }
              </p>
            )}
          </div>
          <div className="w-1/2">
            <label className="text-md font-bold" htmlFor="lastName">
              Last Name :
            </label>
            <input
              className="w-full border-2 py-1 px-2 rounded-lg "
              placeholder="Enter your lastName ..."
              type="text"
              name="lastName"
              {...register("lastName", { required: true, pattern: /^[A-Za-z]+$/i })}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">
                {errors.lastName.type === "required" && <span>This field is required!</span>}
                {errors.lastName.type === "pattern" && <span>Please use camelCase character</span>}
              </p>
            )}
          </div>
        </div>

        <div className="mb-4 flex gap-6">
          <div className="w-1/2">
            <label className="text-md font-bold" htmlFor="email">
              Email :
            </label>
            <input
              className="w-full border-2 py-1 px-2 rounded-lg "
              placeholder="Enter your Email ..."
              type="email"
              name="email"
              {...register("email")}
            />
          </div>
          <div className="w-1/2">
            <label className="text-md font-bold" htmlFor="password">
              Password :
            </label>
            <input
              className="w-full border-2 py-1 px-2 rounded-lg "
              placeholder="Enter your Password ..."
              type="password"
              name="password"
              {...register("password")}
            />
          </div>
        </div>

        <div className="flex justify-center items-center gap-6 mb-4">
        <div className="w-1/2">
            <label className="text-md font-bold" htmlFor="age">Age : </label>
            <input
              className="w-full border-2 py-1 px-2 rounded-lg "
              placeholder="Enter your Age ..."
              type="number"
              name="age"
              {...register("age", {min : 18, max : 99})}
            />
            {errors.age && (
                <p className="text-red-500 text-sm">
                    {errors.age.type === "min" && <span>Minimua Age is 18</span>}
                    {errors.age.type === "max" && <span>Maximum Age is 99</span>}
                </p>
            )}
        </div>
        <div className="w-1/2">
            <label className="text-md font-bold" htmlFor="gender">Gender : </label>
            <select className="w-full border-2 py-1 px-2 rounded-lg " {...register("gender")}>
              <option value="female">female</option>
              <option value="male">male</option>
              <option value="other">other</option>
            </select>
        </div>
        </div>

        <div className="flex justify-center items-center">
          <button className="btn btn-primary btn-sm" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default User;
