import React from "react";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { DefaultLayout as Layout } from "@/layouts/default";
import { MagnifyingGlass } from "react-loader-spinner";
import { SearchBar } from "@/components/searchBar";
import { Characters } from "@/components/characters";
import { Pagination } from "@/components/pagination";
import { setCharacters, setLoading } from "@/redux/slices/characters";

type Character = {
    id: number;
    name: string;
    image: { thumb_url: string };
};

type Characters = {
    number_of_total_results: number;
    results: Character[];
};

export default function Index() {
    const dispatch = useAppDispatch();
    const data = useAppSelector(
        (state) => state.characters.characters
    ) as unknown as Characters;
    const isLoading = useAppSelector((state) => state.characters.loading);
    const [searchBar, setSearchBar] = React.useState("");
    const [searchQueryName, setSearchQueryName] = React.useState("");
    const [searchQueryLimit, setSearchQueryLimit] = React.useState(25);
    const [searchQueryPage, setSearchQueryPage] = React.useState(1);

    const getAllCharacters = React.useCallback(
        async (
            name = searchQueryName,
            limit = searchQueryLimit,
            page = searchQueryPage,
            offset = (searchQueryPage - 1) * searchQueryLimit
        ) => {
            try {
                dispatch(setLoading(true));
                const response = await axios.get(
                    `/api/characters?offset=${offset}&limit=${limit}&page=${page}&name=${name}`
                );
                const data = await response.data;
                dispatch(setCharacters(data));
            } catch (error) {
                console.log(error);
                dispatch(setLoading(false));
            } finally {
                dispatch(setLoading(false));
            }
        },
        [searchQueryPage, dispatch, searchQueryName, searchQueryLimit]
    );

    React.useEffect(() => {
        getAllCharacters();
    }, [getAllCharacters]);

    const totalPages = Math.ceil(
        data.number_of_total_results / searchQueryLimit
    );
    const characters = data.results || [];
    const startRange = (searchQueryPage - 1) * searchQueryLimit + 1;
    const endRange = Math.min(
        searchQueryPage * searchQueryLimit,
        data.number_of_total_results
    );

    const handlePageChange = (page: number) => {
        setSearchQueryPage(page);
        setSearchQueryName(searchBar);
    };

    const goToFirstPage = () => {
        handlePageChange(1);
    };

    const goToLastPage = () => {
        handlePageChange(totalPages);
    };

    const goToPreviousPage = () => {
        const prevPage = Math.max(searchQueryPage - 1, 1);
        handlePageChange(prevPage);
    };

    const goToNextPage = () => {
        const nextPage = Math.min(searchQueryPage + 1, totalPages);
        handlePageChange(nextPage);
    };

    const getPageRange = () => {
        const rangeSize = 5;
        const totalPagesInRange = Math.min(rangeSize, totalPages);
        const middlePage = Math.floor(rangeSize / 2) + 1;

        if (searchQueryPage <= middlePage) {
            return Array.from({ length: totalPagesInRange }, (_, i) => i + 1);
        }

        if (searchQueryPage >= totalPages - middlePage + 1) {
            return Array.from(
                { length: totalPagesInRange },
                (_, i) => totalPages - totalPagesInRange + i + 1
            );
        }

        const rangeStart = searchQueryPage - middlePage + 1;
        return Array.from(
            { length: totalPagesInRange },
            (_, i) => rangeStart + i
        );
    };

    return (
        <Layout>
            <section className="flex flex-col pl-2 pr-2">
                <div className="flex max-sm:gap-2 flex-wrap items-end max-sm:justify-center mb-6 max-lg:justify-center">
                    <h1 className="text-[40px] text-green-600">
                        List of characters
                    </h1>
                </div>

                {!isLoading && (
                    <SearchBar
                        searchBar={searchBar}
                        setSearchBar={setSearchBar}
                        setSearchQueryName={setSearchQueryName}
                        setSearchQueryPage={setSearchQueryPage}
                    />
                )}

                {!isLoading && (
                    <div className="mt-4 mb-4 justify-end flex items-center gap-4">
                        <label
                            className="text-[22px] text-green-600"
                            htmlFor="searchQueryLimit"
                        >
                            Results per page
                        </label>
                        <select
                            className="h-10 bg-white text-[18px] rounded-md w-20 p-2 focus:outline focus:outline-green-500"
                            id="searchQueryLimit"
                            value={searchQueryLimit}
                            onChange={(e) => {
                                setSearchQueryLimit(() => {
                                    setSearchQueryName(() => searchBar);
                                    return +e.target.value;
                                });
                            }}
                        >
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="75">75</option>
                            <option value="100">100</option>
                        </select>
                    </div>
                )}

                {isLoading ? (
                    <div className="flex mt-5 justify-center items-center">
                        <MagnifyingGlass
                            height="250"
                            width="250"
                            glassColor="#c0efff"
                            color="#2fd165"
                        />
                    </div>
                ) : (
                    <div className="flex justify-center flex-wrap mt-5 gap-4">
                        {characters.map((character: Character) => (
                            <Characters
                                key={character.id}
                                character={character}
                            />
                        ))}
                    </div>
                )}

                {!isLoading && (
                    <Pagination
                        currentPage={searchQueryPage}
                        totalPages={totalPages}
                        goToFirstPage={goToFirstPage}
                        goToPreviousPage={goToPreviousPage}
                        getPageRange={getPageRange}
                        handlePageChange={handlePageChange}
                        goToNextPage={goToNextPage}
                        goToLastPage={goToLastPage}
                    />
                )}

                {!isLoading && (
                    <p className="text-center text-xl mt-5 text-green-700">
                        Showing {startRange} - {endRange} out of{" "}
                        {data?.number_of_total_results} results
                    </p>
                )}
            </section>
        </Layout>
    );
}
