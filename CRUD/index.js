const express = require("express")
const bookRoutes = require("./src/routes/books")


const app = express()

app.get("/", (req, res) => {
    res.send("server is running")
})


app.use("/books", bookRoutes)
app.listen(9909)