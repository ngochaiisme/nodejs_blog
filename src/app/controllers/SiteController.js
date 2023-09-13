const Course = require('../models/Course')
const { mutipleMongooseToObject } = require('../../util/mongoose')

class SiteController {
    //[GET] /
    // async json(req, res) {
    //     res.json(await Course.find({}))
    // }

    json(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: mutipleMongooseToObject(courses),
                })
            })
            .catch(next)
    }

    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: mutipleMongooseToObject(courses),
                })
            })
            .catch(next)
    }

    search(req, res) {
        res.render('search')
    }
}
module.exports = new SiteController()
