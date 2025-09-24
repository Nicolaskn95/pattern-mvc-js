import express from "express";
import session from "express-session";
import flash from "express-flash";
import LoginRouter from "./src/routes/loginRoutes.js";
import VehicleRouter from "./src/routes/vehicleRoutes.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuração de sessão para flash messages
app.use(
  session({
    secret: "sistema-veiculos-secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);

app.use(flash());

app.set("view engine", "ejs");
app.set("views", "./src/views");

// Rotas
app.use("/login", LoginRouter);
app.use("/vehicles", VehicleRouter);

app.get("/", (req, res) => {
  res.redirect("/vehicles");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
