// ============================================= Express JS =================================================

// * Tidak menggunakan express js
// const http = require("http");
// const PORT = process.env.PORT || 8000; // Ambil port dari environment variable
// const server = http.createServer(function onRequest(req, res) {
//    switch (req.url) {
//       case "/":
//          if (req.method === "GET") {
//             res.writeHead(200);
//             res.end("Hello, World!");
//          }
//          break;
//       case "/api/v1/login":
//          if (req.method === "POST") {
//             res.writeHead(201);
//             res.end("Masoook!");
//          }
//          break;
//       default:
//          res.writeHead(404);
//          res.end("Mau kemana bos?");
//    }
// });

// server.listen(PORT, () => {
//    console.log(`Server nyala di http://localhost:${PORT}`);
// });




// ========================================= Express JS - Methods ===============================================



// ========================================= req/request methods ===========================================


const express = require("express");
const app = express();

// Ambil port dari environment variable
// Dengan nilai default 8000
const { PORT = 8000 } = process.env;

// req.params/Path Parameter => Mengakses data detail dari sebuah data
// (Biasanya digunakan untuk delete, edit, dll)
// http://localhost:8000/cars/Civic
app.get("/cars/:model", (req, res) => {
   res.send(`Hello, ${req.params.model}!`);
});

// http://localhost:8000/api/v1/books/120
app.get("/api/v1/books/:id", (req, res) => {
   console.log("Book id", req.params.id);
   res.send(`Kamu sedang mencari buku dengan id: ${req.params.id}`);
});

// req.query/Query Parameter => Biasanya digunakan untuk searching, filter, sort, dll
// http://localhost:8000/cari?model="Civic&tahun=2020"
app.get("/search", (req, res) => {
   const model = req.query.model;
   const tahun = req.query.Tahun;

   res.send(`Search, Model: ${model}, Tahun: ${tahun}`);
});

// http://localhost:8000/api/v1/books?author=Pramudya
app.get("/api/v1/books", (req, res) => {
   const author = req.query.author; // Deklarasi
   console.log("Search Books name: ", author);
   res.status(200).send(`kamu sedang mencari buku yang ditulis oleh ${author}`);
});

// Atau bisa juga seperti ini

// http://localhost:8000/api/v1/books?author=Aldiaja
app.get("/api/v1/books", (req, res) => {
   console.log("Search Books name: ", req.query.author); // Tanpa pendeklarasian
   res.status(200).send(
      `kamu sedang mencari buku yang ditulis oleh ${req.query.author}`
   );
});



// req.body()/Request Body
// http://localhost:8000/api/v1/books
app.post("/api/v1/books", (req, res) => {
   console.log(req.body);
   res.status(201).send(
      "Terima kasih sudah menambahkan buku di dalam database kami"
   );
});


// ============================================ res/response methods ============================================


// res.json() 
app.get("/data", (req, res) => {
   res.json({
      firstName: "Pramudya",
      lastName: "Reynaldi",
      age: 20,
      hobby: "Reading"
   })
   res.status(500).json({ error: "message" })
})



app.post("/api/v1/login", (req, res) => {
   res.send("Masoook!").status(201);
});

app.use((req, res) => {
   res.status(404).send("Mau kemana bos?");
});

app.listen(PORT, () => {
   console.log(`Express js nyala di http://localhost:${PORT}`);
});

// Dengan menggunakan express js, codingan akan lebih mudah dan cepat



