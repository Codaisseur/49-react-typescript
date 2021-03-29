import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

/**
 * 
id: 21,
title: "lets test something here",
content: "STEP IN",
createdAt: "2021-03-21T21:33:42.005Z",
updatedAt: "2021-03-21T21:33:42.005Z",
author_id: 159,
tags: [ ],
post_likes: [
{
  createdAt: null,
  updatedAt: null,
  developer: null
}
]
},
 */

type PostLike = {
  createdAt: Date;
  updatedAt: Date;
  developer: Date;
};

type Post = {
  id: number;
  title: string;
  content: string;
  post_likes: PostLike[];
};

function App() {
  const [posts, setPosts] = useState<Post[]>();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://codaisseur-coders-network.herokuapp.com/posts?offset=1&limit=2`
      );

      setPosts(response.data.rows);
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      <ul>
        {posts ? (
          posts.map(post => <li key={post.id}>{post.title}</li>)
        ) : (
          <p>Loading..</p>
        )}
      </ul>
    </div>
  );
}

export default App;
