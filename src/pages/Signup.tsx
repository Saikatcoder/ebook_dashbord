const SignupPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#EDDCD9] px-4">
      <div className="w-full max-w-md bg-white border-2 border-[#264143] p-8 rounded-lg shadow-md">
        <h1 className="text-[#264143] font-black text-xl text-center mb-6">SIGN UP</h1>

        <form action="" className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-medium text-[#264143] mb-1">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              className="outline-none border-2 border-[#264143] shadow-md shadow-[#E99F4C] px-4 py-2 rounded text-sm"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium text-[#264143] mb-1">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="outline-none border-2 border-[#264143] shadow-md shadow-[#E99F4C] px-4 py-2 rounded text-sm"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm font-medium text-[#264143] mb-1">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="outline-none border-2 border-[#264143] shadow-md shadow-[#E99F4C] px-4 py-2 rounded text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#DE5499] text-white font-bold py-3 mt-4 rounded-lg shadow-md shadow-[#E99F4C] hover:opacity-90 transition"
          >
            SIGN UP
          </button>

          <p className="text-sm text-center mt-4 text-[#264143]">
          Dont have an account? <a href="/login" className="font-bold underline">Login Here!</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
