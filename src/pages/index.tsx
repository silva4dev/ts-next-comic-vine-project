import React from "react";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { DefaultLayout as Layout } from "@/layouts/default";
import { MagnifyingGlass } from "react-loader-spinner";
import { SearchBar } from "@/components/searchBar";
import { Card } from "@/components/card";
import { Pagination } from "@/components/pagination";
import {
    setCharacters,
    setCurrentPage,
    setLoading,
} from "@/redux/slices/characters";

type Character = {
    id: number;
    name: string;
    image: {
        thumb_url: string;
    };
};

type Characters = {
    number_of_total_results: number;
    results: Character[];
};

export default function Index() {
    const dispatch = useAppDispatch();
    const currentPage = useAppSelector((state) => state.characters.currentPage);
    const data = useAppSelector(
        (state) => state.characters.characters
    ) as unknown as Characters;
    const isLoading = useAppSelector((state) => state.characters.loading);
    const [searchBar, setSearchBar] = React.useState("");
    const [searchQueryName, setSearchQueryName] = React.useState("");

    const CHARACTERS_PER_PAGE = 50;

    const getAllCharacters = React.useCallback(
        async (name = searchQueryName) => {
            try {
                dispatch(setLoading(true));
                const offset = (currentPage - 1) * CHARACTERS_PER_PAGE;
                const limit = CHARACTERS_PER_PAGE;
                const page = currentPage;
                const url = `/api/characters?offset=${offset}&limit=${limit}&page=${page}&name=${name}`;
                const response = await axios.get(url);
                const data = response.data;
                dispatch(setCharacters(data));
            } catch (error) {
                console.log(error);
                dispatch(setLoading(false));
            } finally {
                dispatch(setLoading(false));
            }
        },
        [currentPage, dispatch, searchQueryName]
    );

    React.useEffect(() => {
        getAllCharacters();
    }, [getAllCharacters]);

    const totalPages = Math.ceil(
        data.number_of_total_results / CHARACTERS_PER_PAGE
    );
    const characters = data.results || [];
    const startRange = (currentPage - 1) * CHARACTERS_PER_PAGE + 1;
    const endRange = Math.min(
        currentPage * CHARACTERS_PER_PAGE,
        data.number_of_total_results
    );

    const handlePageChange = (page: number) => {
        dispatch(setCurrentPage(page));
        setSearchQueryName(searchBar);
    };

    const goToFirstPage = () => {
        handlePageChange(1);
    };

    const goToLastPage = () => {
        handlePageChange(totalPages);
    };

    const goToPreviousPage = () => {
        const prevPage = Math.max(currentPage - 1, 1);
        handlePageChange(prevPage);
    };

    const goToNextPage = () => {
        const nextPage = Math.min(currentPage + 1, totalPages);
        handlePageChange(nextPage);
    };

    const getPageRange = () => {
        const rangeSize = 4;
        const totalPagesInRange = Math.min(rangeSize, totalPages);
        const middlePage = Math.floor(rangeSize / 2) + 1;

        if (currentPage <= middlePage) {
            return Array.from({ length: totalPagesInRange }, (_, i) => i + 1);
        }

        if (currentPage >= totalPages - middlePage + 1) {
            return Array.from(
                { length: totalPagesInRange },
                (_, i) => totalPages - totalPagesInRange + i + 1
            );
        }

        const rangeStart = currentPage - middlePage + 1;
        return Array.from(
            { length: totalPagesInRange },
            (_, i) => rangeStart + i
        );
    };

    return (
        <Layout>
            <section className="flex flex-col pl-2 pr-2 ">
                <div className="flex max-sm:gap-2 flex-wrap items-end max-sm:justify-center mb-6 max-lg:justify-center">
                    <h1 className="text-[40px] text-green-600">
                        Listagem dos personagens
                    </h1>
                </div>

                {!isLoading && (
                    <SearchBar
                        searchBar={searchBar}
                        getAllCharacters={getAllCharacters}
                        setSearchBar={setSearchBar}
                    />
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
                    <div className="flex justify-center flex-wrap mt-5 gap-5">
                        {characters.map((char: Character) => (
                            <Card key={char.id} char={char} />
                        ))}
                    </div>
                )}

                {!isLoading && (
                    <Pagination
                        currentPage={currentPage}
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
                        Mostrando {startRange} - {endRange} de{" "}
                        {data?.number_of_total_results} resultados
                    </p>
                )}
            </section>
        </Layout>
    );
}
