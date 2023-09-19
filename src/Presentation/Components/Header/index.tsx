import React, { useEffect, useState } from "react";
import { useDebounce } from "../../../debounce";

interface HeaderProps {
  onSearch: (searchTerm: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debouncedSearchTerm: string = useDebounce(searchTerm, 300); // Use o debounce com um atraso de 300 ms

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term: string = event.target.value;
    setSearchTerm(term);
  };

  // Use o debouncedSearchTerm para fazer a pesquisa após o atraso
  useEffect(() => {
    onSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm, onSearch]);

  return (
    <div className="w-full bg-gray-500 h-auto p-5 ">
      <div className="flex items-center justify-center flex-col">
        <img
          src="super.png"
          alt=""
          style={{ width: "200px", height: "180px" }}
        />
        <div className="w-96 bg-white h-10 flex items-center  rounded-3xl p-5">
          <input
            type="text"
            placeholder="Pesquisar heróis"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>
    </div>
  );
};
