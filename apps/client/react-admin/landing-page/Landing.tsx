import React from "react";
import logo from "../../../public/logo12.png";
import Button from "@mui/material/Button";

import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
function Landing() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: "white",

        // background: "  #36d1dc",
        // background: "  -webkit-linear-gradient(to right, #36d1dc, #5b86e5)",
        // background: "linear-gradient(to right, #36d1dc, #5b86e5)",
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "40%" },
          height: { xs: "90%", md: "100%" },

          display: "flex",

          alignItems: "center",

          padding: "10px",
        }}
      >
        <Box
          sx={{
            height: "50%",
            width: { xs: "100%", md: "80%" },

            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",

            padding: "10px",
          }}
        >
          <h1
            style={{
              fontSize: "50px",
              fontWeight: "bold",
              color: "black",

              textTransform: "uppercase",
            }}
          >
            <span
              style={{
                color: "#013e5a",
              }}
            >
              Find
            </span>{" "}
            The{" "}
            <span
              style={{
                color: "#013e5a",
              }}
            >
              best
            </span>{" "}
            center{" "}
            <span
              style={{
                color: "#013e5a",
              }}
            >
              solution
            </span>
          </h1>
          <Button
            sx={{
              background: "linear-gradient(to right, #36d1dc, #5b86e5)",
              borderRadius: "20px",
              color: "white",
              width: "100%",
              "&:hover": {
                boxShadow: "0px 0px 10px #013e5a",
                scale: "1",
              },
              marginTop: "10px",
            }}
          >
            Start Now
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          width: { xs: "100%", md: "60%" },
          height: { xs: "30%", md: "100%" },
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          alignItems: "center",

          // display: { xs: "none", md: "flex" },
        }}
      >
        <img
          src={logo}
          alt=""
          loading="lazy"
          style={{
            width: "100%",
            boxShadow: "0px 0px 10px #013e5a",

            marginRight: "20px",
          }}
        />
      </Box>
    </Box>
  );
}

export default Landing;
