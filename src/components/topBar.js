import {AppBar, Box, Button, Toolbar} from '@mui/material';
import {NavLink } from 'react-router-dom';

function TopBar() {

    const bStyle = {
        fontWeight: "bold",
        fontSize: "19px",
        color: '#dbdbd5',
        "&.active": {backgroundColor:"#211f1f"},
        "&:hover": {
            backgroundColor: "#453f3f",
        },
    };

    return (
        <AppBar position = "static" sx={{backgroundColor: '#302b2b'}}>
            <Toolbar sx={{height: 75}}>
                <Box sx={{display: "flex", justifyContent: "center", gap: 3, width: "100%"}}>
                    <Button color="inherit" variant="text" component={NavLink} to="/" sx={bStyle}>Home</Button>
                    <Button color="inherit" variant="text" component={NavLink} to="/About" sx={bStyle}>About Me</Button>
                    <Button color="inherit" variant="text" component={NavLink} to="/Projects" sx={bStyle}>Projects</Button>
                    <Button color="inherit" variant="text" component={NavLink} to="/Contact" sx={bStyle}>Contact Me</Button>                    
                </Box>       
            </Toolbar>
        </AppBar>
    );
}
export default TopBar;