import { useState } from "react";
import { HiOutlineUser, HiBars3BottomRight } from "react-icons/hi2";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { CgClose } from "react-icons/cg";
import Logo from "../assets/logo.png";
import Cream from "../assets/cream.png";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const toggleNav = () => setShowNav(!showNav);

  const navLinksLeft = [
    { name: "Shop All", href: "#" },
    { name: "Her Favorites", href: "#" },
  ];

  const navLinksRight = [
    { name: "HER Journal", href: "#" },
    { name: "Skin Quiz", href: "#" },
    { name: "HER Tribe", href: "#" },
    { name: "HER Story", href: "#" },
  ];

  const mobileLinks = [
    "Shop All",
    "Shop By Category",
    "Shop By Skin Concern",
    "Shop By Ingredient",
    "Value Sets",
    "Accessories",
    "HER Favorites",
  ];

  return (
    <header className="w-full fixed top-0 z-[10000] bg-white py-5 px-4 md:px-8 lg:px-12">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="block lg:hidden cursor-pointer" onClick={toggleNav}>
            <HiBars3BottomRight size={25} />
          </div>
          <div className="hidden lg:block">
            <SearchBar />
          </div>
          <img src={Cream} alt="cream" className="w-20" />
        </div>

        <img src={Logo} alt="logo" className="w-28 lg:w-52" />

        <div className="flex items-center gap-5">
          <HiOutlineUser size={25} />
          <PiShoppingCartSimpleBold size={25} />
        </div>
      </div>

      <nav className="hidden lg:flex justify-between items-center mt-4">
        <div className="flex gap-4">
          {navLinksLeft.map((link, i) => (
            <a key={i} href={link.href} className="nav_link font-semibold px-3 py-2 rounded-lg text-black">
              {link.name}
            </a>
          ))}
        </div>
        <div className="flex gap-4">
          {navLinksRight.map((link, i) => (
            <a key={i} href={link.href} className="nav_link font-semibold px-3 py-2 rounded-lg text-black">
              {link.name}
            </a>
          ))}
        </div>
      </nav>

      {showNav && (
        <div
          className="fixed inset-0 bg-black/70 z-[1000]"
          onClick={toggleNav}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-[80%] sm:w-[60%] bg-white z-[10000] pt-24 px-6 transform transition-transform duration-500 ${
          showNav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <CgClose
          onClick={toggleNav}
          className="absolute top-4 right-4 text-black w-6 h-6 sm:w-8 sm:h-8 cursor-pointer"
        />

        <ul className="flex flex-col gap-6 text-black/70 text-lg font-semibold tracking-widest">
          {mobileLinks.map((link, i) => (
            <li key={i}>
              <a onClick={toggleNav} className="block p-2" href="#">
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-6 space-y-4 w-[80%] mx-auto">
          <div className="bg-[#F1A5B3] py-2 rounded text-center font-semibold">
            HER Journal
          </div>
          <div className="bg-[#F1A5B3] py-2 rounded text-center font-semibold">
            Skin Quiz
          </div>
        </div>
      </aside>
    </header>
  );
};

export default Navbar;
