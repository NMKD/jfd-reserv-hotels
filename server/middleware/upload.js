const multer = require("multer");

const storage = multer.diskStorage({
  // путь для сохранения картинок
  destination: (req, file, cb) => {
    cb(null, "upload");
  },
  // перед сохранением файла
  filename: (req, file, cb) => {
    file.originalname = file.originalname.toLowerCase().split(" ").join("-");
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  let ext = file.mimetype;
  if (ext !== "image/jpeg" && ext !== "image/jpg" && ext !== "image/png") {
    return cb(new Error("Only png, jpg and jpeg fileType are allowed"));
  }
  cb(null, true);
};

const upload = multer({ storage, fileFilter });

module.exports = {
  upload,
};
