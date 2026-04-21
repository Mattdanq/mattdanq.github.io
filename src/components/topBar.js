import {AppBar, Box, Button, Container, Toolbar} from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';

function TopBar() {
    const navigate = useNavigate();
    return (
        <Box sx = {{flexGrow: 1, bgcolor: "black"}}>
            <AppBar position = "static">
                <Toolbar>
                    <Button color="inherit" variant="text" component={Link} to="/">Home</Button>
                    <Button color="inherit" variant="text" component={Link} to="/About">About Me</Button>
                    <Button color="inherit" variant="text" component={Link} to="/Projects">Projects</Button>
                    <Button color="inherit" variant="text" component={Link} to="/Contact">Contact</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
export default TopBar;