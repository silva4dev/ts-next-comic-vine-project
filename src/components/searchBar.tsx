import React from "react";
import { FaSearch } from "react-icons/fa";

type SearchBarProps = {
    searchBar: string;
    getAllCharacters: (name: string) => void;
    setSearchBar: (name: string) => void;
};

export function SearchBar({
    searchBar,
    getAllCharacters,
    setSearchBar,
}: SearchBarProps) {
    return (
        <div className="relative mb-20">
            <input
                type="text"
                className="text-xl placeholder:text-gray-400 text-green-700 w-full h-16 p-4 absolute rounded-md focus:outline-green-500"
                value={searchBar}
                onChange={(e) => setSearchBar(e.target.value)}
                onKeyDown={(e) => {
                    if (e.code === "Enter") {
                        getAllCharacters(searchBar);
                    }
                }}
                placeholder="Pesquise por um personagem ..."
            />
            <FaSearch
                onClick={() => getAllCharacters(searchBar)}
                className="hover:cursor-pointer text-white bg-green-600 rounded-r-md p-5 w-16 absolute right-0 align-middle h-16"
            />
        </div>
    );
}
