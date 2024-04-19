import express, { Application} from 'express';
import cors, { CorsOptions } from "cors";
import Routes from './routes';

const port: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const app: Application = express();

const corsOptions: CorsOptions = {
  origin: `http://localhost:${port}`
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

new Routes(app);

app
  .listen(port, "localhost", function () {
    console.log(`Server is running on port ${port}.`);
  })
  .on("error", (err: any) => {
    if (err.code === "EADDRINUSE") {
      console.log("Error: address already in use");
    } else {
      console.log(err);
    }
  });
  