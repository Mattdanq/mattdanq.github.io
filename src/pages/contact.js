import TopBar from "../components/topBar";
import { Box, Typography, Button, Paper } from "@mui/material";

const Contact = () => {
    return(
        <div>
            <TopBar/>
            <Box sx={{ backgroundColor: "#fffaeb", minHeight: "100vh", py: 8 }}>

                {/* Top Section */}
                <Paper
                    elevation={8}
                    sx={{
                    maxWidth: 600,
                    mx: "auto",
                    p: 4,
                    mb: 6,
                    textAlign: "center",
                    borderRadius: 3,
                    backgroundColor: "#fffdf5"
                    }}
                >
                    <Typography variant="h4" sx={{fontWeight:"505"}}>Get In Touch</Typography>

                    <Typography sx={{ mt: 2, mb: 4, fontSize:"18px"}}>
                    I’m always open to new opportunities and collaborations. Feel free to email me or connect with me on LinkedIn.
                    </Typography>

                    <Box
                    sx={{
                        mt: 4,
                        display: "flex",
                        justifyContent: "center",
                        gap: 2,
                        flexWrap: "wrap"
                    }}
                    >
                        <Button
                            variant="contained"
                            href="mailto:mattdanque@gmail.com"
                            
                            sx ={{fontWeight:"bold", fontSize:"17px", backgroundColor:'#554646'}}
                        >
                            Email Me
                        </Button>

                        <Button
                            variant="contained"
                            href="https://www.linkedin.com/in/matt-danque/"
                            target="_blank"
                            sx ={{fontWeight:"bold", fontSize:"17px", backgroundColor:'#554646'}}
                        >
                            LinkedIn
                        </Button>
                    </Box>
                </Paper>

                {/* Bottom Section */}
                <Paper
                    elevation={7}
                    sx={{
                    maxWidth: 600,
                    mx: "auto",
                    p: 3,
                    textAlign: "center",
                    borderRadius: 3,
                    backgroundColor: "#fffdf5"
                    }}
                >
                    <Typography variant="h4" sx={{fontWeight:"505"}}>Want to see more of my work?</Typography>

                    <Typography sx={{ mt: 2, mb: 4, fontSize:"18px"}}>
                    Check out the rest of my projects on GitHub!
                    </Typography>

                    <Button
                    sx={{ mt: 10 }}
                    variant="contained"
                    href="https://github.com/Mattdanq"
                    target="_blank"
                    sx ={{fontWeight:"bold", fontSize:"17px", backgroundColor:'#554646'}}
                    >
                    View My GitHub
                    </Button>
                </Paper>

                </Box>
        </div>
    );
}

export default Contact;