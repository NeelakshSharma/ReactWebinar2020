import React, { Component } from "react";
import axios from "axios";
import Carousel from "react-elastic-carousel";

export default class NewsFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }
  componentDidMount() {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?country=in&apiKey=ab8ff5b4d2934b179d9ad40ab0e2bd27"
      )
      .then((res) => {
        this.setState({
          articles: res.data.articles,
        });
      })
      .catch((err) => console.log(err));
  }
  render() {
    if (this.state.articles.length === 0) {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          Loading...
        </div>
      );
    }
    return (
      <div>
        <Carousel>
          {this.state.articles.map((news) => (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                marginTop: 50,
              }}
            >
              <img src={news.urlToImage} alt="not found" />
              <h3 style={{ wordBreak: "break-all" }}>{news.title}</h3>
              <p style={{ wordBreak: "break-all" }}>{news.description}</p>
              <a href={news.url} />
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
}
