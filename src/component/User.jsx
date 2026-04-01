const User = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-blue-500 py-12 w-full">
      <div className="container mx-auto px-6 w-full max-w-[1000px]">
        <div className="flex flex-col md:flex-row justify-between items-center text-white space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-extrabold">50K+<br /><span className="text-lg font-normal">Active Users</span></h2>
          </div>
          <div className="border-l border-white h-8 mx-4"></div>
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-extrabold">200+<br /><span className="text-lg font-normal">Premium Tools</span></h2>
          </div>
          <div className="border-l border-white h-8 mx-4"></div>
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-extrabold">4.9<br /><span className="text-lg font-normal">Rating</span></h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;