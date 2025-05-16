import React, { useEffect, useState } from "react";
import Image from "../assets/auth.png";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/reducer/authSlice";
import { postWithoutToken } from "../api/fetch";
import { endPoint } from "../utils/endpoint";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  let navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const data = {
        email,
        password,
      };
      const resp = await postWithoutToken(data, endPoint.login);
      dispatch(login(resp));

      if (resp.status) {
        navigate("/profile");
      } else {
        alert(resp.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(success, token, "login");
  useEffect(() => {
    if (token) {
      navigate("/profile");
    }
    return () => {};
  }, []);

  return (
    <div className="flex justify-center items-center bg-slate-100 min-h-screen">
      <div className="flex w-[90%] max-w-5xl shadow-lg rounded-2xl overflow-hidden bg-white ">
        {/* Left Side Image */}
        <div className="w-1/2">
          <img
            src={Image}
            alt="register-pics"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right Side Form */}
        <div className="w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-center mb-6 text-green-600">
            Sign In
          </h1>
          <p className="text-center font-medium">
            Sign in to continue shopping
          </p>

          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <label className="text-gray-700 font-medium mb-1">Email*</label>
              <p className="font-medium text-xs text-green-500">
                Use Phone Instead
              </p>
            </div>

            <input
              type="email"
              name="email"
              value={email}
              onChange={(text) => setEmail(text.target.value)}
              placeholder="example@email.com"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Password*</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(text) => setPassword(text.target.value)}
              placeholder="••••••••"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div className="flex justify-between items-center">
            <div>
              <input type="checkbox" name="Remember me" id="" />{" "}
              <label htmlFor="">Remember me</label>
            </div>
            <p className="font-medium text-xs text-green-500">
              Forgot Password
            </p>
          </div>

          <button
            onClick={handleLogin}
            className="w-full  bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded shadow-md transition duration-300"
          >
            Sign In
          </button>

          <p className="mt-6 text-sm text-center text-gray-600">
            Don’t have an account?{" "}
            <span className="text-green-600 font-semibold cursor-pointer hover:underline">
              <Link to="/register">Sign Up</Link>
            </span>
          </p>

          <p className="text-center font-medium my-5">
            For quick demo login click below
          </p>

          <div className="flex justify-start gap-3 flex-wrap">
            <button
              type="submit"
              className="w-[45%] rounded-md bg-orange-500 hover:bg-green-600 text-white font-semibold py-2 rounded shadow-md transition duration-300"
            >
              Admin
            </button>

            <button
              type="submit"
              className="w-[45%] rounded-md bg-green-700 hover:bg-green-600 text-white font-semibold py-2 rounded shadow-md transition duration-300"
            >
              Customer
            </button>

            <button
              type="submit"
              className="w-[45%] rounded-md bg-blue-500 hover:bg-green-600 text-white font-semibold py-2 rounded shadow-md transition duration-300"
            >
              Manager
            </button>

            <button
              type="submit"
              className="w-[45%] rounded-md bg-violet-500 hover:bg-green-600 text-white font-semibold py-2 rounded shadow-md transition duration-300"
            >
              POS Operator
            </button>

            <button
              type="submit"
              className="w-[45%] rounded-md bg-pink-500 hover:bg-green-600 text-white font-semibold py-2 rounded shadow-md transition duration-300"
            >
              Delivery Boy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
