const express = require("express")
const app = express()
const { PORT = 8000 } = process.env

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render("index.ejs", {
        name: req.query.name || "Aldi"
    })
})


app.listen(PORT, () => {
    console.log(`Express nyala di http://localhost:${PORT}`);
});