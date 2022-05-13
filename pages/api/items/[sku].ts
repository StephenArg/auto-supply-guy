import type { NextApiRequest, NextApiResponse } from "next";
// import { ObjectId } from "mongodb";
import clientPromise from "../../../lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await clientPromise;
  const db = client.db("autosupplyguy");
  const { sku } = req.query;
  switch (req.method) {
    case "POST":
      // Edit or delete item
      break;
    case "GET":
      const item = await db.collection("Items").find({ SKU: sku }).toArray();
      res.json({ status: 200, item: item[0] });
      break;
  }
}
