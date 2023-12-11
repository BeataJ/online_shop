const multer = require('multer');
const uuid = require('uuid');

const upload = multer({
    storege: multer.diskStorage({
        destination: function(req, file, cb){
            cb(null, 'product-data/images')
        },
        filename: function (req, file, cb) {
            cb(null, uuid() + '-' + file.originalname);
        }
    })
});

const configuredMulterMiddleware = upload.single('image');

module.exports = configuredMulterMiddleware;