import { NextApiRequest, NextApiResponse } from "next";
import * as api from "@/config/axios";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { page, offset, limit, name } = request.query;
  try {
    const data = await api.fetchCharacters(
      parseInt(page as string),
      parseInt(offset as string),
      parseInt(limit as string),
      (name as string)
    );
    const characters = data.data;
    response.status(200).json(characters);
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: "Internal Server Error" });
  }
}
