import React, { useState } from "react";

const Signup = () => {
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");

  //error messages
  const [requireField, setRequireField] = useState("");
  const [passwordLength, setPasswordLength] = useState("");
  const [emailFormat, setEmailFormat] = useState("");

  // handle functions
  const handleName = (e) => {
    setClientName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleMobile = (e) => {
    setMobile(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  //email validation
  const emailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+(\.\w{2,3})+$/);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (!clientName || !email || !password || !mobile || !address) {
      setRequireField("All fields are required");
    } else {
      setRequireField("");
    }
    if (password.length < 6) {
      setPasswordLength("Password must have at least 6 characters");
    } else {
      setPasswordLength("");
    }
    if (!emailValidation(email)) {
      setEmailFormat("Enter a valid email");
    } else {
      setEmailFormat("");
    }
    if (clientName && email && password && mobile && address) {
      console.log(clientName, email, password, mobile, address);
      setClientName("");
      setEmail("");
      setPassword("");
      setMobile("");
      setAddress("");
    }
  };
  return (
    <div className="w-full h-screen">
      <div className="w-full h-full relative">
        <div className="h-full bg-[url(https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60)] bg-no-repeat bg-cover z-0">
          <form className="z-40 absolute top-24 left-[40%] border-none w-72 h-screen">
            <h1 className="text-3xl font-roboto font-semibold py-6 z-40">
              Signup!
            </h1>
            <input
              onChange={handleName}
              value={clientName}
              type="text"
              placeholder="Name"
              className="border-none outline-none y-2 drop-shadow-lg w-full px-2 py-2 rounded-sm"
            />
            <br />
            <input
              onChange={handleEmail}
              value={email}
              type="email"
              placeholder="email"
              className="border-none outline-none my-2 drop-shadow-lg w-full px-2 py-2 rounded-sm"
            />
            {emailFormat && (
              <p className="text-red-600 text-xs font-semibold font-poppins">
                {emailFormat}
              </p>
            )}
            <br />
            <input
              onChange={handlePassword}
              value={password}
              type="password"
              placeholder="Password"
              className="border-none outline-none my-2 drop-shadow-lg w-full px-2 py-2 rounded-sm"
            />
            {passwordLength && (
              <p className="text-red-600 text-sm font-semibold font-poppins">
                {passwordLength}
              </p>
            )}
            <br />
            <input
              onChange={handleMobile}
              value={mobile}
              type="text"
              placeholder="mobile"
              className="border-none outline-none my-2 drop-shadow-lg w-full px-2 py-2 rounded-sm"
            />
            <br />
            <input
              onChange={handleAddress}
              value={address}
              type="text"
              placeholder="Address"
              className="border-none outline-none my-2 drop-shadow-md w-full px-2 py-2 rounded-sm"
            />
            {requireField && (
              <p className="text-red-600 text-sm font-semibold font-poppins">
                {requireField}
              </p>
            )}
            <br />
            <div className="w-full flex justify-center mt-4">
              <button
                onClick={handleSignup}
                type="submit"
                className="bg-gradient-to-r from-violet-300 to-fuchsia-400 text-lg py-1 px-6 rounded-sm flex"
              >
                SignUp
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
