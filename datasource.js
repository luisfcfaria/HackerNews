import fetch from "node-fetch-retry";

export const frontPage = await
    fetch("http://hn.algolia.com/api/v1/search?tags=front_page")
        .then(res => res.json())
        .then(res => res.hits);

export const comments = async (id) => await
    fetch(`http://hn.algolia.com/api/v1/search?tags=comment,story_${id}`)
        .then(res => res.json())
        .then(res => res.hits);

export const singleNew = async (id) => await
    fetch(`http://hn.algolia.com/api/v1/items/${id}`).then(res => res.json()).then(res => res);
