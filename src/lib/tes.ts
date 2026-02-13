import { ObjectId } from "mongodb";
import client from "./mongodb";

export async function getCompanyByName(name: string) {
    const db = client.db("company");
    return db.collection("profiles").findOne({ name });
}

export async function getTopicsByCompany(companyId: ObjectId) {
    const db = client.db("blog");
    const result = await db
        .collection("posts")
        .aggregate([
            {
                $match: {
                    companyId,
                    status: "published",
                },
            },
            {
                $group: {
                    _id: "$topic",
                },
            },
        ])
        .toArray();

    return result.map((item) => item._id);
}

export async function getLatestArticlesByCompany(companyId: ObjectId) {
    const db = client.db("blog");
    return db
        .collection("posts")
        .find({
            companyId,
            status: "published",
        })
        .sort({ createdAt: -1 })
        .limit(5)
        .toArray();
}
