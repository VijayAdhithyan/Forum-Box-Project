import { Box, Typography } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./HomeMainBar.css";
import QuestionList from "./QuestionList";
import { useSelector } from "react-redux";

const HomeMainBar = () => {
  const user = useSelector((state) => state.currentUserReducer);

  const questionList = useSelector((state) => state.questionsReducer);

  const location = useLocation();
  const navigate = useNavigate();

  const checkAuth = () => {
    if (user === null) {
      alert("Login or Signup to Ask Question");
      navigate("/Auth/Login");
    } else {
      navigate("/AskQuestion");
    }
  };

  return (
    <Box className="home-main-session">
      <Box pt={8} className="home-main-container">
        <Box className="home-title">
          {location.pathname === "/" ? (
            <p className="home-title-1">Top Questions</p>
          ) : (
            <p className="home-title-1">All Questions</p>
          )}

          <Typography onClick={checkAuth} className="ask-question">
            Ask Question
          </Typography>
        </Box>
        {questionList.data === null ? (
          <p>Loading....</p>
        ) : (
          <>
            <p className="question-lenght">
              {questionList.data.length} Question
            </p>
            <QuestionList questionsList={questionList.data} />
          </>
        )}
      </Box>
    </Box>
  );
};

export default HomeMainBar;
