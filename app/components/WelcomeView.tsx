"use client"

import React from "react"
import { Container, Typography } from "@mui/material"
import { SearchBoxView } from "@/app/components/SearchBoxView"
import { globalThemeMUI } from "@/app/components/globalThemeMUI"

export default function WelcomeView() {
  return (
    <Container sx={{ textAlign: "left", mt: 6, fontSize: "1.2rem" }}>
      <Typography variant="h5" component="h1" gutterBottom sx={{ fontWeight: "light", fontSize: "1.8rem" }}>
        Welcome To
      </Typography>
      <Typography
        variant="h1"
        component="h1"
        sx={{
          color: "white",
          backgroundColor: globalThemeMUI.palette.primary.main,
          display: "inline-block",
          padding: "15px 20px",
          borderRadius: "5px",
          fontWeight: "bolder",
          mb: 1,
          fontSize: "4rem"
        }}
      >
        WIKI EXPLORER
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, maxWidth: "70%", fontSize: "1.2rem" }}>
        A website which acts as a wrapper for Wikipedia that provides a more interactive user experience while browsing Wikipedia. It is intended for users who are not looking for
        any particular information but are merely reading out of curiosity and willingness to learn.
      </Typography>
      <SearchBoxView placeholder="Search Wikipedia" />
    </Container>
  )
}
