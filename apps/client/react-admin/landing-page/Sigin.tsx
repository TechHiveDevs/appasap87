import React from "react";
import { useState } from "react";
import { useLogin, useNotify, Notification } from "react-admin";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
function Sigin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passToggle, setPassToggle] = useState(false);
  const login = useLogin();
  const notify = useNotify();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username, password }).catch(() =>
      notify("Invalid email or password")
    );
  };
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",

        alignItems: "center",
        backgroundColor: "#ffff",
        flexDirection: {
          xs: "column",
          md: "row",
        },
      }}
    >
      <Box
        sx={{
          width: {
            xs: "90%",
            md: "70%",
          },

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            textAlign: "center",

            margin: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            padding: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <h1
              style={{
                fontSize: "30px",
                fontWeight: "bold",
                color: "black",
                textTransform: "uppercase",
              }}
            >
              login to Your Account
            </h1>
            <span
              style={{
                color: "#013e5a",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              login using social networks
            </span>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",

              padding: {
                xs: "0px",
                md: "10px",
              },
            }}
          >
            <FacebookIcon
              fontSize="large"
              sx={{
                margin: "10px",
                color: "blue",
                "&:hover": {
                  color: "black",
                },
                cursor: "pointer",
              }}
            />
            <GoogleIcon
              sx={{
                margin: "10px",
                color: "red",
                "&:hover": {
                  color: "black",
                },
                cursor: "pointer",
              }}
              fontSize="large"
            />
            <LinkedInIcon
              sx={{
                margin: "10px",
                color: "blue",
                "&:hover": {
                  color: "black",
                },
                cursor: "pointer",
              }}
              fontSize="large"
            />
          </Box>
          <hr
            style={{
              width: "80%",

              backgroundColor: "white",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            width: {
              xs: "100%",
              md: "70%",
            },
            flexDirection: "column",
          }}
        >
          <form
            onSubmit={handleSubmit}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <TextField
              label="Email"
              type="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              name="username"
              InputProps={{
                style: {
                  backgroundColor: "#edf5f3",
                },
              }}
              sx={{
                marginY: "10px",
                width: {
                  xs: "100%",
                  md: "100%",
                },
              }}
            />
            <TextField
              label="Password"
              name="password"
              type={passToggle ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                style: {
                  backgroundColor: "#edf5f3",
                },
                endAdornment: (
                  <InputAdornment
                    position="end"
                    onClick={() => {
                      setPassToggle(!passToggle);
                    }}
                    sx={{ cursor: "pointer" }}
                  >
                    {passToggle ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </InputAdornment>
                ),
              }}
              sx={{
                marginY: "10px",
                width: {
                  xs: "100%",
                  md: "100%",
                },
              }}
            />
            <Button
              sx={{
                background: "linear-gradient(to right, #36d1dc, #5b86e5)",

                color: "white",
                width: {
                  xs: "50%",
                  md: "30%",
                },
                //   padding: "10px",
                marginTop: {
                  xs: "10px",
                  md: "10px",
                },
                borderRadius: "20px",
                "&:hover": {
                  boxShadow: "0px 0px 10px #013e5a",
                  scale: "1.1",
                },
              }}
              type="submit"
            >
              Sigin in
            </Button>
          </form>
        </Box>
      </Box>
      <Box
        sx={{
          width: {
            xs: "100%",
            md: "30%",
          },
          height: {
            xs: "100%",
            md: "100%",
          },
          marginTop: {
            xs: "10px",
            md: "0px",
          },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "#013e5a",
        }}
      >
        <Box
          sx={{
            margin: "10px",
            padding: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            color: "white",

            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "50px",
              fontWeight: "bold",
            }}
          >
            New here?
          </h1>
          <span
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              letterSpacing: "3px",
              lineHeight: "1.5",
            }}
          >
            Sign up and discover a great amount of new opportunities
          </span>
          <Button
            sx={{
              background: "linear-gradient(to right, #36d1dc, #5b86e5)",

              color: "white",
              width: "70%",
              padding: "10px",
              borderRadius: "20px",
              marginTop: "10px",
              "&:hover": {
                boxShadow: "0px 0px 10px white",
                scale: "1.1",
              },
            }}
            onClick={() => {
              navigate("/signup");
            }}
          >
            Sigin up
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Sigin;
