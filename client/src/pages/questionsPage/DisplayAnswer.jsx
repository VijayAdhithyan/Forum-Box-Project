import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import moment from "moment";
import copy from "copy-to-clipboard";
import { useDispatch, useSelector } from "react-redux";
import { deleteAnswer } from "../../actions/question";
import "./DisplayAnswer.css";
import { Typography } from "@mui/material";

const DisplayAnswer = ({ question }) => {
  const User = useSelector((state) => state.currentUserReducer);
  const { id } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const url = "http://localhost:3000";

  const handleShare = () => {
    copy(url + location.pathname);
    alert("Copied url : " + url + location.pathname);
  };

  const handleDelete = (answerId, noOfAnswers) => {
    dispatch(deleteAnswer(id, answerId, noOfAnswers - 1));
  };

  return (
    <div>
      {question.answer.map((ans) => (
        <div className="display-ans-container" key={ans._id}>
          <div className="display-ans">
            <Typography variant="h7">{ans.answerBody}</Typography>
            <div className="question-action-user">
              <button type="button" onClick={handleShare} className="votes-btn">
                Share
              </button>
              {User?.result?._id === ans?.userId && (
                <button
                  type="button"
                  className="votes-btn"
                  onClick={() => {
                    handleDelete(ans._id, question.noOfAnswers);
                  }}
                >
                  Delete
                </button>
              )}
            </div>
          </div>

          <div className="answered-user-details">
            <Typography sx={{ fontSize: ".8rem", fontWeight: "500" }}>
              answered {moment(ans.answeredOn).fromNow()}
            </Typography>
            <Link to={`/Users/${ans.userId}`} className="user-link">
              <p style={{ fontSize: ".9rem" }} className="user-avatar">
                {ans.userAnswered.charAt(0).toUpperCase()}
              </p>
              <div>{ans.userAnswered}</div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayAnswer;
