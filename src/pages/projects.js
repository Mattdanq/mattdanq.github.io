import TopBar from "../components/topBar";
import {Box, Container, Typography, Card, CardContent, CardActions, Button, Grid, Chip} from "@mui/material";

const Projects = () => {
    const otherProjects = [
        {
            title: "Poker Hand Classification",
            description:
            "Built machine learning models using Scikit-learn (SVM, KNN) to classify poker hands. Processed and cleaned large datasets to improve prediction accuracy.",
            tags:["Machine Learning", "Python", "Matplotlib", "Scikit-learn"],
        },
        {
            title: "Distance Processing (Dijkstra’s Algorithm)",
            description:
            "Developed a campus navigation system in C++ using graph structures and Dijkstra’s algorithm to compute optimal paths between locations.",
            tags:["C++", "Data Structures", "Algorithms"],
        },
        {
            title: "Portfolio Website",
            description:
            "Build a portfolio website as a means to show off my work by creating a react SPA application",
            tags:["React", "CSS", "HTML", "Git", "JavaScript"],
        },
        {
            title: "Image Processing (F#)",
            description:
            "Built functional image processing modules with performance optimizations and automated graphics generation using ImageLibrary.",
            tags:["F#", "Higher-order Programming"],
        },
    ];
    const featuredProject = {
        name: "Baccarat JavaFX",
        description:
            "A JavaFX-based Baccarat game with interactive UI, betting logic, and real-time gameplay updates. Built for a university class in order to practice the usage of maven software.",
        link: "https://github.com/Mattdanq/Baccarat-Game-Javafx",
        tags: ["Java", "JavaFX", "Maven", "UI"],
    };
    return (
        <div>
            <TopBar/>
            <Box sx={{ py: 6 }}>
                <Container maxWidth="lg">

                    {/* Header */}
                    <Typography variant="h3" fontWeight="bold" gutterBottom sx={{textAlign:"center"}}>
                    Featured Project
                    </Typography>

                    {/* Featured Project */}
                    <Card
                    sx={{
                        mb: 5,
                        p: 2,
                        borderRadius: 3,
                    }}
                    >
                        <CardContent>
                            <Typography variant="h5" fontWeight="bold">
                            {featuredProject.name}
                            </Typography>

                            <Typography sx={{ mt: 1, opacity: 0.85 }}>
                            {featuredProject.description}
                            </Typography>

                            <Box sx={{ mt: 2, display: "flex", gap: 1, flexWrap: "wrap" }}>
                            {featuredProject.tags.map((tag) => (
                                <Chip key={tag} label={tag} sx={{ backgroundColor: "#b8b29e", color: "white" }} />
                            ))}
                            </Box>
                        </CardContent>

                        <CardActions>
                            <Button
                            variant="contained"
                            href={featuredProject.link}
                            target="_blank"
                            sx={{fontWeight:"bold", fontSize:"15px", backgroundColor: "#554646"}}
                            >
                            View Project
                            </Button>
                        </CardActions>
                    </Card>

                    <Typography variant="h4" fontWeight="bold" gutterBottom >
                    Other Projects
                    </Typography>

                    {/* Grid of Other Projects */}
                    <Grid container spacing={3}>
                        {otherProjects.map((project, idx) => (
                            <Grid item xs key={idx}>
                                <Card sx={{ height: "100%", width: 550, borderRadius: 3 }}>
                                    <CardContent>
                                    <Typography variant="h5" fontWeight="bold">
                                        {project.title}
                                    </Typography>

                                    <Typography sx={{ mt: 1, opacity: 0.7 }}>
                                        {project.description}
                                    </Typography>
                                    <Box sx={{ mt: 2, display: "flex", gap: 1, flexWrap: "wrap" }}>
                                    {project.tags.map((tag) => (
                                        <Chip key={tag} label={tag} sx={{ backgroundColor: "#b8b29e", color: "white" }} />
                                    ))}
                                    </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>

                </Container>
            </Box>
        </div>
    );
}

export default Projects;