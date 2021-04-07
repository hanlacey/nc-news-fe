import axios from 'axios'

const request = axios.create({
    baseURL: "https://hannah-nc-news.herokuapp.com/api"
})

export const fetchArticles = () => {
    return request.get("/articles").then(({ data }) => {
        return data.articles
    })
}

export const fetchTopics = () => {
    return request.get("/topics").then(({ data }) => {
        return data.topics
    })
}

export const fetchArticlesByTopic = (topic) => {
    return request.get(`/articles/?topic=${topic}`).then(({ data }) => {
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