import BannerImage from "/assets/banner.png";

const Banner = () => {
  return (
    <div className="relative min-h-162.5 flex items-center overflow-hidden w-full">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10 w-full max-w-[1400px] mx-auto">

        <div className="space-y-4 flex flex-col items-center sm:p-6 lg:items-start">
          <div className="inline-flex items-center gap-2 bg-[#e1e7ff] border border-[#e1e7ff] text-[#662df7] text-sm font-medium px-5 py-2 rounded-full max-w-fit">
          <img src="/src/assets/Group 5.svg" alt="" />
            New: AI-Powered Tools Available
          </div>

          <h1 className="text-5xl lg:text-[72px] lg:leading-[78px] font-black tracking-tight text-[#101727]">
          Supercharge Your <br /> Digital Workflow
          </h1>

          <p className="text-lg text-[627382] max-w-lg">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore Products
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="btn btn-primary flex items-center gap-3 text-white rounded-2xl font-bold text-[16px">
              Explore Products
            </button>

            <button className="btn flex items-center gap-3 text-blue-600 rounded-2xl border border-blue-600 font-bold text-[16px"> 
              <img src="/src/assets/Play.png" alt="" />
              Watch Demo
            </button>

          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <img
              className="relative h-130 w-auto object-contain drop-shadow-2xl rounded-3xl animate-pulse"
              src={BannerImage}
              alt="AI Models Banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;