import Course from "../models/Course.js"

class SiteController {
    

    // [GET] /
    home(req, res) {

        Course.find({}, function (err, courses) {
            // docs.forEach
            if(!err) res.json(courses)
            else res.status(500).json({error: 'message error!'})
        });

    }

    // [GET] /search
    search(req, res) {
        res.render('search')
    }

}

export default new SiteController
