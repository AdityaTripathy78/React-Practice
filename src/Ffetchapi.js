import axios from "axios";
import React, { useEffect, useState } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

function Ffetchapi() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  const fetchData = async () => {
    const { data } = await axios.get(API_URL);
    setPosts(data);
  };

  useEffect(() => {
    fetchData()
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        setError("Data Error");
      });

    // return () => {};
  }, []);

  return (
    <div>
      {posts.length > 0
        ? posts.map((post) => <div key={post.id}>{post.title}</div>)
        : null}
      {error ? <div>{error}</div> : null}
    </div>
  );
}

export default Ffetchapi;
