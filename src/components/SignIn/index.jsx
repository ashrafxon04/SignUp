import React from 'react'
import {Wrapper,Card,Title,Lable, Input, Button, Line, Cycle,IconWrap,Google,Facebook,LinkId,Link, ButtonLink} from '../../style'


const SignIn = (props) => {
  return (
    <Wrapper>
      <Card>
      <Title>Login</Title>
      <Lable>Email</Lable>
      <Input type='text' placeholder='Your name...'></Input>
      <Lable>Password</Lable>
      <Input type='password' placeholder='Your password..'></Input>
      <Button>SIGN UP</Button>
      <br/>
      <br/>
      <Line>
        <Cycle>OR</Cycle>
      </Line>
      <br/>
      <br/>
      <IconWrap>
        <Google>G</Google>
        <Facebook>f</Facebook>
        <LinkId>in</LinkId>
      </IconWrap>
      <Link>Already a user?  <ButtonLink onClick={props.click} href="http://localhost:3000/">LOGIN</ButtonLink></Link>
      </Card>
    </Wrapper>
  )
}

export default SignIn
