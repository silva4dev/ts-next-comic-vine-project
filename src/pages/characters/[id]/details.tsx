import React from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";
import { DefaultLayout as Layout } from "@/layouts/default";
import { FaArrowLeft } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setCharacter, setLoading } from "@/redux/slices/charactersDetails";
import { MagnifyingGlass } from "react-loader-spinner";
import { Character } from "@/components/character";

type CharacterDetail = {
    name: string;
    gender: number;
    deck: string;
    image: { original_url: string };
    publisher: { name: string };
    description: string;
    real_name: string;
    aliases: string;
    powers: [{ name: string }];
    movies: [{ name: string }];
    origin: { name: string };
    date_added: string;
    date_last_updated: string;
};

type CharactersDetails = {
    results: CharacterDetail;
};

export default function CharactersDetails() {
    const router = useRouter();
    const { id } = router.query;
    const dispatch = useAppDispatch();
    const data = useAppSelector(
        (state) => state.charactersDetails.character
    ) as unknown as CharactersDetails;
    const isLoading = useAppSelector(
        (state) => state.charactersDetails.loading
    );

    const getCharacter = React.useCallback(async () => {
        try {
            dispatch(setLoading(true));
            const response = await axios.get(`/api/characters/${id}`);
            const data = await response.data;
            dispatch(setCharacter(data));
        } catch (error) {
            console.log(error);
            dispatch(setLoading(false));
        } finally {
            dispatch(setLoading(false));
        }
    }, [dispatch, id]);

    React.useEffect(() => {
        getCharacter();
    }, [getCharacter]);

    const character = data.results || [];

    return (
        <Layout>
            <section className="flex flex-col pl-2 pr-2">
                <div className="flex max-sm:gap-2 flex-wrap items-end max-sm:justify-center mb-6 max-lg:justify-center">
                    <h1 className="text-[40px] text-green-600 flex flex-wrap max-sm:justify-center items-end gap-14 max-sm:gap-6">
                        <Link href="/">
                            <FaArrowLeft className="border bg-green-600 mb-1 rounded-md p-3 w-14 h-12 text-white hover:filter hover:brightness-95" />
                        </Link>
                        Back to character listings
                    </h1>
                </div>

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
                    <div className="flex flex-col items-start mt-6">
                        <Image
                            loader={() => character?.image?.original_url}
                            className="rounded-t-md w-full h-[650px] max-sm:h-[500px] object-cover object-top"
                            src={character?.image?.original_url}
                            width={325}
                            height={650}
                            alt={character.name}
                        />
                        <Character character={character} />
                    </div>
                )}
            </section>
        </Layout>
    );
}
