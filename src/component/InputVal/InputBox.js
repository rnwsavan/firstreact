import React from 'react';
import { FormFeedbackBox, InputBoxStyle, SubmitBtn } from './inputBox.style';

function InputBox({ children, error = false, primary = '', errorMessages = '', ...rest }) {
    return (
        <>
            <InputBoxStyle {...rest}>
                {children}
            </InputBoxStyle>

            <FormFeedbackBox error={error}>
                {errorMessages}
            </FormFeedbackBox>

            {/* <SubmitBtn sub_btn={primary}>

            </SubmitBtn> */}

        </>
    );
}

export default InputBox;