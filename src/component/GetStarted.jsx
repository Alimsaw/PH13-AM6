const GetStarted = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 text-center w-full">
        <h2 className="text-[48px] font-extrabold text-[#101727] mb-8">Get Started In 3 Steps</h2>
        <p className="text-lg text-gray-600 mb-12">Start using premium digital tools in minutes, not hours.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto w-full max-w-[1200px] justify-items-center">
          
          <div className="bg-white rounded-lg shadow-lg p-6 text-center w-full max-w-[380px] relative">
            <div className="bg-[#8E44AD] text-white rounded-full flex items-center justify-center w-9 h-9 absolute top-4 right-4">
              <span className="text-[16px] font-semibold">01</span>
            </div>
            <div>
              <img className="bg-[#efeafe] text-white rounded-full p-2 w-16 h-16 flex items-center justify-center mx-auto mb-4" src="/assets/user.png" alt="" />
            </div>
            <div className="mb-4">
              <span className="text-xl font-semibold text-[#8E44AD]">Create Account</span>
            </div>
            <p className="text-gray-600">Sign up for free in seconds. No credit card required to get started.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center w-full max-w-[380px] relative">
            <div className="bg-[#8E44AD] text-white rounded-full flex items-center justify-center w-9 h-9 absolute top-4 right-4">
              <span className="text-[16px] font-semibold">02</span>
            </div>
            <div>
              <img className="bg-[#efeafe] text-white rounded-full p-2 w-16 h-16 flex items-center justify-center mx-auto mb-4" src="/assets/package.png" alt="" />
            </div>
            <div className="mb-4">
              <span className="text-xl font-semibold text-[#8E44AD]">Choose Products</span>
            </div>
            <p className="text-gray-600">Browse our catalog and select the tools that fit your needs.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center w-full max-w-[380px] relative">
            <div className="bg-[#8E44AD] text-white rounded-full flex items-center justify-center w-9 h-9 absolute top-4 right-4">
              <span className="text-[16px] font-semibold">03</span>
            </div>
            <div>
              <img className="bg-[#efeafe] text-white rounded-full p-2 w-16 h-16 flex items-center justify-center mx-auto mb-4" src="/assets/rocket.png" alt="" />
            </div>
            <div className="mb-4">
              <span className="text-xl font-semibold text-[#8E44AD]">Start Creating</span>
            </div>
            <p className="text-gray-600">Download and start using your premium tools immediately.</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default GetStarted;