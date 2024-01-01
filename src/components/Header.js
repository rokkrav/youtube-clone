import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SUGGESTIONS_API } from "../utils/constants";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  // console.log(searchQuery);

  useEffect(() => {
    const timer = setTimeout(() => {
      getYoutubeSuggestions();
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getYoutubeSuggestions = async () => {
    // console.log(searchQuery);
    const data = await fetch(YOUTUBE_SUGGESTIONS_API + searchQuery);
    const json = await data.json();
    // console.log(json);
    setSuggestions(json[1]);
  };

  return (
    <div className="grid grid-flow-col p-2 shadow-lg items-center">
      <div className="flex col-span-2">
        <img
          className="h-8 mt-4 cursor-pointer"
          alt="menu"
          onClick={() => dispatch(toggleMenu())}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
        />

        <a href="/">
          <img
            className="h-16"
            alt="logo"
            src="https://t3.ftcdn.net/jpg/04/03/98/64/360_F_403986499_hB7zfgOXezReA0sKkxl34RoT9TbNkbpH.jpg"
          />
        </a>
      </div>
      <div className="col-span-9 px-10">
        <input
          className="w-1/2 border border-gray-400 px-4 py-1 rounded-l-full"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        <button className="text-md border border-gray-400 px-2 py-1 rounded-r-full bg-gray-200">
          Search
        </button>

        {showSuggestions && (
          <ul className="p-2 absolute bg-white w-1/3 border border-gray-300 shadow-lg rounded-lg">
            {suggestions.map((suggestion) => (
              <li
                key={suggestion}
                className="hover:bg-gray-100 cursor-pointer px-1 pb-1"
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
        />
      </div>
    </div>
  );
};

export default Header;
