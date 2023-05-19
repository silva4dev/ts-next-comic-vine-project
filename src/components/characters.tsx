import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CharactersProps } from "@/types";

export function Characters({ character }: CharactersProps) {
    return (
        <Link key={character.id} href={`/characters/${character.id}/details`}>
            <div className="bg-white flex flex-col items-center gap-3 rounded-md mb-5 w-[304px] h-max p-3 hover:border-2 border-green-500 hover:scale-110">
                <Image
                    className="rounded-t-md h-60 w-72 object-cover object-top"
                    loader={() => character?.image?.thumb_url}
                    src={character?.image?.thumb_url}
                    unoptimized
                    width={288}
                    height={240}
                    alt={character?.name}
                />
                <h2 className="text-2xl text-center text-green-500">
                    {character?.name}
                </h2>
            </div>
        </Link>
    );
}
