import type { NextApiHandler } from "next";

const person: NextApiHandler = (req, res) => {
  res.status(200).json({ person: "im a guy" });
};

export default person;
