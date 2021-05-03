# Northcoders News Front End

Overall this looks great. Functionality-wise you have almost everything up and running. I've left you a checklist below to make sure that you can use to make sure you've got everything covered but the main focus at this point should be on the styling of your app.

Once you have it styled to your satisfaction then follow the [hosting instructions](https://github.com/northcoders/fe-nc-news/blob/master/netlify-deployment.md) to deploy you app to netlify.

After that you can go back and implement any additional features you would like.

Overall the react principles you've shown are solid and you are managing state and props correctly. Good work :D

## README - write your own and make sure that it:

- [ ] has a link to the deployed version
- [ ] provides general info about your app
- [ ] includes links to your back end repo
- [ ] specifies the minimum version of Node required to run locally (check your Node version, `node --version` and use the major version that you are on)
- [ ] has clear instructions on how to run your project locally (`git clone <repo-url>, cd ...`)

## UX

- [x] Basic styling added
- [x] Responsive design
- [x] Items aligned
- [x] Content legible (not too wide, obstructed, etc)
- [x] Refreshing doesn’t cause an issue on sub-pages
- [x] No errors in the console

You have a couple of warnings in the console about your button group. The button group relies on having the buttons themselves as it's children whereas your's are links. Wrap the text of your buttons in the Link instead of the whole button and this should clear it up :D

- [x] Votes / Posts / Deletions happen instantly _OR_ give user indication of loading

## Functionality

### Login

- [ ] Some indication of who is logged in

### Articles

- [x] Serves all articles / top articles
- [x] Can vote on articles

The patch request works but you don't re-render to display the correct number of votes.

- [ ] Can vote a maximum of once in either direction per page load
- [x] Votes are persistent when page is refreshed
- [x] Topic pages load only relevant articles (especially when navigating from one topic page to another)
- [x] Can sort articles by date created / comment_count / votes

As per your comments in ArticlesList you could just spread the article instead of passing them all individually. e.g. ` <ArticleCard key={article.article_id} {...article} />`

### Individual Article / Comments

- [x] Individual articles are served with comments
- [x] Can vote on comments
- [ ] Can vote a maximum of once in either direction per page load
- [x] Votes are persistent when page is refreshed
- [x] Can post new comments, which are persistent

When posting a new comment you are optimistically adding the comment but re-fetching the article. This could potentially cause a mismatch between the comment_count and the number of displayed comments. If you're going to do it optimistically just increment the comment_count instead of re-fetching the whole article.

- [x] Can only delete comments of logged in user
- [x] Deleted comments don’t re-appear on re-render/refresh

In your ArticlePage you can return null from a ternary to not render anything or use a conditional &&. e.g.

`author === 'jessjelly' && <button>...</button>`

### Additional functionality:

- [x] sort comments by date created / votes
- [ ] filter / display articles by specific user
- [ ] post new article
- [ ] delete logged in user's articles

## Error Handling

- [ ] Bad url
- [ ] Bad topic slug in url
- [ ] Bad article id in url
- [ ] Post comment: (No text in comment body / Can you post without logging in?)

## Code

- [x] Well named components
- [x] Functional components used where possible
- [x] Components reused where possible (`Articles` / `Voter`...)
- [x] Minimal state - don't hold derivable data in state
- [x] Set state correctly, using previous state where possible
- [x] Handle asynchronicity clearly (i.e. isLoading pattern)
- [x] Functions are DRY (`handleChange` for controlled components / api calls)
- [x] Use object destructuring where possible
- [x] Tidy? If not: ESLint / Prettier
- [x] `node_modules` git ignored
- [x] No `console.log`s / comments
- [x] remove unnecessary files (e.g. App.test.js)

## MAKE SURE ALL TESTS ARE STILL PASSING IN BACK END
