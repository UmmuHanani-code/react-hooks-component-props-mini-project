import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  const posts = [
    {id: 1, title:"The WET Codebase", date:"February 12, 2025", preview:"Come waste your time with me."},
    {id: 2, title:"Goodbye, clean code", date:"February 12, 2025", preview:"Let clean code guide you. Then let it go."},
    {id: 3, title:"My Decade in Review", date:"February 12, 2025", preview:"Apersonal reflection."}
  ]
  return (
    <div className="App">
      <Header name ="Overreacted" />
      <About image="" about={
        <>
        Personal blog by <a href="https://example.com">Nuria Mohamed.</a>
      <br />
      I explain with words and code.</>
      } />

      <ArticleList posts={posts} />

    </div>
  );
}

export default App;
