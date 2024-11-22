const express = require('express');
const router  = express.Router();
const CourseQuery = require('../../app/controllers/query/admin/courseQuery.Controller');
const CreateCourseCommand = require('../../app/controllers/command/admin/course/CreateCourse.Controller');
const DeleteCourseCommand = require('../../app/controllers/command/admin/course/DeleteCourse.Controller');
// const UpdateCourseCommand = require('../../app/controllers/command/admin/course/UpdateUser.Controller');
const authenticateToken = require('../../app/middleware/authenticateTokenAdmin');
const upload = require('../../app/Extesions/uploadCourse');

// //Route view course
// router.use('/viewCourse/:id', authenticateToken, CourseQuery.viewsCourse);

// //Route disable course
// router.post('/disable/:id', authenticateToken, DeleteCourseCommand.disable);
// router.post('/restore/:id', authenticateToken, DeleteCourseCommand.restore);

// // Route delete course 
// router.post('/delete/:id', authenticateToken, DeleteCourseCommand.delete);

// //Route Create Course 
// router.post('/addCourse', upload.single('thumbnail'), authenticateToken, (req, res) => {
//     CreateCourseCommand.Handle(req, res);
// });
// router.post('/clear-create-flag', authenticateToken, (req, res) => {
//     delete req.session.isCreate;
//     res.sendStatus(200);
// });
// router.get('/addCourse', authenticateToken, CourseQuery.addCourse);

// //Route update course
// router.post('/updateCourse/:id', upload.single('thumbnail'), authenticateToken, (req, res) => {
//     UpdateCourseCommand.Handle(req, res);
// });
// router.get('/updateCourse/:id', authenticateToken, CourseQuery.UpdateCourse);
// router.post('/clear-update-flag', authenticateToken, (req, res) => {
//     delete req.session.isUpdate;
//     res.sendStatus(200);
// });

router.use('/addLesson', authenticateToken, CourseQuery.addLesson);

module.exports = router;