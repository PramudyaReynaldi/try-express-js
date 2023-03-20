const multer = require('multer'); // untuk menghandle file
const path = require('path');

const publicDirectory = path.join(__dirname, "../public");
const uploadDirectory = path.join(publicDirectory, "uploads")

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDirectory)
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random + 1E9)
        cb(null, file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname));
    }
});

module.exports = multer({ storage })