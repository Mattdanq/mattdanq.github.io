import {AppBar, Box, Button, Container, Toolbar, Typography} from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';

function TopBar() {

    const bStyle = {
        fontWeight: "bold",
        fontSize: "19px",
        color: '#dbdbd5',
        "&hover": {
            backgroundColor: ""
        },
    };

    return (
        <AppBar position = "static" sx={{backgroundColor: '#302b2b'}}>
            <Toolbar sx={{height: 75}}>
                <Box sx={{display: "flex", justifyContent: "center", gap: 3, width: "100%"}}>
                    <Button color="inherit" variant="text" component={Link} to="/" sx={bStyle}>Home</Button>
                    <Button color="inherit" variant="text" component={Link} to="/About" sx={bStyle}>About Me</Button>
                    <Button color="inherit" variant="text" component={Link} to="/Projects" sx={bStyle}>Projects</Button>
                    <Button color="inherit" variant="text" component={Link} to="/Contact" sx={bStyle}>Contact</Button>                    
                </Box>       
            </Toolbar>
        </AppBar>
    );
}
export default TopBar;