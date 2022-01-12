import { app } from "./controller/app.js";
const port = 3000;

app.listen(port, () => console.log(`Server started at localhost:${port}`));
