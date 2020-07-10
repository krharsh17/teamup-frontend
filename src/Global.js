import styled from "styled-components"

const lightTheme = {
  name: 'light',
  primary: "#F7873D",
  primary50: "rgba(247,135,61,0.5)",
  secondary: "#E03C85",
  dark: "#F3EDED",
  light: "#363531",
  shadow: "rgba(54,53,49,0.25)"
}

const darkTheme = {
  name: 'dark',
  primary: "#E03C85",
  primary50: "rgba(255,255,255,0.5)",
  secondary: "#F7873D",
  dark: "#363531",
  light: "#F3EDED",
  shadow: "rgba(243,237,237,0.25)"
}

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "500px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px"
}


const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
}

const Row = styled.div`
  display: flex;
  flex-direction: row;
`

const Col = styled.div`
  display: flex;
  flex-direction: column;
`

export { lightTheme, darkTheme, device, Row, Col }