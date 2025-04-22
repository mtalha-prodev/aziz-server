import multer, { diskStorage } from "multer";
import path from "path";
import randomstring from "randomstring";

const fileType = (file, cb) => {
  let allow = /jpeg|png|jpg|gif/;

  let isMatch = allow.test(path.extname(file.originalname).toLowerCase());

  let mime = allow.test(file.mimetype);
  if (isMatch && mime) {
    cb(null, true);
  } else {
    cb("Error: File must be an image", false);
  }
};

export const upload = multer({
  storage: diskStorage({
    destination: "./public/profile",
    filename: (req, file, cb) => {
      let p1 = randomstring.generate(8);

      let ext = path.extname(file.originalname).toLowerCase();

      cb(null, file.fieldname + "_" + p1 + ext);
    },
  }),
  limits: { fileSize: 1000000 * 2 }, // 2MB
  fileFilter: (req, file, cb) => {
    fileType(file, cb);
  },
}).single("profile");
