import React from "react";
import axios from "axios";

const [user, token] = useAuth();
const [comments, setComments] = useState([]);

useEffect(() => {
 const fetchComments = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/comments/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setComments(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchComments();
 }, [token]);
 return (
    <div className="container">
        <h1>Page {user.username}!</h1>
        {comments &&
         comments.map((comment) => (
                <p key={comment.id}>
                    {comment.year} {comment.model} {comment.make}
                </p>
         ))}
    </div>
 );

export default Page;