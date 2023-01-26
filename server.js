import express from "express";
import cors from "cors";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { graphqlHTTP } from "express-graphql";
import fs from "fs";
import { frontPage } from "./datasource.js"
import { resolvers } from "./resolvers.js"

const app = express();
const port = 3333;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


const executableSchema = makeExecutableSchema({
    typeDefs: fs.readFileSync("schema.graphql", "utf8"),
    resolvers
})

app.use("/graphql", graphqlHTTP({
    schema: executableSchema,
    context: frontPage,
    graphiql: true
}))

app.listen(port, () => {
    console.log(`hello from ${port}`)
})