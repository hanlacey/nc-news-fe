import './App.css';
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import ArticleList from "./components/ArticleList"
import ArticlePage from "./components/ArticlePage"
import { Router } from "@reach/router"

function App() {

  //state - user

  return (
    <div className="App">
      <Header />
      <Navbar />
      <Router>
        <ArticleList path='/' />
        <ArticleList path='/articles/:topic' />
        <ArticlePage path='/article/:article_id' />
      </Router>
    </div>
  );
}

export default App;

//topics - navbar
//sort - article list 

