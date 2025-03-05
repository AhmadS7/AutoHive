import { Link } from "@remix-run/react";
    import React from "react";

    const Header: React.FC = () => {
      return (
        <header className="bg-gray-800 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-xl font-bold">
              CarInfo
            </Link>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link to="/cars" className="hover:text-gray-300">
                    Cars
                  </Link>
                </li>
                <li>
                  <Link to="/reviews" className="hover:text-gray-300">
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link to="/compare" className="hover:text-gray-300">
                    Compare
                  </Link>
                </li>
                <li>
                  <Link to="/subscribe" className="hover:text-gray-300">
                    Subscribe
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      );
    };

    export default Header;
