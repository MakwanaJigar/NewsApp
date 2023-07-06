import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  // console.log("hello thisfunction is working !!");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  // static defaultProps = {  
  //   country: "in",

  //   category: "general",
  // };
  // static propTypes = {
  //   country: PropTypes.string,
  //   pageSize: PropTypes.number,
  //   category: PropTypes.string,
  // };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // console.log("hello thisfunction is working !!");
  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let mynews = await data.json();
    props.setProgress(60);
    setArticles(mynews.articles);
    setTotalResults(mynews.totalResults);
    setLoading(false);
    // console.log(mynews);
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apikey}&page=${
      page + 1
    }&pagesize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let mynews = await data.json();
    setArticles(articles.concat(mynews.articles));
    setTotalResults(mynews.totalResults);
    // console.log(mynews);
    // console.log("hello im news api");
  };

  return (
    <>
      <h1
        className="text-light text-center"
        style={{
          height: "50px",
          marginTop: "90px",
        }}
      >
        <b>
          NewsMonkey's - Top :-"
          {capitalizeFirstLetter(props.category)} Headlines "
        </b>
      </h1>
      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row mt-5">
            {articles.map((element) => {
              console.log("this map function is running or not!!");
              return (
                <div className="col-md-4 p-3" key={element.url}>
                  <NewsItems
                    title={element.title ? element.title : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 20)
                        : ""
                    }
                    author={element.author}
                    date={element.publishedAt}
                    imageUrl={
                      !element.urlToImage
                        ? "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        : element.urlToImage
                    }
                    newsUrl={element.url}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "in",
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
