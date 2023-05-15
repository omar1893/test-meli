import React, { useState } from "react";
import "./Searchbar.scss";
import LogoMl from "../../assets/Logo_ML.png";
import SearchIcon from "../../assets/ic_Search.png";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const submitSearch = () => {
    if (searchValue !== "" && searchValue.length > 2) {
      navigate(`/items?search=${searchValue}`);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {    
    if (event.key === "Enter") {
      submitSearch();
    }
  };

  return (
    <header className="header">
      <img className="logo" src={LogoMl} alt="Logo Mercado Libre" />
      <div className="header-searchInput">
        <input
          type="text"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          onKeyDown={(event) => handleKeyPress(event)}
          placeholder="Nunca dejes de buscar"
        />
        <button type="button" onClick={submitSearch}>
          <img src={SearchIcon} alt="Search Icon" />
        </button>
      </div>
    </header>
  );
};

export default Searchbar;