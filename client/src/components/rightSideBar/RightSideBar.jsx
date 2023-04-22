import { Box } from "@mui/material";
import React from "react";
import "./RightSideBar.css";
import CreateIcon from "@mui/icons-material/Create";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";

const rightSideBar = () => {

  const tags = [
    "c",
    "c++",
    "Java",
    "Python",
    "Reactjs",
    "Nodejs",
    "Expressjs",
    "MongoDB",
    "Mangoose",
    "JavaScript",
    "Html",
    "CSS",
  ];

  return (
    <Box className="right-side-bar-session">
      <Box mt={8} className="rsb-container-1">
        <Box className="rsb-box">
          <h4 className="rsb-title">The Overflow Blog</h4>
          <Box className="rsb-t-b">
            <CreateIcon
              style={{ fontSize: "1.1rem", marginRight: "6px" }}
              className="rsb-icons"
            />
            <p className="rsb-para">
              Observability is Key of the future of software and your DevOps
              career
            </p>
          </Box>
          <Box className="rsb-t-b">
            <CreateIcon style={{ fontSize: "1.1rem", marginRight: "6px" }} />
            <p className="rsb-para">
              Podcast 374: How valuable is your screen name?
            </p>
          </Box>
        </Box>
        <Box className="rsb-box">
          <h4 className="rsb-title">Featured on Media</h4>
          <Box className="rsb-t-b">
            <ChatBubbleIcon
              style={{ fontSize: "1.1rem", marginRight: "6px" }}
            />
            <p className="rsb-para">
              Review queue worldflows - Final release .......
            </p>
          </Box>
          <Box className="rsb-t-b">
            <ChatBubbleIcon
              style={{ fontSize: "1.1rem", marginRight: "6px" }}
            />
            <p className="rsb-para">
              Please welcome Valued Associates: #958 -V2Blast #959 -SpencerG
            </p>
          </Box>
          <Box className="rsb-t-b">
            <ChatBubbleIcon
              style={{ fontSize: "1.1rem", marginRight: "6px" }}
            />
            <p className="rsb-para">
              Outdated Answers: accepted answer is now unpinned on Stack
              Overflow
            </p>
          </Box>
        </Box>
        <Box className="rsb-box">
          <h4 className="rsb-title">Hot Meta Posts</h4>
          <Box className="rsb-para rsb-box-3" display="flex">
            <p style={{ marginTop: "9px" }}>38</p>
            <p className="rsb-para rsb-para-3">
              Why was this spam flag declined. yet the question marked as a
              spam?
            </p>
          </Box>
          <Box className="rsb-para rsb-box-3" display="flex">
            <p style={{ marginTop: "9px" }}>20</p>
            <p className="rsb-para rsb-para-3">
              What is the best course of action when a user has high enought rep
              to....
            </p>
          </Box>
          <Box className="rsb-para rsb-box-3" display="flex">
            <p style={{ marginTop: "9px" }}>14</p>
            <p className="rsb-para rsb-para-3">
              is a link to the "How to ask" help page a useful comment?
            </p>
          </Box>
        </Box>
      </Box>
      <Box className="rsb-container-2" mt={1.5}>
        <Box sx={{ width: "70%" }} className="rsb-tags">
          <h5 className="tags-title">Watched tags</h5>
          <Box display="flex" sx={{ flexWrap: "wrap", padding: "3px 4px" }}>
            {tags.map((tag) => (
              <p keys={tag} className="tag">
                {tag}
              </p>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default rightSideBar;
