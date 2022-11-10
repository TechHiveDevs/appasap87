import React from "react";

import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
function About() {
  return (
    <Box
      Box
      sx={{
        height: {
          xs: "100vh",
          md: "55vh",
        },
        backgroundColor: "#013e5a",
        border: "1px solid #013e5a",
        padding: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "50px",
              fontWeight: "bold",
              color: "white",

              textTransform: "uppercase",
            }}
          >
            About US
          </h1>
        </div>
        <div
          style={{
            display: "flex",

            alignItems: "center",
            flexDirection: "column",
            height: "100%",
            width: "100%",
            fontSize: "1rem",
          }}
        >
          <p
            style={{
              color: "white",
            }}
          >
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is
            absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
            shrimp and mussels, tucking them down into the rice, and cook again
            without stirring, until mussels have opened and rice is just tender,
            5 to 7 minutes more. (Discard any mussels that don&apos;t open.)
          </p>
          <br />
          <p
            style={{
              color: "white",
            }}
          >
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </p>
        </div>
      </Box>
      <Box
        sx={{
          height: "100%",
          width: "50%",
          margin: "10px",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
          display: { xs: "none", md: "flex" },
        }}
      >
        {/* <img
          src={aboutImg}
          alt="about"
          style={{
            width: "60%",
          }}
        /> */}
        <CardMedia
          component="img"
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px white",
            display: { xs: "none", md: "flex" },
          }}
          loading="lazy"
          image={
            "https://chalktalk.com/wp-content/uploads/2020/05/shutterstock_1176037405-e1556897606612.jpg"
          }
          alt="about us"
        />
      </Box>
    </Box>
  );
}

export default About;
