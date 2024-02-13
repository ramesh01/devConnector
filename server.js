const express = require("express");
const app = express();
const connectDB = require("./config/db");

connectDB();

// Init middleware

app.use(express.json());

app.get("/", (req, res) => res.send("API is running"));

app.use("/api/users", require("./routes/users"));
app.use("/api/posts", require("./routes/posts"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/profile", require("./routes/profile"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('servers is running!!'))