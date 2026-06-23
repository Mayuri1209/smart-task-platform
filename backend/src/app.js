// const express = require("express");

// const cors = require("cors");

// const authRoutes = require("./routes/authRoutes");

// const taskRoutes = require("./routes/taskRoutes");

// const app = express();

// app.use(cors());

// app.use(express.json());

// app.use(
//  "/api/auth",
//  authRoutes
// );

// app.use(
//  "/api/tasks",
//  taskRoutes
// );

// module.exports = app;

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const authRoutes =
require("./routes/authRoutes");

const taskRoutes =
require("./routes/taskRoutes");


const app = express();

app.use(express.json());

app.use(cors());

app.use(helmet());

app.use(morgan("dev"));


// Routes

app.use(
 "/api/auth",
 authRoutes
);

app.use(
 "/api/tasks",
 taskRoutes
);



// Health Check

app.get("/", (req, res) => {

 res.json({

   success: true,

   message:
     "Smart Task API Running"

 });

});

module.exports = app;

