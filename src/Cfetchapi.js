import axios from "axios";
import React, { Component } from "react";

class Cfetchapi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      error: "",
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ error: "Data Error" });
      });
  }

  render() {
    const { posts, error } = this.state;
    return (
      <div>
        API FETCH
        {posts.length
          ? posts.map((post) => <div key={post.id}>{post.title}</div>)
          : null}
        {error ? <div>{error}</div> : null}
      </div>
    );
  }
}

export default Cfetchapi;
