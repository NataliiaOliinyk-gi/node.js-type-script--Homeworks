import express from "express";
import cors from "cors";

// import App from "./db/App.js";

const startServer = () => {
     const app = express();

    app.use(cors());
    app.use(express.json());



    app.use((req, res) => {
        res.status(404).json({
            message: `${req.url} not found`
        });
    });

    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`Server running on ${port} port`));
};

export default startServer;