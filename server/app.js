import express from 'express';
import users from "./routes/users.js";
import expressLayouts from 'express-ejs-layouts';
import * as path from "path";

const __dirname = path.resolve();
const app = express();
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.set('layout', 'layout/layout');
app.use(expressLayouts);

app.get('/', (req, res) => {
   // res.send('hello word2!');
   res.render('index', {   //ejs library kuruldu ve index.ejs dosyasında title ve heading gönderildi.
      title: 'Site Basligi',
      heading: 'Hosgeldiniz, app.js Anasayfa'
   });
});

app.get('/contact', (req, res) => {
   // res.send('hello word2!');
   res.render('contact', {   //ejs library kuruldu ve index.ejs dosyasında title ve heading gönderildi.
      title: 'Iletisim',
      heading: 'Iletisim Sayfası'
   });
});

app.post('/contact', (req, res) => {
   const {name} = req.body
   res.render('contact', {
      heading: `Mesajini aldim ${name}`
   });
});

// daha iyi bir düzen için routing işlemini ayrı klasörden aldık.
app.use('/users', users);

//en alt katmanda yazılmalıki, belirlenmemiş urlde çalışsın.
app.use((req, res) => {
   res.status(404).send('Sayfa Bulunamdı');
});

app.listen(port, () => console.log(`Uygulama app.js altında ${port} portunda çalısyor`));
