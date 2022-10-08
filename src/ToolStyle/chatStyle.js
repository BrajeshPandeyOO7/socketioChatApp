import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Papers = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 40,
    lineHeight: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '10px',
    borderRadius: '70px',
    fontSize: '18px',
    fontFamily: 'cursive',
    fontWeight: 600,
    padding: '0px 15px',
    width: 'fit-content',
    marginLeft: 'auto'
 }));
export default Papers