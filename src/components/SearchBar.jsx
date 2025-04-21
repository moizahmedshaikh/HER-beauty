import { useState } from "react";
import { HiMagnifyingGlass, HiMiniXMark, HiXMark } from "react-icons/hi2";

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
  };
  const handlerCloseIcon = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`flex justify-center items-center w-full transition-all duration-300 ${
        isOpen ? "absolute top-0 left-0 w-full bg-white h-40 z-50" : "w-auto"
      }`}
    >
      {isOpen ? (
        <form className="relative flex items-center justify-center w-full">
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-2 pl-5 pr-12 outline-none border-2  border-gray-400 w-full  placeholder:text-gray-500 hover:border-gray-600 transition duration-100 focus:border-gray-800"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600"
            >
              <HiMagnifyingGlass className="h-6 w-6 cursor-pointer hover:w-[26px] hover:h-[26px]" />
            </button>
          </div>
          <button onClick={handlerCloseIcon} className="ml-2 cursor-pointer">
            <HiXMark className="h-6 w-6 cursor-pointer hover:w-[25px] hover:h-[25px]" />
          </button>
        </form>
      ) : (
        <button onClick={handleSearchToggle}>
          <HiMagnifyingGlass className="h-6 w-6 " />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
