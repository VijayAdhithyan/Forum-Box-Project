import { Box, Stack } from "@mui/material";
import React from "react";
import LeftSideBar from "../../components/leftSideBar/LeftSideBar";
import Tags from "../../components/tags/Tags";

const TagPage = () => {
  return (
    <div>
      <Stack direction="row">
        <Box sx={{ flex: "1",display: { xs: "none", md: "flex" }}} >
          <LeftSideBar />
        </Box>
        <Box sx={{ flex: "3" }} pt={2}>
          <Tags />
        </Box>
        <Box sx={{ flex: "1.5", display: { md: "flex", xs: "none" } }}>
          {/* <RightSideBar /> */}
        </Box>
      </Stack>
    </div>
  );
};

export default TagPage;
