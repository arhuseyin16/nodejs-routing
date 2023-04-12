import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('hello word basic.js!');
});

app.get('/user/:name', (req, res) => {
   res.json({
      username: req.params.name
   });
});

//en alt katmanda yazılmalıki, belirlenmemiş urlde çalışsın.
app.use((req, res) => {
    res.status(404).send('Sayfa Bulunamdı');
});

app.listen(port, () => console.log(`Uygulama Basic.js altında ${port} portunda çalısyor`));
