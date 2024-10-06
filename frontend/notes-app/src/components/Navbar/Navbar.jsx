import React, { useState } from "react";
import ProfileInfo from "../Cards/ProfileInfo";
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = ({userInfo, onSearchNote, handleClearSearch}) => {
  const [searchQurey, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.clear()
    navigate("/login");
  };

  const handleSearch =()=>{
    if(searchQurey){
      onSearchNote(searchQurey)
    }
  };


  const onClearSearch =()=>{
    setSearchQuery("");
    handleClearSearch();
  }

  return (
    <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
      <h2 className="text-xl font-medium text-black py-2">My Notes</h2>

      <SearchBar
        value={searchQurey}
        onChange={({ target }) => {
          setSearchQuery(target.value);
        }}

        handleSearch={handleSearch}
        onClearSearch={onClearSearch}
      />

      <ProfileInfo userInfo = {userInfo} onLogout={onLogout} />
    </div>
  );
};

export default Navbar;
