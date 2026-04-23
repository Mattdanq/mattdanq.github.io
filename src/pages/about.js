import TopBar from "../components/topBar";
import {Box, Typography, Chip} from "@mui/material";

const About = () => {
    const skills = {
        Languages: ["Java", "Python", "C/C++", "JavaScript", "TypeScript", "F#", "Go"],
        Frameworks: ["React", "Node.js"],
        Tools: ["Git", "Linux", "VS Code", "IntelliJ", "VMware", "Maven"],
        Libraries: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn", "JavaFX"],
    };
    return(
        <div>
            <TopBar />
            <Box sx={{ mt: 10, px: 4 }}>
                <Typography variant="h4" textAlign="center">
                    Skills
                </Typography>

                <Box sx={{ mt: 4 }}>
                    {Object.entries(skills).map(([category, items]) => (
                    <Box key={category} sx={{ mb: 3 }}>
                        <Typography variant="h6">{category}</Typography>

                        <Box sx={{ mt: 1, display: "flex", flexWrap: "wrap", gap: 1 }}>
                        {items.map((skill) => (
                            <Chip key={skill} label={skill} />
                        ))}
                        </Box>
                    </Box>
                    ))}
                </Box>
            </Box>
        </div>
    );
}

export default About;