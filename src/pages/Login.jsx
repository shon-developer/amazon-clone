import React from "react";

const Login = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-[79vh] relative">
        <div className="h-full bg-[url(https://images.unsplash.com/photo-1685594496584-23198309c37a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60)] bg-no-repeat bg-cover z-[-1]">
          <form className="z-40 absolute top-40 left-[40%] border-none w-72">
            <div className="w-full h-full flex justify-center items-center">
              <h1 className=" text-3xl font-roboto font-semibold py-6 text-white">
                Login!
              </h1>
            </div>
            <input
              type="email"
              placeholder="email"
              className="border-none outline-none my-2 drop-shadow-md w-full px-2 py-2 rounded-sm"
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              className="border-none outline-none my-2 drop-shadow-md w-full px-2 py-2 rounded-sm"
            />
            <br />
            <div className="w-full flex justify-center mt-4">
              <button
                type="submit"
                className="bg-gradient-to-r from-violet-300 to-fuchsia-400 text-lg px-6 py-1 rounded-sm flx"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
