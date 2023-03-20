const express = require('express');
const Book = require("./book")
const app = express();
const { PORT = 8000 } = process.env;
const upload = require("./middleware/uploadDisk")
const cloudinary = require("./config/config")

app.use(express.static("public"))
app.use(express.json());

// List
app.get('/api/v1/books', (req, res) => {
    const books = Book.list();
    res.status(200).json(books);
});

// Detail
app.get('/api/v1/books/:id', (req, res) => {
    const book = Book.find(req.params.id);
    if (!book)res.status(404).json({error: "Book not found!"});
    res.status(200).json(book);
});

app.post('/api/v1/books/', (req, res) => {
    const books = Book.create(req.body);
    res.status(201).json(books)
});

// Update/Edit
app.put('/api/v1/books/:id', (req, res) => {
    const book = Book.find(req.params.id);
    if(!book) return res.status(404).json({
        error: "Book not found"
    })

    book.update(req.body);
    res.status(200).json(book);
});

// Delete
app.delete('/api/v1/books/', (req, res) => {
    const book = Book.find(req.params.id);
    if(!book) return res.status(404).json({
        error: "Book not found"
    })
});

// Upload
app.post("/api/v1/upload/", (req, res) => {
    const fileBase64 = req.file.buffer.toString("base64")
    const url = `/uploads ${req.filename}`
    const file = `data:${req.file.mimetype}};Base64,${fileBase64}`
    res
        .status(201)
        .status(`Foto berhasil di upload, silahkan cek URL`, url)
});


app.use((req, res) => {
    res.status(401).send("Mau kemana bos?")
})

app.listen (PORT, () => {
    console.log(`Server nyala di http://localhost:${PORT}`)
});


