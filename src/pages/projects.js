import TopBar from "../components/topBar";

const Projects = () => {
    const projects = [
        {
            title: "Poker Hand Classification",
            description:
            "Built machine learning models using Scikit-learn (SVM, KNN) to classify poker hands. Processed and cleaned large datasets to improve prediction accuracy.",
        },
        {
            title: "Distance Processing (Dijkstra’s Algorithm)",
            description:
            "Developed a campus navigation system in C++ using graph structures and Dijkstra’s algorithm to compute optimal paths between locations.",
        },
        {
            title: "Baccarat JavaFX Game",
            description:
            "Created a fully functional JavaFX card game with modular architecture and Maven-based version control.",
        },
        {
            title: "Image Processing (F#)",
            description:
            "Built functional image processing modules with performance optimizations and automated graphics generation using ImageLibrary.",
        },
    ];
    return (
        <div>
            <TopBar/>
            <h2>If you see this the projects page correctly loading on github pages</h2>
        </div>
    );
}

export default Projects;