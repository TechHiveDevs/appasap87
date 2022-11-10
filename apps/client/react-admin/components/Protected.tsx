import React from "react";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import { Title } from "react-admin";
import { Navigate } from "react-router-dom";

// =================================================================

export default function Protected({ loggedUser, children }: any) {
  if (loggedUser.userType === "Student") {
    return (
      <Box
        sx={{
          display: "flex",

          justifyContent: "center",

          height: "100vh",

          //   border: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",

            width: "100%",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              fontSize: "10rem",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "1rem",
            }}
          >
            404
          </h1>
          <span
            style={{
              fontWeight: "bold",
              fontSize: "5rem",
              textAlign: "center",
            }}
          >
            Not Found
          </span>
        </div>
      </Box>
    );
  } else {
    return children;
  }
}
