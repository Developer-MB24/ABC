"use client"; 

const Header = () => {
  return (
    <header className="bg-none b border-b text-white fixed w-full top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold">
          Node<span className="text-yellow-500">.</span>
        </h1>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-yellow-500">HOME</a>
          <a href="#" className="hover:text-yellow-500">PAGES</a>
          <a href="#" className="hover:text-yellow-500">BLOG</a>
          <a href="#" className="hover:text-yellow-500">PORTFOLIO</a>
          <a href="#" className="hover:text-yellow-500">SHOP</a>
          <a href="#" className="hover:text-yellow-500">ELEMENTS</a>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <button className="text-white hover:text-yellow-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16l-4-4m0 0l4-4m-4 4h16" />
            </svg>
          </button>
          <div className="relative">
            <button className="text-white hover:text-yellow-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18l-1.5 9h-15L3 3zm0 0l1.5 9m9 6h-6m0 0l1.5-9m3 9l1.5-9" />
              </svg>
            </button>
            <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs font-bold px-1.5 py-0.5 rounded-full">0</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;