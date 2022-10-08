import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        textDecoration: 'none',
        color: 'white',
        fontSize: '29px',
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
        letterSpacing: '1px'
    },
    calls: {
        display: 'flex',
        justifyContent: 'end'
    },
    status: {
        display: 'flex',
        justifyContent: 'center'
    },
    bar: {
        '& .MuiToolbar-root': {
            background: '#72bf19bd'
        }
    }

});

export default useStyles;