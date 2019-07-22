import {hello} from "./query";

export const resolvers = {
    Query: {
        hello: (root, args, context) => hello(args, context)
    }
}
