import React from "react";
import Box from "@mui/material/Box";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
function Footer() {
  return (
    <Box
      sx={{
        height: { xs: "100vh", md: "50vh" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: {
          xs: "column",
          md: "row",
        },
      }}
    >
      <Box
        sx={{
          color: "black",
          height: "100%",
          width: { xs: "100%", md: "50%" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            textTransform: "uppercase",

            margin: "10px",

            padding: "10px",
            width: { xs: "100%", md: "50%" },
            height: {
              xs: "100%",
              md: "80%",
            },

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {" "}
          <h1
            style={{
              marginTop: "50px",
            }}
          >
            Contact Us
          </h1>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              height: "80%",
              alignItems: "center",
              padding: "10px",
              margin: "10px",

              flexDirection: "column",
            }}
          >
            <p>
              Add rice and stir very gently to distribute. Top with artichokes
              and peppers, and cook without stirring, until most of the liquid
              is
            </p>
          </Box>
          <Box
            sx={{
              display: "flex",
              height: "20%",
              width: "100%",

              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
              margin: "10px",
            }}
          >
            <FacebookIcon
              fontSize="large"
              sx={{
                color: "blue",
                marginRight: "10px",
                "&:hover": {
                  color: "black",
                  cursor: "pointer",
                },
              }}
            />
            <GoogleIcon
              fontSize="large"
              sx={{
                color: "red",
                marginRight: "10px",
                "&:hover": {
                  color: "black",
                  cursor: "pointer",
                },
              }}
            />
            <InstagramIcon
              fontSize="large"
              sx={{
                color: "pink",
                marginRight: "10px",
                "&:hover": {
                  color: "black",
                  cursor: "pointer",
                },
              }}
            />
            <LinkedInIcon
              fontSize="large"
              sx={{
                color: "blue",
                marginRight: "10px",
                "&:hover": {
                  color: "black",
                  cursor: "pointer",
                },
              }}
            />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          height: "100%",
          margin: "10px",
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: { xs: "100%", md: "50%" },
        }}
      >
        <TextField
          fullWidth
          label="Name"
          id="fullWidth"
          sx={{
            marginY: "10px",
            backgroundColor: "#edf5f3",
          }}
        />
        <TextField
          fullWidth
          label="Email"
          id="fullWidth"
          sx={{
            marginY: "10px",
            backgroundColor: "#edf5f3",
          }}
        />
        <TextField
          id="standard-multiline-static"
          label="message"
          multiline
          rows={4}
          sx={{
            width: "100%",
            marginY: "10px",
            backgroundColor: "#edf5f3",
          }}
          variant="outlined"
        />
        <Button
          sx={{
            background: "linear-gradient(to right, #36d1dc, #5b86e5)",
            borderRadius: "20px",
            color: "white",
            width: "40%",
            "&:hover": {
              boxShadow: "0px 0px 10px #013e5a",
              scale: "1",
            },
            marginTop: "10px",
          }}
        >
          Send NoW
        </Button>
      </Box>
    </Box>
  );
}

export default Footer;
