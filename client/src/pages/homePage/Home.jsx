import React from "react";
import LeftSideBar from "../../components/leftSideBar/LeftSideBar";
import HomeMainBar from "../../components/homeMainBar/HomeMainBar";
import RightSideBar from "../../components/rightSideBar/RightSideBar";
import { Box, Stack } from "@mui/material";

const Home = () => {
  return (
    <Box>
      <Stack direction="row">
        <Box sx={{ flex: "1" , display:{xs:"none",md:"flex"}}}>
          <LeftSideBar />
        </Box>
        <Box sx={{ flex: "3" }}>
          <HomeMainBar />
        </Box>
        <Box sx={{ flex: "1.5", display: { md: "flex", xs: "none" } }}>
          <RightSideBar />
        </Box>
      </Stack>
    </Box>
  );
};

export default Home;
