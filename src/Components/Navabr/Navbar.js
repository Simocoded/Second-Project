
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-white p-5 fixed w-full z-20 top-0 left-0 overflow-hidden border-b border-gray-200 dark:border-gray-600">
      <nav className="flex items-center justify-between">

        <a href="/">
        <div className="flex items-center">
        <h1 className="text-blue-400 font-bold text-3xl lg:pl-16">EasyFlex</h1>
        </div>
        </a>
       

        <Link to="/wallet" className="nav-item">
        <button className="bg-[#407bff] w-24 text-white font-medium px-4 py-2 ml-5 prounded">
          Wallet
        </button>
        </Link>
      </nav>
    </div>
  );
}
export default Navbar;
