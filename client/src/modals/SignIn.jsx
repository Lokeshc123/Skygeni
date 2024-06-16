import React, { useState } from 'react'
import styled from 'styled-components'
import { RxCross2 } from "react-icons/rx";
import { login } from '../helper/sendData';
import { useNavigate } from 'react-router-dom';
const SignIn = ({ setShowSignIn, setShowSignUp }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async () => {
        try {
            const user = {
                email,
                password
            }
            const response = await login(user);
            console.log(response)
            if (response.user) {
                navigate('/home')
            }
            else {
                alert('Invalid Credentials')
            }
        }
        catch (error) {
            console.log(error)
        }
    }
    return (
        <Container>
            <InnerContainer>
                <Header>
                    <RxCross2 color='white' style={{
                        marginLeft: 10,
                    }}
                        onClick={() => setShowSignIn(false)}
                    />
                    <Title>SKY GENI</Title>
                </Header>
                <DataContainer>

                    <InputField type="email" placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <InputField type="password" placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />


                </DataContainer>
                <Button onClick={handleLogin}>
                    Sign In
                </Button>
                <AlreadyMember onClick={() => {
                    setShowSignIn(false)
                    setShowSignUp(true)
                }}>
                    Don't have an account? Sign Up
                </AlreadyMember>
            </InnerContainer>
        </Container>
    )
}

export default SignIn

const Container = styled.div`
display : flex ;
position : fixed;
top : 0;
left : 0;
right : 0;
bottom : 0;
z-index :99;

height: 100vh;
width: 100vw;
backdrop-filter: blur(5px);
justify-content : center;
align-items : center;
`
const InnerContainer = styled.div`
display : flex ;    
background-color : #000000;
height : 80%;
width : 35%;
border-radius : 10px;
flex-direction: column;

`
const Header = styled.div`
display : flex ;
/* justify-content : center; */
align-items : center;
justify-content: space-between;
height : 10%;
width : 60%;

`
const Title = styled.h1`
font-size : 20px;
color : #fff;
`

const DataContainer = styled.div`
display : flex ;
flex-direction : column;
justify-content : center;
align-items : center;
height : 60%;
margin-top: 20px;
width : 100%;

`

const InputField = styled.input`
background-color : #1A1A1A;
color : #fff;
font-size : 20px;
height : 50px;
width : 80%;
margin-top: 20px;
padding : 10px 20px;
border : none;
border-radius : 16px;

`

const Button = styled.button`
background-color : #ffffff;
color : #000000;
font-size : 20px;
width : 80%;
margin-top: 20px;
padding : 10px 20px;
border : none;
border-radius : 30px;
align-self: center;
`
const AlreadyMember = styled.h1`
color : gray;
font-size : 20px;
margin-top: 20px;
align-self: center;
cursor: pointer;
`
