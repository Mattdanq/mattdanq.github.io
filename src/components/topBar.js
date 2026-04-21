import {AppBar, Box} from '@mui/material';
import { useNavigate } from 'react-router-dom';

function TopBar() {
    const navigate = useNavigate();
    return (
        <Box>
            <AppBar position = "static">
                <h2>topbar check</h2>
            </AppBar>
        </Box>
            
    );
}
export default TopBar;