import type { NextApiRequest, NextApiResponse } from "next";
// import { ObjectId } from "mongodb";
import clientPromise from "../../../lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await clientPromise;
  const db = client.db("autosupplyguy");
  switch (req.method) {
    case "POST":
      // Add or remove multiple items
      // let bodyObject = JSON.parse(req.body);
      // let newPost = await db.collection("Items").insertOne(bodyObject);
      // res.json(newPost.ops[0]);
      break;
    case "GET":
      const items = await db.collection("Items").find({}).toArray();

      // @ts-ignore
      res.json({ status: 200, items: items });
      break;
  }
}

// Routing ideas: categories will have a string with the route(s) labeled as category1 > category2 > category3
// routes will look like /store/supplies(mapped from different string)/products/precleaners
// items split their categorie strings up by ' > ' and this will determine if they fit in the group
// indivdual item routes will be made per SKU/id/function edited name/predetermined value in db
