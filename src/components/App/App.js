import React, { Component } from "react";
import "./App.css";
import { getUrls, postUrls } from "../../apiCalls";
import UrlContainer from "../UrlContainer/UrlContainer";
import UrlForm from "../UrlForm/UrlForm";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: [],
      errors: "",
    };
  }

  addNewURL = (newURL) => {
    postUrls(newURL)
    .then(data => {
      console.log("POST RESPONSE=====", data)
      this.setState({ urls: [...this.state.urls, data]})
    })
    .catch((err) => {
      console.log(err);
      this.setState({ errors: err })
    })
  }

  componentDidMount() {
    getUrls()
      .then((data) => {
        console.log("FETCH GET DATA====", data);
        this.setState({ urls: data.urls });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ errors: err });
      });
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm addNewURL={this.addNewURL} />
        </header>

        <UrlContainer urls={this.state.urls} />
      </main>
    );
  }
}

export default App;
