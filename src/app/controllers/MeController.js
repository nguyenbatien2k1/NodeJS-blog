import { multipleMongooseToObject } from "../../util/mongoose.js"
import Course from "../models/Course.js"

class MeController {

    /// [GET] /me/stored/courses
    storedCourses(req, res, next) {
        Course.find({})
            .then((courses) => res.render('me/stored-courses', {
                courses: multipleMongooseToObject(courses)
            }))
            .catch(err => next(err))
    }

    /// [GET] /me/trashed/courses
    trashedCourses(req, res, next) {
        Course.findDeleted({})
            .then((courses) => res.render('me/trashed-courses', {
                courses: multipleMongooseToObject(courses)
            }))
            .catch(err => next(err))
    }
}

export default new MeController
