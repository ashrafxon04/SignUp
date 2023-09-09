import styled from 'styled-components';

export const Wrapper = styled.div`
    width:400px;
    height:500px;
    background-color:#fff;  
    box-shadow: 0 0 15px #000;
    margin: 0 auto;
    border-radius: 20px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`;
export const Second = styled.div`
    width:400px;
    height:530px;
    background-color:#fff;  
    box-shadow: 0 0 15px #000;
    margin: 0 auto;
    border-radius: 20px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`;
export const Card = styled.div`
    display:flex;
    flex-direction:column;
    align-item: center;
    justfy-content: center;
    width:320px;
    // height:500px;
`;
export const Title = styled.h2`
    font-family: serif;
`;
export const Lable = styled.h4`
    font-family: serif;
`;
export const Input = styled.input`
    height: 30px;
    position:relative;
    bottom:15px;
    border-radius:5px;
    outline: none;
    padding: 0px 5px;
    `;
export const Lablee = styled.label`
    display:flex;
    position:relative;
    bottom:10px;
    right:4px;
    font-family:serif;
`;
export const Checkbox = styled.input`
    width:20px;
    height:20px;
`;
export const Div = styled.div`
    display:flex;
    align-items: center;
`;
export const End = styled.div`
    display:flex;
    align-items: center;
    justify-content:flex-end;
`;
export const Forgot = styled.div`
    font-family:serif;
    margin-top:10px;
`;
export const Button = styled.button`
    width: 320px;
    height:35px;
    border-radius: 5px;
    background-color: pink;
    border:none;
    box-shadow: 0 0 5px black;
    outline:none;
`;
export const Line = styled.div`
    width:320px;
    height:2px;
    background-color: #000;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`;
export const Cycle = styled.div`
    width:30px;
    height:30px;
    border-radius:40%;
    border:2px solid #000;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:#fff;
    position:relative;
    bottom:15px;
`
export const IconWrap = styled.div`
    width:100%;
    height:40px;
    display:flex;
    align-items: center;
    justify-content: space-evenly;
`;
export const Google = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    border:3px solid red;
    display:flex;
    align-items: center;
    justify-content: center;
    font-size:30px;
    font-family: cursive;
    color: red;
    cursor:pointer;
`;
export const Facebook = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    border:3px solid blue;
    display:flex;
    align-items: center;
    justify-content: center;
    font-size:30px;
    font-family: cursive;
    color: blue;
    cursor:pointer;
`;
export const LinkId = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    border:3px solid blue;
    display:flex;
    align-items: center;
    justify-content: center;
    font-size:30px;
    font-family: cursive;
    color: blue;
    cursor:pointer;
`;
export const Link = styled.p`
    text-align:center;
`;
export const ButtonLink = styled.button`
    // text-align:center;
    border:none;
    outline: none;
    background-color: #fff;
    cursor:pointer;
`;