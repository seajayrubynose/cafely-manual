// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

// const hello: NextApiHandler = (req, res) => {
//   res.status(200).json({ hello: "its me" });
// };

// export default hello;

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json({ name: "John Doe" });
};

// export default (req: any, res: any) => {
//   res.status(200).json({ name: "CJ Rubinos" });
// };
