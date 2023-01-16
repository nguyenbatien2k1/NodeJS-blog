import { mongooseToObject } from "../../util/mongoose.js"
import Course from "../models/Course.js"

class CourseController {

    /// [GET] /courses/create
    create(req, res, next) {
        res.render('courses/create')
    }

     /// [POST] /courses/store
    store(req, res, next) {
        const formData = req.body
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`
        const course = new Course(formData)
        course.save()
            .then(() => res.redirect('/'))
            .catch(err => {
                return next(err)
            })
    }

    show(req, res, next) {
        Course.findOne({slug: req.params.slug})
            .then(course => {
                res.render('courses/show', {
                    course: mongooseToObject(course)
                })
            })
            .catch(err => next(err))
    }

}

export default new CourseController
