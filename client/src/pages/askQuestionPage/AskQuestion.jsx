import { Box } from "@mui/material";
import React, { useState } from "react";
import "./AskQuestion.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { askQuestion } from "../../actions/question";

const AskQuestion = () => {
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionBody, setQuestionBody] = useState("");
  const [questionTags, setQuestionTags] = useState("");

  const User = useSelector((state) => state.currentUserReducer);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      askQuestion(
        {
          questionTitle,
          questionBody,
          questionTags,
          userPosted: User.result.name,
          userId: User?.result._id,
        },
        navigate
      )
    );
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setQuestionBody(questionBody + "\n");
    }
  };

  return (
    <Box
      pt={10}
      sx={{
        height: "100vh",
        backgroundColor: "#f1f2f3",
      }}
    >
      <h4 className="ask-title">Ask a public question</h4>
      <form className="ask-question-form-container" onSubmit={handleSubmit}>
        <Box className="title-container">
          <label style={{ fontWeight: "500" }}>Title</label>
          <p className="content">
            Be specific and imagine you're asking a question to another person
          </p>
          <input
            type="text"
            placeholder="e.g is there an R function for finding the index of an element in a vector"
            onChange={(e) => setQuestionTitle(e.target.value)}
            style={{ padding: "10px" }}
          />
        </Box>
        <Box className="body-container">
          <label style={{ fontWeight: "500" }}>Body</label>
          <p className="content">
            Include all the information someone would need to amswer your
            question
          </p>
          <textarea
            type="text"
            className="text-area"
            rows="7"
            onChange={(e) => setQuestionBody(e.target.value)}
            onKeyPress={handleEnter}
          />
        </Box>
        <Box className="tags-container">
          <label style={{ fontWeight: "500" }}>Tags</label>
          <p className="content">
            Add up to 5 tags to describe what your question is about
          </p>
          <input
            type="text"
            placeholder="e.g (Nodejs TypeScript Java)"
            onChange={(e) => setQuestionTags(e.target.value.split(" "))}
            style={{ padding: "10px" }}
          />
        </Box>
        <button className="ask-question-btn" style={{ width: "160px" }}>
          Review your question
        </button>
      </form>
    </Box>
  );
};

export default AskQuestion;
