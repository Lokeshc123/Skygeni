import React, { useState } from 'react'
import styled from 'styled-components'
import SignIn from '../modals/SignIn'
import SignUp from '../modals/SignUp'
const Landing = () => {
    const [showSignIn, setShowSignIn] = useState(false)
    const [showSignUp, setShowSignUp] = useState(false)
    return (
        <Container style={{
            backgroundColor: showSignIn || showSignUp ? "#1A1A1A" : "#000000"
        }}>
            <LeftSide>
                <Heading>
                    SKY GENI
                </Heading>
            </LeftSide>
            <RightSide>
                <Header>
                    Let's get started
                </Header>
                <SubHeading>
                    Join us and explore the world of AI
                </SubHeading>
                <ButtonContainer>
                    {showSignIn && <SignIn setShowSignIn={setShowSignIn} setShowSignUp={setShowSignUp} />}
                    {showSignUp && <SignUp setShowSignUp={setShowSignUp} />}
                    <SignInButton onClick={() => setShowSignIn(true)}>
                        Sign In
                    </SignInButton>
                    <SignUpButton onClick={() => setShowSignUp(true)}>
                        Sign Up
                    </SignUpButton>
                </ButtonContainer>
                <Footer>
                    By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.
                </Footer>
            </RightSide>
        </Container>
    )
}

export default Landing

const Container = styled.div`
display : flex ;
justify-content : center;
align-items : center;
height : 100vh;
width : 100%;

background-color: #000000;
`

const LeftSide = styled.div`
display : flex ;
flex-direction : column;
justify-content : center;
align-items : center;
height : 100vh;
width : 60%;
`
const RightSide = styled.div`
display : flex ;
flex-direction : column;
/* justify-content : center; */
/* align-items : center; */
height : 65vh;
width : 40%;

`
const Heading = styled.h1`
color : #ffffff;
font-size : 150px;
margin-left: 30px;
margin-top: 0;
margin-bottom: 20px;
`
const Header = styled.h1`
color : #ffffff;
font-size : 50px;
margin-left: 50px;
margin-top: 0;
margin-bottom: 10px;
`
const SubHeading = styled.h1`
color : gray;
font-size : 25px;
margin-left: 50px;
margin-top: 0;
`
const SignInButton = styled.button`
background-color : #ffffff;
color : #000000;
font-size : 20px;
margin-left: 50px;
width : 300px;
margin-top: 20px;
padding : 10px 20px;
border : none;
border-radius : 30px;
cursor : pointer;
`
const SignUpButton = styled.button`
background-color : #1DA1F2;
color : #ffffff;
font-size : 20px;
margin-left: 50px;
margin-top: 20px;
width : 300px;
padding : 10px 20px;
border : none;
border-radius : 30px;

cursor : pointer;
`
const ButtonContainer = styled.div`
display : flex ;
flex-direction : column;
justify-content : center;
/* align-items : center; */
height : 40%;
margin-top: 30px;
`

const Footer = styled.h1`
color : gray;
font-size : 12px;
margin-left: 50px;
margin-top: 20px;
width : 300px;
`
