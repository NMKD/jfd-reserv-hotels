const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const config = require("config");
const chalk = require("chalk");
const routes = require("./routes");
const initDataBase = require("./start/initDataBase");

const app = express();
const PORT = config.get("port") ?? 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("/api", routes);
app.use("/api/file/upload", express.static(path.join(__dirname, "upload")));

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(path.join(__dirname, "client")));
  const indexPath = path.join(__dirname, "client", "index.html");
  app.get("*", (req, res) => {
    res.sendFile(indexPath);
  });
}

async function start() {
  try {
    mongoose.connection.once("open", () => {
      initDataBase();
    });
    await mongoose.connect(config.get("mongoUri"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    app.listen(8080, () =>
      console.log(chalk.green(`Server has been started on port ${PORT}...`))
    );
  } catch (e) {
    console.log(chalk.red(e.message));
    process.exit(1);
  }
}

start();
