import TopBar from "../components/topBar";
import {Box, Typography, Chip, Paper} from "@mui/material";

const About = () => {
    const skills = {
        tags: ["Java", "Python", "C/C++", "JavaScript", "TypeScript", "F#", "Go", "React", "Node.js",
            "Git", "VSCode", "Intellij", "VMWare", "Maven", "Unreal Engine", "Pandas", "Numpy",
            "Matplotlib", "Scikit-learn", "JavaFX"
        ],
    };
    return(
        <div>
            <TopBar />
            <Box
            sx={{
                backgroundColor: "#fffaeb",
                minHeight: "100vh",
                py: 10,
                px: 3
            }}
            >
                <Paper
                    elevation={8}
                    sx={{
                    maxWidth: 800,
                    mx: "auto",
                    p: 5,
                    borderRadius: 4,
                    textAlign: "center",
                    backgroundColor: "#fffdf5"
                    }}
                >
                    <Typography variant="h4" gutterBottom>
                    About Me
                    </Typography>

                    <Typography sx={{ mt: 2, lineHeight: 1.8, textAlign:"left"}}>
                    I am a recent software engineer graduate with a strong foundation
                    in computer science and a passion for building practical, efficient
                    solutions. I recently graduated from the University of Illinois Chicago with a
                    Bachelor's degree in Computer Science, where I developed experience across
                    machine learning, systems programming, and full-stack development.
                    I’ve worked on projects ranging from training machine learning models
                    to classify datasets, to implementing graph algorithms for navigation
                    systems, to building interactive applications using modern frameworks.
                    </Typography>

                    <Typography sx={{ mt: 2, lineHeight: 1.8 }}>
                    Recently, I’ve also been exploring large language models and evaluating
                    AI-generated outputs, giving me insight into how modern AI systems work.
                    I’m currently looking for opportunities where I can contribute, learn,
                    and grow as a developer while building meaningful software in a new space
                    where artificial intelligence is key to today's success.
                    </Typography>
                </Paper>
                <Paper
                    elevation={8}
                    sx={{
                    maxWidth: 800,
                    mx: "auto",
                    p: 5,
                    borderRadius: 4,
                    textAlign: "center",
                    backgroundColor: "#fffdf5",
                    mt: 4
                    }}
                >
                    <Typography variant="h4" gutterBottom>
                    Skills and Technologies
                    </Typography>
                    <Box sx={{ mt: 2, display: "flex", gap: 1, flexWrap: "wrap" }}>
                        {skills.tags.map((tag) => (
                            <Chip key={tag} label={tag} sx={{ backgroundColor: "#b8b29e", color: "white", fontWeight:"bold" }} />
                        ))}
                    </Box>
                </Paper>
            </Box>

        </div>
    );
}

export default About;