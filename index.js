import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Get method success!</h1>");
})

app.post("/post", (req, res) => {
    res.send("Post method success");
})

app.put("/put", (req, res) => {
    res.send("Put method success");
})

app.patch("/patch", (req, res) => {
    res.send("Patch method success");
})

app.delete("/delete", (req, res) => {   
    res.send("Delete method success");
} )

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
