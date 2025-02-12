import { MoveRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import ticzLogo from "../assets/ticzLogo.png"

const Navbar = () => {
  return (
    <nav className="JejuMyeongjo p-3 flex justify-between items-center w-[90vw] border border-[#197686] rounded-2xl mx-auto my-4 bg-[#05252C]/40">
      {/* Logo */}
      <img src={ticzLogo} alt="ticzLogo" />

      {/* Nav Items - Hidden on small screens */}
      <ul className="hidden md:flex gap-6 text-[#B3B3B3] text-base">
        {["Events", "My Tickets", "About Project"].map((item, index) => (
          <li key={index}>
            <NavLink
              to={`/${item.toLowerCase().replace(" ", "-")}`}
              className={({ isActive }) =>
                `transition-colors duration-200 hover:text-white ${
                  isActive ? "text-white font-semibold" : ""
                }`
              }
            >
              {item}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* My Tickets Button */}
      <button className="p-2 bg-white border border-[#197686] flex justify-center items-center gap-1 rounded-xl w-36 text-black shadow-md transition-all hover:bg-[#197686] hover:text-white active:scale-95 cursor-pointer font-light">
        MY TICKETS <MoveRight size={20} />
      </button>
    </nav>
  );
};

export default Navbar;
