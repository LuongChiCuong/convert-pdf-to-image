var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get(/(.*\.pdf)\/([0-9]+).png$/i, function(req, res, next) {
  console.log('access PDF converter');
  console.log(req.params[0]);
  // var pdfPath = req.params[0];
  // params[0] is name of PDF file
  // params[1] is the number of page
  var pdfPath = './public/file/' + req.params[0];
  var pageNumber = req.params[1];

  var PDFImage = require("pdf-image").PDFImage;
  var pdfImage = new PDFImage(pdfPath);

  pdfImage.convertPage(pageNumber).then(function (imagePath) {
   // res.sendFile(imagePath);
   res.send('Image path: ' + imagePath);
  }, function (err) {
   res.send(err, 500);
  });
});

// This function support you convert an array of PDF file name to Image
// router.get('/', function(req, res, next) {
//   console.log('access PDF');
//   var PDFImage = require("pdf-image").PDFImage;
//
//   var fileName = [
//       'AngularJS-by-Example',
//       'AngularJS-UI-Development',
//       'ng-book',
//       'Professional-AngularJS'
//   ]
//
//   var pdfPath = "./public/file/test.pdf"
//
//   var pdfImage = new PDFImage(pdfPath);
//     pdfImage.convertPage(0).then(function (imagePath) {
//       console.log(imagePath);
//       res.end();
//   });
// });

module.exports = router;
