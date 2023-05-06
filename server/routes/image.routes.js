const express = require("express");
const { upload } = require("../middleware/upload");
const authMiddleware = require("../middleware/auth.middleware");
const router = express.Router({ mergeParams: true });

router.post(
  "/upload",
  authMiddleware,
  upload.array("image", 6),
  async (req, res) => {
    try {
      const reqFiles = [];
      const endPointUrl = `http://localhost:8080/api/file/upload/`;
      req.files.forEach((item) => {
        reqFiles.push(endPointUrl + item.originalname);
      });
      res.send({ data: reqFiles });
    } catch (error) {
      res.send({ message: "Ошибка при загрузке файла" });
    }
  }
);

module.exports = router;
