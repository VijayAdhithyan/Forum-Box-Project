import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const TitleLink = styled(Link)(() => ({
  fontSize: "18px",
  textDecoration: "none",
  color: "rgb(0, 110, 255)",
}));

const Questions = ({ question }) => {
  return (
    <Box className="questions-session">
      <Box className="questions-container">
        <Box className="display-votes">
          <Typography>
            {question.upVote.length - question.downVote.length}
          </Typography>
          <Typography sx={{ fontSize: "14px", fontWeight: "500" }}>
            votes
          </Typography>
        </Box>
        <Box className="display-answers">
          <Typography>{question.noOfAnswers}</Typography>
          <Typography sx={{ fontSize: "14px", fontWeight: "500" }}>
            Answers
          </Typography>
        </Box>
        <Box className="display-title-tags">
          <TitleLink
            to={`/Question/${question._id}`}
            variant="h7"
            className="display-title"
          >
            {question.questionTitle}
          </TitleLink>
          <Box style={{ display: "flex" }}>
            {question.questionTags.map((tag) => (
              <p to="/Tags" key={tag} className="ans-tags">
                {tag}
              </p>
            ))}
          </Box>
        </Box>
        <Box className="display-asked-by">
          <Typography className="question-detail" sx={{ fontSize: "13px" }}>
            asked {moment(question.askedOn).fromNow()} {question.userPosted}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Questions;
