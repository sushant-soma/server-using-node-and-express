import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Server ready!</h1>");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
