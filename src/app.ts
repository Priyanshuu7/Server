import express, { Request, Response } from 'express';


import userRoutes from "./routes/user.route";

const app = express();
const port = process.env.PORT

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use("/users", userRoutes);
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

export default app;