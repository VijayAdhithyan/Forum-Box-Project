import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import LeftSideBar from "../../components/leftSideBar/LeftSideBar";
import moment from "moment";
import EditProfileForm from "./EditProfileForm";
import ProfileBio from "./ProfileBio";
import CakeIcon from "@mui/icons-material/Cake";
import EditIcon from "@mui/icons-material/Edit";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBirthdayCake, faPen } from "@fortawesome/free-solid-svg-icons";
import "./UsersProfile.css";

const UserProfile = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.usersReducer);
  const currentProfile = users.filter((user) => user._id === id)[0];
  const currentUser = useSelector((state) => state.currentUserReducer);
  const [Switch, setSwitch] = useState(false);
  return (
    <Stack direction="row">
      <Box sx={{ flex: "1", display: { xs: "none", md: "flex" } }}>
        <LeftSideBar />
      </Box>
      <Box className="home-container-2" sx={{ flex: "3" }} pt={10}>
        <section>
          <div className="user-details-container">
            <div className="user-details">
              <div
                style={{
                  backgroundColor: "purple",
                  color: "white",
                  fontSize: "50px",
                  padding: "30px 40px",
                }}
              >
                {currentProfile?.name.charAt(0).toUpperCase()}
              </div>
              <div className="user-name">
                <h1 className="profile-user-name">{currentProfile?.name}</h1>
                <p className="profile-user-joined">
                  {/* <FontAwesomeIcon icon={faBirthdayCake} /> */}
                  <CakeIcon />
                  Joined {moment(currentProfile?.joinedOn).fromNow()}
                </p>
              </div>
            </div>
            {currentUser?.result._id === id && (
              <button
                type="button"
                onClick={() => setSwitch(true)}
                className="edit-profile-btn"
              >
                <EditIcon style={{ fontSize: "14px", marginRight: "8px" }} />
                Edit Profile
              </button>
            )}
          </div>
          <>
            {Switch ? (
              <EditProfileForm
                currentUser={currentUser}
                setSwitch={setSwitch}
              />
            ) : (
              <ProfileBio currentProfile={currentProfile} />
            )}
          </>
        </section>
      </Box>
      <Box sx={{ flex: "1", display: { md: "flex", xs: "none" } }}>
        {/* <RightSideBar /> */}
      </Box>
    </Stack>
  );
};

export default UserProfile;
