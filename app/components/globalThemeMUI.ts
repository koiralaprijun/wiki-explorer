'use client'

import { createTheme } from "@mui/material/styles"
import { styled } from "@mui/system"
import Link from "@mui/material/Link"

export const globalThemeMUI = createTheme({
  palette: {
    primary: {
      main: "#00579c",
      light: "#E3F2FD",
      dark: "#0D47A1"
    },
    secondary: {
      main: "#FDD835",
      dark: "##FBC02D",
      light: "#FFFDE7"
    }
  },
  typography: {
    h1: {
      fontSize: "2.5rem",
      fontFamily: "Roboto, sans-serif"
    }
  }
})

export const searchResultsMUITheme = createTheme({
  palette: {
    primary: {
      main: "#00579c"
    },
    secondary: {
      main: "#f5f5eb"
    }
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontSize: "2.5rem"
    }
  }
})

export const PopularQualityLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: "none",
  fontWeight: "bold",
  "&:hover": {
    textDecoration: "underline",
    color: theme.palette.secondary.main
  }
}))

export const MainArticleStyledDiv = styled("div")(({ theme }) => ({
  padding: theme.spacing(2),
  fontSize: "1rem",
  lineHeight: "1.6",
  textAlign: "justify",
  "& a": {
    color: theme.palette.primary.main,
    textDecoration: "none",
    backgroundColor: theme.palette.primary.light,
    padding:'1px 5px',
    lineHeight: '1.5rem',
    "&:hover": {
      textDecoration: "underline",
      backgroundColor: "yellow"
    }
  },
  "& h2": {
    fontSize: "1.4rem",
    fontWeight: "bold",
    color: theme.palette.primary.main,
    textDecoration: "none",
    margin: "15px 0px 5px 0px"
  },
  "& h3": {
    fontSize: "1rem",
    fontWeight: "bold",
    margin: "5px 0px 0px 0px"
  },
  "& h4": {
    fontSize: "0.6rem",
    textDecoration: "none",
    margin: "5px 0px 0px 0px"
  },
  "& section": {
    marginBottom: "50px"
  },
  '& section:first-child': {
    backgroundColor: globalThemeMUI.palette.primary.dark,
    color: 'white',
    marginBottom: '50px',
    padding: '30px',
    borderRadius: "5px"
  },
  '& section:first-child p': {
    fontSize: '1.2rem'
  },
  '& section:first-child a': {
    textDecoration: "none",
    backgroundColor: globalThemeMUI.palette.primary.dark,
    color:'white'
  },
  "& p": {
    marginBottom: "20px"
  },
  "& img": {
    maxWidth: "100%",
    height: "auto",
    border: "1px solid gray",
    padding: "4px",
    borderRadius: "4px",
    float: "right",
    marginLeft: "10px"
  },
  "& table": {
    borderCollapse: "collapse",
    maxWidth: "70%",
    float: "right",
    marginLeft: "10px"
  },
  "& th, td, tr": {
    border: "1px solid #ddd"
  },
  "& th": {
    backgroundColor: theme.palette.primary.light
  },
  "& #mwEw, #mwWw": {
    display: "none"
  }
}))
