import { Avatar, Button, Input, Modal, PageHeader } from "antd"
import Icon, { UserAddOutlined } from "@ant-design/icons"
import React, { useContext, useState } from "react"
import styled, { ThemeContext } from "styled-components"
import { Col, Row } from "../Global"
import UserOutlined from "@ant-design/icons/lib/icons/UserOutlined"


const CustomHeader = styled(PageHeader)`
  background-color: ${props => props.theme.light};
`

const PageTitle = styled(Row)`
  color: ${props => props.theme.dark};
`

const ButtonText = styled.div`
  font-size: 14px;
`

const ModelInputCol = styled(Col)`
  padding: 8px;
  justify-content: center;
  align-items: center;
  
  .email-input{
    margin: 16px 0;
  }
`

const BulbFilled = (props) => {
  return <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5.4375 10.5641C3.90625 9.67812 2.875 8.02188 2.875 6.125C2.875 3.29531 5.17031 1 8 1C10.8297 1 13.125 3.29531 13.125 6.125C13.125 8.02188 12.0938 9.67812 10.5625 10.5641V12.375C10.5625 12.6516 10.3391 12.875 10.0625 12.875H5.9375C5.66094 12.875 5.4375 12.6516 5.4375 12.375V10.5641ZM6.125 13.875H9.875C9.94375 13.875 10 13.9312 10 14V14.5C10 14.7766 9.77656 15 9.5 15H6.5C6.22344 15 6 14.7766 6 14.5V14C6 13.9312 6.05625 13.875 6.125 13.875Z"
      fill={useContext(ThemeContext).dark}/>
  </svg>
}

const BulbOutlined = (props) => {
  return <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9.875 13.875H6.125C6.05625 13.875 6 13.9312 6 14V14.5C6 14.7766 6.22344 15 6.5 15H9.5C9.77656 15 10 14.7766 10 14.5V14C10 13.9312 9.94375 13.875 9.875 13.875ZM8 1C5.17031 1 2.875 3.29531 2.875 6.125C2.875 8.02188 3.90625 9.67812 5.4375 10.5641V12.375C5.4375 12.6516 5.66094 12.875 5.9375 12.875H10.0625C10.3391 12.875 10.5625 12.6516 10.5625 12.375V10.5641C12.0938 9.67812 13.125 8.02188 13.125 6.125C13.125 3.29531 10.8297 1 8 1ZM9.99844 9.59062L9.4375 9.91562V11.75H6.5625V9.91562L6.00156 9.59062C4.77188 8.87969 4 7.57031 4 6.125C4 3.91563 5.79063 2.125 8 2.125C10.2094 2.125 12 3.91563 12 6.125C12 7.57031 11.2281 8.87969 9.99844 9.59062Z"
      fill={useContext(ThemeContext).dark}/>
  </svg>
}

const ModalLogo = styled.img`
  object-fit: cover;
  object-position: center;
  width: 256px;
  height: 256px;
  margin-bottom: 24px;
`

export default function TopNav(props) {

  const [state, setState] = useState({
    visible: false,
    password: "",
    email: "",
    loggedIn: false
  })

  const theme = useContext(ThemeContext)

  const handleOk = () => {
    // Handle validation and authentication here
    setState({
      ...state,
      visible: false
    })
  }

  const handleCancel = () => {
    setState({
      ...state,
      visible: false
    })
  }

  const showLoginModal = () => {
    setState({ ...state, visible: true })
  }

  return <div><CustomHeader
    title={<PageTitle>{props.title}</PageTitle>}
    extra={[
      (state.loggedIn ? <Avatar style={{ backgroundColor: theme.secondary, cursor: 'pointer' }} icon={<UserOutlined/>} onClick={() => {
        window.open("/profile", "_self")
      }}/> : <Button size={"small"} key="1" type="primary" style={{ backgroundColor: theme.secondary, cursor: 'pointer' }} onClick={() => {
        showLoginModal()
      }}>
        <ButtonText>Login</ButtonText>
      </Button>),
      (props.darkMode ? <Icon component={BulbOutlined} onClick={() => {
        props.toggleDarkMode(!props.darkMode)
      }}/> : <Icon component={BulbFilled} onClick={() => {
        props.toggleDarkMode(!props.darkMode)
      }}/>)
    ]}
    avatar={{ src: "https://i.ibb.co/XjJQgDL/Frame-1.png" }}
  />
    <Modal
      title="Login"
      visible={state.visible}
      onOk={handleOk}
      closable={false}
      centered={true}
      bodyStyle={{
        backgroundColor: "#F3EDED"
      }}
      okText={"Log In"}
      onCancel={handleCancel}
    >
      <ModelInputCol>
        <ModalLogo src={"https://i.ibb.co/XjJQgDL/Frame-1.png"}/>
        <Input className={"email-input"} placeholder="Email" prefix={<UserAddOutlined/>} value={state.email}/>
        <Input.Password placeholder="Password" value={state.password}/>
      </ModelInputCol>
    </Modal>
  </div>
}
