import Course from "../models/Course.js"
import { multipleMongooseToObject, mongooseToObject } from "../../util/mongoose.js"

class SiteController {
    

    // [GET] /
    home(req, res, next) {

        //////////// Cách dùng bằng callback function
        // Course.find({}, function (err, courses) {
        //     // docs.forEach
        //     if(!err) res.json(courses)
        //     else next(err)
        //     // else res.status(500).json({error: 'message error!'})
        // });

        /////////// Cách dùng bằng promise 
        Course.find({})
            .then(courses => {
                // courses = courses.map(course => course.toObject())
                res.render('home', {
                    courses: multipleMongooseToObject(courses)
                })
            })
            .catch(err => next(err))
    }

    // [GET] /search
    search(req, res) {
        res.render('search')
    }

}

export default new SiteController
