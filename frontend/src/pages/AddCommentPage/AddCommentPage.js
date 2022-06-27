import React from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'

import useAuth from "../../hooks/useAuth"
import useCustomFrom from "../../hooks/useCustomFrom"

let initialValues = {
    user: "",
    video_id: "",
    text: "",
    like: "",
    dislikes: "",
};

const AddCarPage = () => {
    const [user, token] = useAuth()
    const navigate = useNavigate()
    const [fromData, handleInputChange, handleSubmit] = useCustomFrom(initialValues)

    async function postNewComment(){
            try {
                let response = await axios.post("http://127.0.0.1:8000/api/comments/")
            } catch (error) {

            }
        }

    return (
        <div className="container">
          <form className="form" onSubmit={handleSubmit}>
            <label>
              user:{" "}
              <input
                type="text"
                name="video_id"
                value={fromData.user}
                onChange={handleInputChange}
              />
            </label>
            <label>
              video_id:{" "}
              <input
                type="text"
                name="video_id"
                value={fromData.video_id}
                onChange={handleInputChange}
              />
            </label>
            <label>
              text{" "}
              <input
                type="text"
                name="text"
                value={fromData.text}
                onChange={handleInputChange}
              />
            </label>
            <label>
              text:{" "}
              <input
                type="text"
                name="text"
                value={fromData.email}
                onChange={handleInputChange}
              />
            </label>
            <label>
              like:{" "}
              <input
                type="text"
                name="like"
                value={fromData.like}
                onChange={handleInputChange}
              />
            </label>
            <label>
              dislikes:{" "}
              <input
                type="text"
                name="dislikes"
                value={fromData.dislikes}
                onChange={handleInputChange}
              />
            </label>
            <p style={{ fontSize: "12px" }}>
              NOTE: Make this an uncommon password with characters, numbers, and
              special characters!
            </p>
            <button>Register!</button>
          </form>
        </div>
      );
};


export default AddCommentPage