import { Link, NavLink } from "react-router-dom";
import { authActions } from "./store.jsx";
import {
  AppBar,
  Typography,
  Toolbar,
  Box,
  Button,
  Tabs,
  Tab,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [value, setValue] = useState();

  return (
    <AppBar
      position="sticky"
      sx={{
        background:
          "linear-gradient(90deg, rgba(9,113,121,1) 3%, rgba(205,110,231,1) 100%)",
      }}
    >
      <Toolbar>
        <NavLink to="/" underline="none">
          <Typography
            variant="h4"
            style={{
              fontFamily: "Oleo Script",
              fontSize: "40px",
              color: "white",
            }}
          >
            ReFill
          </Typography>
        </NavLink>

        {isLoggedIn && (
          <Box
            display="flex"
            justifyContent="flex-start"
            marginLeft="auto"
            marginRight="auto"
          >
            <Tabs
              textColor="inherit"
              value={value}
              onChange={(e, val) => setValue(val)}
            >
              <Tab
                //className={classes.font}
                LinkComponent={Link}
                to="/add"
                label="Add stations"
              />
            </Tabs>
          </Box>
        )}
        <Box display="flex" marginLeft="auto">
          {!isLoggedIn && (
            <>
              {" "}
              <Button
                LinkComponent={Link}
                to="login/"
                sx={{
                  margin: 1,
                  fontWeight: "bold",
                  color: "white",
                  borderRadius: 10,
                  fontFamily:"Oleo Script",
                }}
              >
                Login
              </Button>
              <Button
                LinkComponent={Link}
                to="register/"
                sx={{
                  margin: 1,
                  fontWeight: "bold",
                  color: "white",
                  borderRadius: 10,
                  fontFamily:"Oleo Script",
                }}
              >
                SignUp
              </Button>
            </>
          )}

          {isLoggedIn && (
            <Button
              onClick={() => dispatch(authActions.logout())}
              LinkComponent={Link}
              to="/"
              variant="contained"
              sx={{ margin: 1, borderRadius: 10 , fontFamily:"Oleo Script"}}
              color="warning"
            >
              Logout
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
