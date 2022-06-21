import styled from "styled-components"
import { Input, FormFeedback, Button } from "reactstrap"


export const InputBoxStyle = styled(Input)`
    height: 50px !important;
    border-radius: 0 25px 0 30px !important;
    box-shadow: none !important;
    font-size: 14px !important;
    padding: 10px !important;
    display: block !important;
    width: 100% !important;
    font-weight: 400 !important;
    line-height: 1.5 !important;
    color: #212529 !important;
    background-color: #fff !important;
    background-clip: padding-box !important;
    border: 1px solid #1ec962 !important;
    appearance: none !important;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out !important;


`

export const FormFeedbackBox = styled(FormFeedback)`

color : #cd0f18;
font-weight: 700;
display : ${props => props.error ? "block" : "none"}

`

// export const SubmitBtn = styled(Button)`

// background: #240ed9;
// border: 0;
// padding: 10px 35px;
// color: #fff;
// transition: 0.4s;
// border-radius: 50px;
// text-transform: none;
// margin: 0;
// font-family: inherit;
// font-size: inherit;
// line-height: inherit;
// ${props => props.primary && css ? "background : red" : "color : #1c84e3"}

// `