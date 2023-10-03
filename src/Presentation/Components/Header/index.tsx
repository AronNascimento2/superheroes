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
  const handleremove = () => {
    setSearchTerm("");
  };
  // Use o debouncedSearchTerm para fazer a pesquisa após o atraso
  useEffect(() => {
    onSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm, onSearch]);

  return (
    <div className="w-full  h-auto p-5 ">
      <div className="flex items-center justify-center flex-col">
        <img
          src="super.png"
          alt=""
          style={{ width: "200px", height: "180px" }}
        />
        <div className="relative w-72 lg:w-96">
          <input
            className="w-full bg-white h-10 rounded-3xl p-5 pr-10 text-black focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            type="text"
            placeholder="Find your hero..."
            value={searchTerm}
            onChange={handleSearchChange}
          />

          {searchTerm && (
            <img
              onClick={handleremove}
              src="closeIcon.png"
              alt=""
              className="w-5 h-5 absolute top-1/2 right-5 transform -translate-y-1/2 cursor-pointer"
            />
          )}
        </div>
      </div>
    </div>
  );
};
