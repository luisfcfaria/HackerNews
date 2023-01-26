import fetch from "node-fetch-retry";

export const frontPage = await
    fetch("http://hn.algolia.com/api/v1/search?tags=front_page")
        .then(res => res.json())
        .then(res => res.hits);

export const comments = await
    fetch("http://hn.algolia.com/api/v1/search?tags=comment,story_1")
        .then(res => res.json())
        .then(res => res.hits);