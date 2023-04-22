import { Box, Stack } from "@mui/material";
import React from "react";
import LeftSideBar from "../../components/leftSideBar/LeftSideBar";
import QuestionsDetails from "./QuestionsDetails";
import RightSideBar from "../../components/rightSideBar/RightSideBar";

const DisplayQuestion = () => {
  return (
    <Stack direction="row">
      <Box sx={{ flex: "1", display: { xs: "none", md: "flex" } }}>
        <LeftSideBar />
      </Box>
      <Box sx={{ flex: "3" }}>
        <QuestionsDetails />
      </Box>
      <Box sx={{ flex: "1.5", display: { md: "flex", xs: "none" } }}>
        <RightSideBar />
      </Box>
    </Stack>
  );
};

export default DisplayQuestion;
