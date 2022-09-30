const multer = require('multer');
const { extname, resolve } = require('path');

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

module.exports = {
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'video/mp4') {
      return cb(new multer.MulterError('Arquivo necessita ser mp4 !'));
    }
    return cb(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads'));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${aleatorio}${extname(file.originalname)}`);
    },
  }),
};
