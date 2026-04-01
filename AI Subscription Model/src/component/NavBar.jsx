const NavBar = ({ carts }) => {
  return (
    <div className="w-full border-b border-[#f2f2f2] sticky top-0 z-50 bg-white">
      <div className="navbar w-full max-w-[1400px] mx-auto">
        
        <div className="navbar-start">
          <div className="flex items-center gap-1 font-bold text-xl">
            <img className="w-[180px] h-[40px] object-contain" src="/logo.png" />
          </div>
        </div>

        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal gap-5 px-1 text-lg">
            <li><a>Products</a></li>
            <li><a>Features</a></li>
            <li><a>Pricing</a></li>
            <li><a>Testimonials</a></li>
            <li><a>FAQ</a></li>
          </ul>
        </div>

        <div className="navbar-end gap-5 items-center">
          
          {/* Cart Icon */}
          <div className="relative">
            <img className="w-6 h-6" src="/src/assets/shopping-cart.svg" />

            {carts.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {carts.length}
              </span>
            )}
          </div>

          <p className="text-black font-semibold">Login</p>
          <a className="btn bg-[#7a22f8] rounded-full text-white">
            Get Started
          </a>

        </div>
      </div>
    </div>
  );
};

export default NavBar;