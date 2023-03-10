import { mongooseToObject } from "../../util/mongoose.js"
import Course from "../models/Course.js"

class CourseController {

    /// [GET] /courses/create
    create(req, res, next) {
        res.render('courses/create')
    }

    /// [GET] /courses/:id/edit
    edit(req, res, next) {
       Course.findById(req.params.id)
            .then(course => {
                res.render('courses/edit', {
                    course: mongooseToObject(course)
                })
            })
            .catch(err => next(err))
    }

    /// [PUT] /courses/:id
    update(req, res, next) {
        Course.updateOne({_id: req.params.id}, req.body)
            .then(() => {
                res.redirect('/me/stored/courses')
            })
            .catch(err => next(err))
    }

    /// [DELETE] /courses/:id
    delete(req, res, next) {
       Course.delete({_id: req.params.id})
        // .then(() => res.redirect('/me/stored/courses'))
        .then(() => res.redirect('back'))
        .catch(err => next(err))
    }

    /// [DELETE] /courses/:id/force
    forceDelete(req, res, next) {
        Course.deleteOne({_id: req.params.id})
         // .then(() => res.redirect('/me/stored/courses'))
         .then(() => res.redirect('back'))
         .catch(err => next(err))
     }

    /// [PATCH] courses/:id/restore
    restore(req, res, next) {
        Course.restore({_id: req.params.id})
        // .then(() => res.redirect('/me/stored/courses'))
        .then(() => res.redirect('back'))
        .catch(err => next(err))
    }

    /// [POST] /courses/store
    store(req, res, next) {
        const formData = req.body
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`
        const course = new Course(formData)
        course.save()
            .then(() => res.redirect('/me/stored/courses'))
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

    // [POST] /courses/handle-form-actions
    handleFormActions(req, res, next) {
        switch(req.body.action) {
            case 'delete':
                Course.delete({_id: { $in: req.body.courseIds}})
                    .then(() => res.redirect('back'))
                    .catch(err => next(err))
                break
            default:
                res.json({message: 'H??nh ?????ng kh??ng h???p l???!'})
        }
    }

}

export default new CourseController
