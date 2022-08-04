import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';
import { resetAlert } from '../../Redux/Action/alert.action';
function Alert(props) {
    const alert = useSelector(state => state.alert)
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const dispatch = useDispatch()

    useEffect(() => {
        if (alert.text !== '') {
            enqueueSnackbar(alert.text, {
                variant: alert.color,
                anchorOrigin: {  
                    vertical: 'bottom',
                    horizontal: 'right'
                }
              });
              setTimeout(dispatch(resetAlert()) , 2000); 
        }}, 
        
    [alert.text])

    return (
        <div>
            
        </div>
    );
}

export default Alert;