const Package = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-[#101727] mb-8">Simple, Transparent Pricing</h2>
        <p className="text-lg text-gray-600 mb-12">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          
          <div className="bg-white rounded-lg shadow-lg p-6 text-center flex flex-col justify-between min-h-[450px]">
            <div>
              <div className="mb-4">
                <span className="text-4xl font-semibold text-[#101727]">Starter</span>
              </div>
              <p className="text-lg text-gray-600 mb-6">Perfect for getting started</p>
              <div className="text-3xl font-extrabold text-[#101727] mb-6">$0<span className="text-xl text-gray-500">/Month</span></div>
              <ul className="text-left mb-6 space-y-3">
                <li className="flex items-center text-gray-600"><span className="mr-3">✔</span> Access to 10 free tools</li>
                <li className="flex items-center text-gray-600"><span className="mr-3">✔</span> Basic templates</li>
                <li className="flex items-center text-gray-600"><span className="mr-3">✔</span> Community support</li>
                <li className="flex items-center text-gray-600"><span className="mr-3">✔</span> 1 project per month</li>
              </ul>
            </div>
            <button className="bg-[#422ad5] text-white px-6 py-3 rounded-full">Get Started Free</button>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg shadow-lg p-6 text-center relative flex flex-col justify-between min-h-[450px]">
            <div className="absolute top-[-13px] left-1/2 transform -translate-x-1/2 bg-[#fef3c6] text-[#BB4D00] text-sm font-semibold py-1 px-4 rounded-full">Most Popular</div>
            <div>
              <div className="mb-4">
                <span className="text-4xl font-semibold text-white">Pro</span>
              </div>
              <p className="text-lg text-gray-200 mb-6">Best for professionals</p>
              <div className="text-3xl font-extrabold text-white mb-6">$29<span className="text-xl text-gray-200">/Month</span></div>
              <ul className="text-left mb-6 space-y-3 text-gray-200">
                <li className="flex items-center"><span className="mr-3">✔</span> Access to all premium tools</li>
                <li className="flex items-center"><span className="mr-3">✔</span> Unlimited templates</li>
                <li className="flex items-center"><span className="mr-3">✔</span> Priority support</li>
                <li className="flex items-center"><span className="mr-3">✔</span> Unlimited projects</li>
                <li className="flex items-center"><span className="mr-3">✔</span> Cloud sync</li>
                <li className="flex items-center"><span className="mr-3">✔</span> Advanced analytics</li>
              </ul>
            </div>
            <button className="bg-white text-[#422ad5] px-6 py-3 rounded-full">Start Pro Trial</button>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center flex flex-col justify-between min-h-[450px]">
            <div>
              <div className="mb-4">
                <span className="text-4xl font-semibold text-[#101727]">Enterprise</span>
              </div>
              <p className="text-lg text-gray-600 mb-6">For teams and businesses</p>
              <div className="text-3xl font-extrabold text-[#101727] mb-6">$99<span className="text-xl text-gray-500">/Month</span></div>
              <ul className="text-left mb-6 space-y-3">
                <li className="flex items-center text-gray-600"><span className="mr-3">✔</span> Everything in Pro</li>
                <li className="flex items-center text-gray-600"><span className="mr-3">✔</span> Team collaboration</li>
                <li className="flex items-center text-gray-600"><span className="mr-3">✔</span> Custom integrations</li>
                <li className="flex items-center text-gray-600"><span className="mr-3">✔</span> Dedicated support</li>
                <li className="flex items-center text-gray-600"><span className="mr-3">✔</span> SLA guarantee</li>
                <li className="flex items-center text-gray-600"><span className="mr-3">✔</span> Custom branding</li>
              </ul>
            </div>
            <button className="bg-[#422ad5] text-white px-6 py-3 rounded-full">Contact Sales</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Package;