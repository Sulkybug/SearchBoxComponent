import React from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import "./Search.css";

function Search({ filterUsers }) {
  const [icon, setIcon] = useState(<FaSearch />);
  const [inputVal, setInputVal] = useState("");

  const handleChange = (e) => {
    if (e.target.value.length > 0) {
      let search = e.target.value;
      search = search[0].toUpperCase() + search.substring(1);
      setInputVal(search);
      filterUsers(search);
      setIcon(<IoClose />);
    } else {
      filterUsers("");
      setInputVal("");
      setIcon(<FaSearch />);
    }
  };

  const close = () => {
    setInputVal("");
    filterUsers("");
    setIcon(<FaSearch />);
  };

  return (
    <div className="search">
      <input type="text" value={inputVal} onChange={handleChange} />
      <p className="icon" onClick={close}>
        {icon}
      </p>
    </div>
  );
}

export default Search;
