import React from "react";
import { render, screen } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { Characters } from "@/components/characters";

describe("Characters Component", () => {
    it("render characters", async () => {
        const character = {
            id: 1,
            name: "Lightning Lad",
            image: {
                thumb_url:
                    "https://comicvine.gamespot.com/a/uploads/scale_avatar/6/68065/7666828-lightninglad05.jpg",
            },
        };
        const mock = new MockAdapter(axios);
        mock.onGet(`/characters/${character.id}/details`).reply(200, character);

        render(<Characters character={character} />);

        const characterName = screen.getByText(character.name);
        const characterImage = screen.getByAltText(character.name);

        expect(characterName).toBeInTheDocument();
        expect(characterImage).toBeInTheDocument();
        expect(characterImage).toHaveAttribute(
            "src",
            character.image.thumb_url
        );

        const link = screen.getByRole("link");
        expect(link).toHaveAttribute(
            "href",
            `/characters/${character.id}/details`
        );
    });
});
