import { useRef } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const emailref = useRef<HTMLInputElement>(null)
  const passwordref = useRef<HTMLInputElement>(null)
  const handleLoginSubmit = ()=>{
    const email = emailref.current?.value;
    const password = passwordref.current?.value;
    console.log({email,password});
    
    // make server call

  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#EDDCD9] px-4">
      <div className="w-full max-w-md bg-white border-2 border-[#264143] p-8 rounded-lg shadow-md">
        <h1 className="text-[#264143] font-black text-xl text-center mb-6">
          Login
        </h1>

        <div  className="space-y-4" >
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="text-sm font-medium text-[#264143] mb-1"
            >
              Name
            </label>
            <input
            required
              id="name"
              type="text"
              placeholder="Enter your full name"
              className="outline-none border-2 border-[#264143] shadow-md shadow-[#E99F4C] px-4 py-2 rounded text-sm"
              ref={emailref}
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="text-sm font-medium text-[#264143] mb-1"
            >
              Password
            </label>
            <input
            required
              id="password"
              type="password"
              placeholder="Enter your password"
              className="outline-none border-2 border-[#264143] shadow-md shadow-[#E99F4C] px-4 py-2 rounded text-sm"
              ref={passwordref}
            />
          </div>
          <button
            onClick={handleLoginSubmit}
            className="w-full bg-[#DE5499] text-white font-bold py-3 mt-4 rounded-lg shadow-md shadow-[#E99F4C] hover:opacity-90 transition"
          >
            Login
          </button>

          <p className="text-sm text-center mt-4 text-[#264143]">
            Already have an account?{" "}
            <Link to="/auth/register" className="font-bold underline">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
