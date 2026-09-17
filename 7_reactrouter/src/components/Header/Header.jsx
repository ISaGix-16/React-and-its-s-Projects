import { Link, NavLink } from "react-router";

export default function Header() {
  return (
    <header className="shadow-lg sticky z-50 top-0">
      <nav className="bg-black border-b border-gray-800 px-4 lg:px-6 py-3">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-7xl">

          {/* Wordmark Logo */}
          <Link to="/" className="flex items-center group">
            <span className="text-2xl font-extrabold tracking-tight text-white">
              aman
              <span className="text-orange-500 group-hover:text-orange-400 transition-colors duration-300">
                arya
              </span>
            </span>
          </Link>

          <div className="flex items-center lg:order-2 gap-3">
            <Link
              to="#"
              className="text-gray-300 hover:text-white border border-gray-700 hover:border-gray-500 rounded-lg text-sm px-4 py-2 transition-all duration-300"
            >
              Log in
            </Link>

            <Link
              to="#"
              className="text-black bg-orange-500 hover:bg-orange-400 font-semibold rounded-lg text-sm px-4 py-2 transition-all duration-300"
            >
              Get started
            </Link>
          </div>

          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">

              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-300 ${
                      isActive
                        ? "text-orange-500"
                        : "text-gray-300 hover:text-orange-400"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-300 ${
                      isActive
                        ? "text-orange-500"
                        : "text-gray-300 hover:text-orange-400"
                    }`
                  }
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-300 ${
                      isActive
                        ? "text-orange-500"
                        : "text-gray-300 hover:text-orange-400"
                    }`
                  }
                >
                  Contact Us
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/github"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-300 ${
                      isActive
                        ? "text-orange-500"
                        : "text-gray-300 hover:text-orange-400"
                    }`
                  }
                >
                  Github
                </NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}