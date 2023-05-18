import { NextApiRequest, NextApiResponse } from "next";
import * as api from "@/services/api";

export default async function handler(
    request: NextApiRequest,
    response: NextApiResponse
) {
    try {
        const { id } = request.query;
        const data = await api.fetchCharacter(parseInt(id as string));
        const character = data.data;
        response.status(200).json(character);
    } catch (error) {
        console.log(error);
        response.status(500).json({ error: "Internal Server Error" });
    }
}
