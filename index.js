import express from 'express';
import LoginRouter from './src/routes/loginRoutes.js';

const app = express();

app.use(express.json());

app.use(LoginRouter);

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


