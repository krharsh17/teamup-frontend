import React, { useContext, useState } from "react"
import styled, { ThemeContext } from "styled-components"
import { Avatar, Card } from "antd"
import { device } from "../Global"

const { Meta } = Card

const Container = styled.div`
  margin: 8px;
  
  .problem-card {
    border-radius: 4px;
    transition-duration: 0.2s;
  }
  
  .problem-card:hover {
    cursor: pointer;
    box-shadow: 4px 4px 24px ${props => props.theme.shadow};
  }
`

const Title = styled.p`
  font-size: 16px;
  
  @media ${device.tablet} {
    font-size: 22px;
  }
`

const Description = styled.p`
  font-size: 14px;
  
  @media ${device.tablet} {
    font-size: 18px;
  }
`

const ProblemCard = (props) => {
  const theme = useContext(ThemeContext)

  return <Container onClick={() => {window.open("/problem/?" + props.problemId, "_self")}}>
    <Card className={'problem-card'} style={{ width: 300, marginTop: 16 }} loading={props.loading}>
      <Meta
        avatar={
          <Avatar style={{ backgroundColor: theme.secondary }}>{props.title.slice(0, 1)}</Avatar>
        }
        title={<Title>{props.title}</Title>}
        description={<Description>{props.description}</Description>} />
    </Card>
  </Container>

}

export default ProblemCard