import styled from "styled-components"
import {Input, FormFeedback} from "reactstrap"


export const InputBoxStyle = styled(Input)`



`

export const FormFeedbackBox = styled(FormFeedback)`

color : #cd0f18;
font-weight: 700;
display : ${props => props.error ? "block" : "none"}



`