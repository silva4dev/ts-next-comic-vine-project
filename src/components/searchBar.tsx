import React from "react";
import { FaSearch } from "react-icons/fa";
import { SearchBarProps } from "@/types";

export function SearchBar({
    searchBar,
    setSearchBar,
    setSearchQueryName,
    setSearchQueryPage,
}: SearchBarProps) {
    return (
        <div className="relative mb-20">
            <input
                type="text"
                className="text-xl placeholder:text-gray-400 text-green-700 w-full h-16 p-4 absolute rounded-md focus:outline focus:outline-green-500"
                value={searchBar}
                onChange={(e) => setSearchBar(e.target.value)}
                onKeyDown={(e) => {
                    if (e.code === "Enter") {
                        setSearchQueryName(() => {
                            setSearchQueryPage(() => 1);
                            return searchBar;
                        });
                    }
                }}
                placeholder="Search for a character..."
            />
            <FaSearch
                onClick={() => {
                    setSearchQueryName(() => {
                        setSearchQueryPage(() => 1);
                        return searchBar;
                    });
                }}
                className="hover:cursor-pointer text-white bg-green-600 rounded-r-md p-5 w-16 absolute right-0 align-middle h-16"
            />
        </div>
    );
}
