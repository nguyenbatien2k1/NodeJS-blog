import { mongooseToObject } from "../../util/mongoose.js"
import Course from "../models/Course.js"

class CourseController {

    show(req, res) {
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
