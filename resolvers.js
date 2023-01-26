
export const resolvers = {

    Query: {
        news: (parent, args, ctx) => {
            return ctx.frontPage;
        },

        newsById: (_, args, ctx) => {
            return ctx.singleNew(args.objectID);
        }

    },

    News: {
        comments: async (parent, args, ctx) => {
            return await ctx.comments(parent.objectID)
        }
    }
};