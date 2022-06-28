//SearchBar
import SearchBar from "../../components/SearchBar/SearchBar";
import "./styles.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { InvalidTokenError } from "jwt-decode";

const SearchPage = () => {

useEffect(() => {
    const fetchSearchBar = async () => {
        try {
            let response = await axios.get("http://127.0.0.1:8000/api/comments/", {
            headers: {
                Authorization: "Bearer" + token,
            },
        });
        setSearchBar(response.data);
    }   catch (error) {
        console.log(error.response.data);
    }
};
fetchSearchBar();
}, [token]);
    return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>

      <iframe id="ytplayer" type="text/html" width="640" height="360"
    src="https://www.youtube.com/embed/M7lc1UVf-VE"
    frameborder="0"></iframe>

    {console.log('searchResults in render:', searchResults)}
      {comments &&
        comments.map((comment) => (
          <p key={comment.id}>
            {comment.year} {comment.model} {comment.make}
          </p>
        ))}
    </div>
  );
};

export default SearchBar;