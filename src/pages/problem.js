import React, { useEffect, useState } from "react"
import SEO from "../components/seo"
import styled, { ThemeProvider } from "styled-components"
import { darkTheme, device, lightTheme, Row } from "../Global"
import TopNav from "../components/TopNav"
import "../components/font.css"
import ProblemCard from "../components/ProblemCard"

const HomeTitle = styled.div`
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.dark};
  color: ${props => props.theme.secondary};
  width: 100%;
  text-align: center;
  padding: 40px 8px;
  font-weight: 700;
  font-size: 40px;
  font-family: Source Sans Pro, sans-serif;
  
  @media ${device.tablet} {
    font-size: 56px;
  }
`

const HomeProblems = styled(Row)`
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  background-color: ${props => props.theme.dark};
  padding: 16px;
`

const IndexPage = () => {
  const [darkMode, setDarkMode] = useState((typeof window !== "undefined" && localStorage.getItem("dark") === "true"))
  const [theme, setTheme] = useState((typeof window !== "undefined" && localStorage.getItem("dark") === "true") ? darkTheme : lightTheme)

  const [state, setState] = useState({
    title: ''
  })

  useEffect(() => {

    // TODO Code here to fetch problems from DB
  }, [])

  const toggleDarkMode = darkModeBool => {
    if (darkModeBool === true) {
      setTheme(darkTheme)
    } else {
      setTheme(lightTheme)
    }
    localStorage.setItem("dark", JSON.stringify(darkModeBool))
    setDarkMode(darkModeBool)
  }

  return <ThemeProvider theme={theme}>
    <SEO title="Home"/>
    <TopNav backPresent toggleDarkMode={toggleDarkMode} darkMode={darkMode} title={state.title}/>
  </ThemeProvider>
}

export default IndexPage
