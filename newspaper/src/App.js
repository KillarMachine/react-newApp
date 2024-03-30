import "./App.css";
import NavBar from "./components/Navbar";
import News from "./components/News";
import React, { useState, useEffect } from "react";
import Simple from "./components/Simple";
function App() {
  const [on, SetOn] = useState(true);
  const [theme, SetTheme] = useState({
    color: "black",
    backgroundColor: "white",
    lightDark: "rgb(240,240,240)",
  });
  function invertor() {
    if (on) {
      SetTheme({
        color: "white",
        backgroundColor: "black",
        lightDark: "rgb(40,40,40)",
      });
      SetOn(false);
    } else {
      SetTheme({
        color: "black",
        backgroundColor: "white",
        lightDark: "rgb(240,240,240)",
      });
      SetOn(true);
    }
  }
  let btn1 = {
    color: theme.color,
    backgroundColor: theme.lightDark,
    boxShadow: `0 0 5px ${theme.color}`,
    width: "10%",
    border: "none",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  let url;
  let data;
  let key = "a936a78eb93e4c87a838780675479755";
  let [news, setNews] = useState([]);
  let [page, setPage] = useState(1);
  let [pageSize, setPageSize] = useState(9);
  let [data1, setData] = useState({});
  let [category, setCategory] = useState("general");
  let getData;
  let i = 0;
  getData = async () => {
    url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${key}&page=${page}&pageSize=${pageSize}`;
    console.log(url);
    const response = await fetch(url);
    data1 = await response.json();
    setNews(data1.articles);
  };

  useEffect(() => {
    getData();
  }, []);
  let nextPage = () => {
    setPage(page + 1);
    getData();
  };
  let previewsPage = () => {
    setPage(page - 1);
    getData();
  };
  return (
    <div className="main">
      <NavBar
        btn1="Home"
        btn2="Latest News"
        btn3="Blog"
        btn4="About Us"
        invertor={invertor}
        theme={theme}
      />
      <div
        className="just-center"
        id="bodyNews"
        style={{ backgroundColor: theme.backgroundColor }}
      >
        {news.map((element) => {
          return (
            <News
              key={element.url ? element.url : ""}
              url={element.url ? element.url : ""}
              title={element.title ? element.title : ""}
              detail={element.description ? element.description : ""}
              author={element.author ? element.author : ""}
              date={element.publishedAt ? element.publishedAt : ""}
              urlToImage={
                element.urlToImage
                  ? element.urlToImage
                  : "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
              }
              color={theme.color}
              bg={theme.lightDark}
              lightDark={theme.lightDark}
            />
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          color: theme.color,
          backgroundColor: theme.backgroundColor,
        }}
      >
        <button
          disabled={page <= 1}
          className="m-2 p-2"
          style={btn1}
          onClick={previewsPage}
        >
          &lt;&lt; Previews
        </button>
        <div style={btn1} className="my-2">
          {page}
        </div>
        <button className="m-2 p-2" style={btn1} onClick={nextPage}>
          Next &gt;&gt;
        </button>
      </div>
    </div>
  );
}

export default App;
