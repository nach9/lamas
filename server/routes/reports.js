var express = require('express');
var router = express.Router();
var ReportController = require('../controllers/reports')
var images = require('../helpers/images')


router.get('/', ReportController.getAll )
router.post('/', images.multer.single('image'),images.sendUploadToGCS,ReportController.addNew )
// router.put('/', ReportController.editData )
router.put('/upvote/:reportid', ReportController.upVote )
router.put('/downvote/:reportid', ReportController.downVote )
router.delete('/:reportid', ReportController.deleteData )


module.exports = router;
