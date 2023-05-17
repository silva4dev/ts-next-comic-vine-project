import React from "react";
import Link from "next/link";
import Image from "next/image";

type CardProps = {
    char: {
        id: number;
        name: string;
        image: {
            thumb_url: string;
        };
    };
};

export function Card({ char }: CardProps) {
    return (
        <Link key={char.id} href="#">
            <div className="bg-white flex flex-col items-center gap-3 rounded-md mb-5 w-60 h-max p-4 hover:border-2 border-green-500 hover:scale-110">
                <Image
                    className="rounded-t-md h-60 w-60 object-cover object-top"
                    loader={() => char?.image?.thumb_url}
                    src={char?.image?.thumb_url}
                    width={240}
                    height={240}
                    alt={char?.name}
                />
                <h2 className="text-2xl text-center text-green-500">
                    {char?.name}
                </h2>
            </div>
        </Link>
    );
}
