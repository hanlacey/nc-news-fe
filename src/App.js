import './App.css';
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import ArticleList from "./components/ArticleList"
import ArticlePage from "./components/ArticlePage"
import UserProfile from "./components/UserProfile"
import { Router } from "@reach/router"

function App() {


  return (
    <div className="App">
      <Header />
      <Navbar />
      <Router>
        <ArticleList path='/' />
        <ArticleList path='/articles/:topic' />
        <ArticlePage path='/article/:article_id' />
        <UserProfile path='/users/:username' />
      </Router>
    </div>
  );
}

export default App;
