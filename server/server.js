import { app } from "./controller/app.js";
const port = 4000;

app.listen(port, () => console.log(`Server started at localhost:${port}`));
