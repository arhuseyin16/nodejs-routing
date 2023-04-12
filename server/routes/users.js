import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Burası /users Anasayfası');
});

router.get('/:slug', (req, res) => {
    res.send(`${req.params.slug} - profil sahibi`);
});

export default router
