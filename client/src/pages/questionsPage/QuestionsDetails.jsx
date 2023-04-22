import React, { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import copy from "copy-to-clipboard";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";
import DisplayAnswer from "./DisplayAnswer";
import {
  postAnswer,
  deleteQuestion,
  voteQuestion,
} from "../../actions/question";
import { Box, Typography } from "@mui/material";
import "./QuestionsDetails.css";

const QuestionsDetails = () => {
  const { id } = useParams();
  const User = useSelector((state) => state.currentUserReducer);
  const questionList = useSelector((state) => state.questionsReducer);

  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const url = "http://localhost:3000";

  const [Answer, setAnswer] = useState("");

  const handlePostAns = (e, answerLength) => {
    e.preventDefault();
    if (User === null) {
      alert("Login or Signup to answer a question");
      Navigate("/Auth/login");
    } else {
      if (Answer === "") {
        alert("Enter an answer before submitting");
      } else {
        dispatch(
          postAnswer({
            id,
            noOfAnswers: answerLength + 1,
            answerBody: Answer,
            userAnswered: User.result.name,
            userId: User.result._id,
          })
        );
      }
    }
  };

  const handleShare = () => {
    copy(url + location.pathname);
    alert("Copied url : " + url + location.pathname);
  };

  const handleDelete = () => {
    dispatch(deleteQuestion(id, Navigate));
  };

  const handleUpVote = () => {
    dispatch(voteQuestion(id, "upVote", User.result._id));
  };

  const handleDownVote = () => {
    dispatch(voteQuestion(id, "downVote", User.result._id));
  };

  return (
    <Box className="question-details-page" style={{ marginTop: "70px" }}>
      {questionList.data === null ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {questionList.data
            .filter((question) => question._id === id)
            .map((question) => (
              <Box key={question._id}>
                <section className="question-details-container">
                  <Typography variant="h4" sx={{ fontSize: "1.9rem" }}>
                    {question.questionTitle}
                  </Typography>
                  <Box className="question-details-container-2">
                    <Box className="question-votes">
                      <ArrowDropUpIcon
                        onClick={handleUpVote}
                        style={{
                          fontSize: "3rem",
                          cursor: "pointer",
                          opacity: ".5",
                        }}
                      />
                      <p style={{ fontSize: "1.5rem", fontWeight: "500" }}>
                        {question.upVote.length - question.downVote.length}
                      </p>
                      <ArrowDropDownIcon
                        onClick={handleDownVote}
                        style={{
                          fontSize: "3rem",
                          cursor: "pointer",
                          opacity: ".5",
                        }}
                      />
                    </Box>
                    <Box className="question-details-body-tags">
                      <Box>
                        <p
                          style={{ fontSize: "1.1rem", fontWeight: "600" }}
                          className="question-body"
                        >
                          {question.questionBody}
                        </p>
                      </Box>
                      <Box style={{ display: "flex" }}>
                        {question.questionTags.map((tag) => (
                          <p to="/Tags" key={tag} className="ans-tags">
                            {" "}
                            {tag}
                          </p>
                        ))}
                      </Box>
                      <Box className="question-action-user">
                        <button
                          type="button"
                          onClick={handleShare}
                          className="votes-btn"
                        >
                          Share
                        </button>
                        {User?.result?._id === question?.userId && (
                          <button
                            type="button"
                            onClick={handleDelete}
                            className="votes-btn"
                          >
                            Delete
                          </button>
                        )}
                      </Box>
                    </Box>
                    <Box className="question-user-details">
                      <p style={{ fontSize: ".8rem", fontWeight: "500" }}>
                        asked {moment(question.askedOn).fromNow()}
                      </p>
                      <Link
                        to={`/Users/${question.userId}`}
                        className="user-link"
                      >
                        <p
                          style={{ fontSize: ".9rem" }}
                          className="user-avatar"
                        >
                          {question.userPosted.charAt(0).toUpperCase()}
                        </p>
                        <Box style={{ fontSize: "1rem", fontWeight: "500" }}>
                          {question.userPosted}
                        </Box>
                      </Link>
                    </Box>
                  </Box>
                </section>
                {question.noOfAnswers !== 0 && (
                  <section>
                    <Typography variant="h6" sx={{ marginLeft: "8px" }}>
                      {question.noOfAnswers} Answers
                    </Typography>
                    <DisplayAnswer key={question._id} question={question} />
                  </section>
                )}
                <section className="post-ans-container">
                  <Typography variant="h6">Your Answer</Typography>
                  <form
                    className="answer-form"
                    onSubmit={(e) => {
                      handlePostAns(e, question.answer.length);
                    }}
                  >
                    <textarea
                      className="answer-area"
                      onChange={(e) => setAnswer(e.target.value)}
                      name=""
                      id=""
                      // cols="30"
                      rows="12"
                    ></textarea>
                    <br />
                    <input
                      type="submit"
                      className="post-ans-btn"
                      value="Post Your Answer"
                    />
                  </form>
                  <p style={{ fontSize: ".9rem" }}>
                    Browse other Question tagges
                    {question.questionTags.map((tag) => (
                      <Link to="/Tags" key={tag} className="ans-tags">
                        {" "}
                        {tag}
                      </Link>
                    ))}{" "}
                    or
                    <Link
                      style={{ color: "rgb(15, 158, 230)" }}
                      to="/AskQuestion"
                    >
                      {" "}
                      ask your own question
                    </Link>
                  </p>
                </section>
              </Box>
            ))}
        </>
      )}
    </Box>
  );
};

export default QuestionsDetails;
