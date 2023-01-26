
export const resolvers = {

    Query: {
        news: (parent, args, ctx) => {
            return ctx;
        }
    },

    News: {
        comments: async (parent, args, ctx) => {
            return await fetch(`http://hn.algolia.com/api/v1/search?tags=comment,story_${parent.objectID}`)
                .then(res => res.json())
                .then(res => res.hits);
        }
    }


};