import React from "react";
import { Box, Stack } from "@mui/material";
import LeftSideBar from "../../components/leftSideBar/LeftSideBar";
// import { useLocation } from "react-router-dom";
import UserList from "./UserList";

const Users = () => {
  // const location = useLocation();
  return (
    <Stack direction="row">
      <Box sx={{ flex: "1", display: { xs: "none", md: "flex" } }}>
        <LeftSideBar />
      </Box>
      <Box sx={{ flex: "3" }} pt={10}>
        <h1 style={{ fontWeight: "400",marginLeft:"10px" }}>Users</h1>
        <UserList />
      </Box>
      <Box sx={{ flex: "1.5", display: { md: "flex", xs: "none" } }}>
        {/* <RightSideBar /> */}
      </Box>
    </Stack>
  );
};

export default Users;
