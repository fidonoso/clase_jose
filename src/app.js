import express from "express";
import cors from "cors";
import morgan from "morgan";
import usersRoutes from "./routes/users.routes.js";
import postsRoutes from "./routes/post.routes.js";
import { sanitizeMiddleware } from "./middlewares/sanitize.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();

app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use(sanitizeMiddleware);
app.use("/users", usersRoutes);
app.use("/posts", postsRoutes);

app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

app.use(errorHandler);

export default app;
