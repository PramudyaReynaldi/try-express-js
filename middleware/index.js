// ====================================== Express JS Topic 2 ===============================================

const express = require("express");
const app = express();

const { PORT = 8000 } = process.env;

app.use(express.urlencoded());

function isAdmin(req, res, next) {
   if (req.query.iam === "admin") {
      next();
      return;
   }

   res.status(401).send("Kamu bukan admin");
}

// GET /api/v1/books?author=
app.get("/api/v1/books", isAdmin, (req, res) => {
   console.log(req.query);
   res.status(200).send(
      `Kamu sedang mencari buku yang ditulis oleh ${req.query.author}`
   );
});

// POST /api/v1/books
app.post("/api/v1/books", isAdmin, (req, res) => {
   console.log(req.body);
   res.status(201).send(
      "Terima kasih sudah menambahkan buku di dalam database kami"
   );
});

// PUT /api/v1/books/:id
app.put("/api/v1/books/:id", isAdmin, (req, res) => {
   console.log(req.body);
   res.status(200).send("Sudah diupdate!");
});

app.listen(PORT, () => {
   console.log(`Express nyala di http://localhost:${PORT}`);
});



// // Aplication  level middleware
// app.use((req, res, next) => {
//    console.log("Time: ", Date.now())
//    next()
// })

