import axios from 'axios'

const request = axios.create({
    baseURL: "https://hannah-nc-news.herokuapp.com/api"
})

const buildArticlesQuery = (sort_by, topic) => {
    let query = '';
    if (topic || sort_by) {
        const topicQuery = topic ? `topic=${topic}` : '';
        const sort_byQuery = sort_by ? `sort_by=${sort_by}` : '';
        const queries = [topicQuery, sort_byQuery];

        const noEmptyQueries = queries.filter(query => query !== '');

        const joinedQueries = noEmptyQueries.join('&');
        query += `?${joinedQueries}`;
    }
    return query;
}

export const fetchArticles = (sort_by, topic) => {
    const query = buildArticlesQuery(sort_by, topic)
    return request.get(`/articles${query}`).then(({ data }) => {
        return data.articles
    })
}

export const fetchTopics = () => {
    return request.get("/topics").then(({ data }) => {
        return data.topics
    })
}

export const fetchArticlesByTopic = (topic, sort_by) => {
    return request.get(`/articles/?topic=${topic}&sort_by=${sort_by}`).then(({ data }) => {
        return data.articles
    })
}

export const fetchArticleById = (id) => {
    return request.get(`/articles/${id}`).then(({ data }) => {
        return data.article
    })
}

export const fetchArticleComments = (article_id) => {
    return request.get(`/articles/${article_id}/comments`).then(({ data }) => {
        return data.comments
    })
}

export const postCommentToArticle = (article_id, comment) => {
    return request.post(`articles/${article_id}/comments`, comment).then(({ data }) => {
        return data.posted_comment
    })
}

export const deleteComment = (comment_id) => {
    return request.delete(`/comments/${comment_id}`)
}


export const patchVotes = (id, vote, element) => {
    return request.patch(`/${element}s/${id}`, { inc_votes: vote }).then(({ data }) => {
        return data[element].votes
    })
}