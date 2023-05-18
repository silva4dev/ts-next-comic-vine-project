import React from "react";
import moment from "moment";

type CharacterProps = {
    character: {
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
};

export function Character({ character }: CharacterProps) {
    return (
        <div className="text-[22px] flex flex-col gap-6 break-words bg-white rounded-b-md h-max w-full p-8 overflow-hidden">
            <p>
                <strong className="mr-2">Name:</strong>
                {character.name ? character.name : "None"}
            </p>
            <p>
                <strong className="mr-2">Real Name:</strong>
                {character.real_name ? character.real_name : "None"}
            </p>
            <p>
                <strong className="mr-2">Gender:</strong>
                {character.gender
                    ? character.gender == 1
                        ? "Male"
                        : "Female"
                    : "None"}
            </p>
            <p>
                <strong className="mr-2">Origin:</strong>
                {character.origin ? character.origin.name : "None"}
            </p>
            <p>
                <strong className="mr-2">Aliases:</strong>
                {character.aliases
                    ? character.aliases.split(" ").join(", ")
                    : "None"}
            </p>
            <p>
                <strong className="mr-2">Powers:</strong>
                {character?.powers?.length > 0
                    ? character.powers.map((power) => power.name).join(", ")
                    : "None"}
            </p>
            <p>
                <strong className="mr-2">Date Added:</strong>
                {character.date_added
                    ? moment(character.date_added).format("MM-DD-YYYY")
                    : "None"}
            </p>
            <p>
                <strong className="mr-2">Date Last Updated:</strong>
                {character.date_last_updated
                    ? moment(character.date_last_updated).format("MM-DD-YYYY")
                    : "None"}
            </p>
            <p>
                <strong className="mr-2">Publisher Name:</strong>
                {character.publisher ? character.publisher.name : "None"}
            </p>
            <p>
                <strong className="mr-2">Movies:</strong>
                {character?.movies?.length > 0
                    ? character.movies.map((movie) => movie.name).join(", ")
                    : "None"}
            </p>
            <p>
                <strong className="mr-2">Resume:</strong>
                {character.deck ? character.deck : "None"}
            </p>
            <div
                className={
                    character.description
                        ? "flex flex-col justify-center gap-2"
                        : "flex items-center"
                }
            >
                <strong className="mr-2">Description:</strong>
                {character.description ? (
                    <div
                        dangerouslySetInnerHTML={{
                            __html: character.description,
                        }}
                    ></div>
                ) : (
                    <p>None</p>
                )}
            </div>
        </div>
    );
}
