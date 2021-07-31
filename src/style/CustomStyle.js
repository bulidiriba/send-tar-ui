import {makeStyles} from '@material-ui/core';
import {createTheme} from '@material-ui/core/styles';

export const theme = createTheme({
    palette:{
        secondary:{
            main: '#2e9ad6'
        }
    }
})


export const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#233655',
        minHeight: '100vh',
    },
    fileUpload: {
        backgroundColor: '#0a2042',
    },

    fileUploadHeader: {
        color: '#b9bdc1',
    }

}));