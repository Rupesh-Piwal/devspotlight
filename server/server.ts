import express, { Request, Response } from "express";
import "dotenv/config";

const app = express();
const PORT: number = Number(process.env.PORT) || 5000;

app.use((req: Request, res: Response) => {
  res.json({
    message: "I will make it...",
  });
});

app.listen(PORT, () => {
  console.log(`app is running on ${PORT} port`);
});
