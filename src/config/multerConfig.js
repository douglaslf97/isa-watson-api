const multer = require("multer");
const path = require("path");
const crypto = require("crypto");
/*

*/
module.exports = multer({
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, "..", "..", "tmp", "./uploads"),
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err);
        const fileName = `${hash.toString("hex")}-${file.originalname}`;
        cb(null, fileName);
      });
    }
  }),
  fileFilter: (req, file, cb) => {
    const isAccepted = ["image/png", "image/jpg", "image/jpeg"].find(
      formatoAceito => formatoAceito === file.mimetype
    );
    if (isAccepted) {
      return cb(null, true);
    }
    return cb(null, false);
  }
});
