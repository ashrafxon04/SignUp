import React from 'react'
import {Second, Card, Title, Lable, Input, Button, Line, Cycle, IconWrap, Google, Facebook, LinkId, Link, Lablee, Checkbox, Div, End, Forgot, ButtonLink} from '../../style'


const SignUp = (props) => {
  return (
    <Second>
      <Card>
      <Title>Sign Up</Title>
      <Lable>Email</Lable>
      <Input type='text' placeholder='Your name...'></Input>
      <Lable>Password</Lable>
      <Input type='password' placeholder='Your password..'></Input>
      <Lablee>
        <Checkbox type='checkbox'></Checkbox>
       <Div>Rememer me?</Div> 
      </Lablee>
      <Button>SIGN UP</Button>
      <End>
        <Forgot>Forgot Password?</Forgot>
      </End>
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
      <Link>Already a user? <ButtonLink onClick={props.click} href="http://localhost:3000/">SIGN UP</ButtonLink></Link>
      </Card>
    </Second>
  )
}

export default SignUp
