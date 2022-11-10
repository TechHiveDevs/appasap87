import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import Autocomplete from "@mui/material/Autocomplete";

const userType = ["Teacher", "Student", "TeacherAssistant"];

// ===============================================================

export default function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [PasswordUser, setPasswordUser] = useState("");
  const [PasswordConfirmation, setPasswordConfirmation] = useState("");
  const [UserType, setUserType] = useState("");
  const [passToggle, setPassToggle] = useState(false);
  const [confirmPassToggle, setConfirmPassToggle] = useState(false);
  const [Name, setName] = useState("");
  const [Error, setError] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const handleCreate = (e) => {
    e.preventDefault();
    if (PasswordUser !== PasswordConfirmation) {
      setError(true);
      setErrorMessage("Passwords do not match");
    } else {
      fetch("http://localhost:5000/api/oauth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: Name,
          email: email,
          password: PasswordUser,
          userType: UserType,
          permission: {},
          info: {},
        }),
      })
        .then((res) => {
          if (res.status === 201) {
            alert("User created successfully");
            navigate("/login");
          }
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        flexDirection: {
          xs: "column",
          md: "row",
        },
      }}
    >
      <Box
        sx={{
          width: {
            xs: "100%",
            md: "30%",
          },

          marginTop: {
            xs: "10px",
            md: "0px",
          },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "#ffff",
        }}
      >
        <Box
          sx={{
            margin: "10px",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            color: "#013e5a",

            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "50px",
              fontWeight: "bold",
            }}
          >
            welcome back
          </h1>
          <span
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              letterSpacing: "3px",
              lineHeight: "1.5",
            }}
          >
            to keep connected with us please login with your personal info
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
                boxShadow: "0px 0px 10px #013e5a",
                scale: "1.1",
              },
            }}
            onClick={() => {
              navigate("/login");
            }}
          >
            Sigin in
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          width: {
            xs: "100%",
            md: "70%",
          },

          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "#013e5a",
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
                color: "white",
                textTransform: "uppercase",
              }}
            >
              Create an account
            </h1>
            <span
              style={{
                color: "white",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Sign up with your social
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
                  color: "white",
                },
                cursor: "pointer",
              }}
            />
            <GoogleIcon
              sx={{
                margin: "10px",
                color: "red",
                "&:hover": {
                  color: "white",
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
                  color: "white",
                },
                cursor: "pointer",
              }}
              fontSize="large"
            />
          </Box>
          <hr
            style={{
              width: "80%",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10px",
            width: {
              xs: "90%",
              md: "70%",
            },
            flexDirection: "column",
          }}
        >
          <form
            onSubmit={handleCreate}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "10px",
              width: "100%",

              flexDirection: "column",

              borderRadius: "20px",
              color: "white",
              border: "none",
            }}
          >
            <TextField
              label="Name"
              InputProps={{
                style: {
                  backgroundColor: "#edf5f3",
                },
              }}
              required
              inputProps={{
                pattern: "[a-z]*",
                title: "Only lowercase letters allowed no spaces no numbers",
              }}
              onChange={(e) => {
                setName(e.target.value);
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
              label="Email"
              InputProps={{
                style: {
                  backgroundColor: "#edf5f3",
                },
              }}
              required
              inputProps={{
                pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",
                title: "Please enter a valid email",
              }}
              onChange={(e) => {
                setEmail(e.target.value);
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
              type={passToggle ? "text" : "password"}
              label="password"
              error={Error}
              helperText={ErrorMessage}
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
              required
              onChange={(e) => {
                setPasswordUser(e.target.value);
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
              error={Error}
              helperText={ErrorMessage}
              type={confirmPassToggle ? "text" : "password"}
              label="Confirm password"
              InputProps={{
                style: {
                  backgroundColor: "#edf5f3",
                },
                endAdornment: (
                  <InputAdornment
                    position="end"
                    onClick={() => {
                      setConfirmPassToggle(!confirmPassToggle);
                    }}
                    sx={{ cursor: "pointer" }}
                  >
                    {confirmPassToggle ? (
                      <VisibilityOffIcon />
                    ) : (
                      <VisibilityIcon />
                    )}
                  </InputAdornment>
                ),
              }}
              required
              onChange={(e) => {
                setPasswordConfirmation(e.target.value);
              }}
              sx={{
                marginY: "10px",
                width: {
                  xs: "100%",
                  md: "100%",
                },
              }}
            />

            <Autocomplete
              disablePortal
              autoHighlight
              options={userType}
              sx={{
                width: "100%",
                borderRadius: "20px",
                color: "white",
                border: "none",
              }}
              onChange={(e, value) => {
                setUserType(value);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  required
                  label="Type"
                  sx={{
                    backgroundColor: "#edf5f3",
                    border: "none",
                  }}
                />
              )}
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
                  boxShadow: "0px 0px 10px white",
                  scale: "1.1",
                },
              }}
              type="submit"
            >
              create account
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
}
