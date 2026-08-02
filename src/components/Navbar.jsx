function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl">
            🏥
          </div>

          <div>
            <h1 className="text-2xl font-bold text-blue-700">
              SmartQueue AI
            </h1>

            <p className="text-gray-500 text-sm">
              AI Powered Queue Management
            </p>
          </div>
        </div>

        <div className="flex gap-8 text-gray-700 font-medium">

          <a href="#" className="hover:text-blue-600">
            Dashboard
          </a>

          <a href="#" className="hover:text-blue-600">
            Analytics
          </a>

          <a href="#" className="hover:text-blue-600">
            Hospitals
          </a>

          <a href="#" className="hover:text-blue-600">
            About
          </a>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;