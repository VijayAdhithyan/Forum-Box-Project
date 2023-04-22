import React, { useEffect, useState } from "react";
import "./NavBar.css";
import BsLogo from "../../asset/ForumBoxLogo.png";
// import SsLogo from "../../asset/logo-img.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { GrSearch } from "react-icons/gr";
import { Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import setCurrentUser from "../../actions/currentUser";
import PublicIcon from "@mui/icons-material/Public";
import CloseIcon from "@mui/icons-material/Close";
import decode from "jwt-decode";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.currentUserReducer);

  const checkAuth = () => {
    if (user === null) {
      alert("Login or Signup to See Posts");
      navigate("/Auth/Login");
      setIsOpen(!isOpen);
    } else {
      navigate("/Community");
      setIsOpen(!isOpen);
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    dispatch(setCurrentUser(null));
  };

  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        handleLogout();
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [dispatch]);

  return (
    <Box className="navbar">
      <Box fluid className="navbar-container">
        <Box className="hamburger-container">
          <Box className="ham">
            {isOpen ? (
              <Box>
                <CloseIcon
                  sx={{ fontSize: "25px", cursor: "pointer" }}
                  onClick={handleOpen}
                />
              </Box>
            ) : (
              <Box>
                <MenuIcon
                  sx={{ fontSize: "25px", cursor: "pointer" }}
                  onClick={handleOpen}
                />
              </Box>
            )}
            {isOpen && (
              <>
                <Box className="ham-links">
                  <Box className="nav-title-container">
                    <Link
                      to="/"
                      className="nav-title-1"
                      activeClassName="active"
                      onClick={handleOpen}
                    >
                      <p>Home</p>
                    </Link>
                    {/* <p
                      className="nav-title-1"
                      style={{ cursor: "pointer" }}
                      onClick={checkAuth}
                    >
                      
                    </p> */}

                    <p className="nav-title-2">Public</p>
                  </Box>
                  <Box className="nav-sub-link-container">
                    <Link
                      to="/Question"
                      className="question-container"
                      // activeClassName="active"
                      onClick={handleOpen}
                    >
                      <PublicIcon
                        style={{ fontSize: "1.1rem", color: "#555" }}
                        className="public-icon"
                      />
                      <p className="question-title">Question</p>
                    </Link>
                    <Link
                      to="/Tags"
                      className="nav-sub-titles"
                      activeClassName="active"
                      onClick={handleOpen}
                    >
                      <p>Tags</p>
                    </Link>
                    <Link
                      to="/Users"
                      className="nav-sub-titles"
                      activeClassName="active"
                      onClick={handleOpen}
                    >
                      <p>User</p>
                    </Link>
                    <Link to="/" className="navitem navlink navlink-1">
                      <p onClick={handleLogout}>Log out</p>
                    </Link>
                  </Box>
                </Box>
              </>
            )}
          </Box>
        </Box>
        <Link
          to="/"
          className="navitem navlogo bs-logo"
          style={{
            display: "flex",
            alignItems: "center",
            color: "#111",
            fontWeight: "600",
            columnGap: "10px",
          }}
        >
          <img src={BsLogo} alt="Bs-logo" width={30} />
          <p>Forum Box</p>
        </Link>
        <Link to="/" className="navitem navbtn navitem-h">
          <p>Home</p>
        </Link>
        <Link to="/Tags" className="navitem navbtn nav-products">
          <p>Tags</p>
        </Link>
        <Link to="/Users" className="navitem navbtn navitem-h">
          <p>Users</p>
        </Link>
        <form className="search-box">
          <input
            type="text"
            placeholder="Search...."
            className="search-box-input"
          />
          <GrSearch className="search-box-icon" />
        </form>
        {user === null ? (
          <>
            <Link to="/Auth/Login" className="navitem navlink navlink-1">
              <p>Log in</p>
            </Link>
            <Link to="/Auth/Signup" className="navitem navlink navlink-2">
              <p>Sign up</p>
            </Link>
          </>
        ) : (
          <>
            <Link
              to={`/Users/${user?.result?._id}`}
              style={{ textDecoration: "none", color: "#111" }}
            >
              <p className="avatar">
                {user.result.name.toUpperCase().charAt(0)}
              </p>
            </Link>

            <Link to="/" className="navitem navlink navlink-1 log-out-btn">
              <p onClick={handleLogout}>Log out</p>
            </Link>
          </>
        )}
      </Box>
    </Box>
  );
};

export default NavBar;
