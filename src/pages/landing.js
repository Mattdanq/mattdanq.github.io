import TopBar from '../components/topBar';
import {Avatar, Box, Button, Card, CardContent, Typography} from '@mui/material';
import myPicture from "../avatar.jpg";
import {NavLink } from 'react-router-dom';

const Landing = () => {
   

    return(
        <div>
            <TopBar />
            <Box sx={{ textAlign: "center", mt: 12 }}>
                <Avatar src={myPicture}
                    sx={{width: 120, height: 120, margin: "0 auto", mb: 2 }}
                />
                <Typography variant="h3" fontWeight={600}>
                    Hi, I’m Matthew Danque
                </Typography>
                <Typography variant="h6" sx={{ mt: 2, maxWidth: 600, mx: "auto" }}>
                    A Software Engineering graduate who enjoys solving real-world problems through code.
                    I build efficient, user-focused software applications — explore my projects to see my work.
                </Typography>
                <Button variant="contained" component={NavLink} to="/Projects" 
                    sx={{mt: 4, backgroundColor:"#554646", borderRadius: '20px', fontWeight: "bold", fontSize: "17px"}}
                    >
                        Explore My Projects
                    </Button>
            </Box>
            
        </div>
    );
}

export default Landing;