const db = require('../query/query')
const os = require("os")

const Post = {
    create: (req, res) => {
        db.create(req.body, (result) => {
            res.json(result.ops)
        })
    },
    read: {
        one: (req, res) => {
            db.read.one(req.params.id, (result) => {
                res.json(result)
            })
        },
        all: (req, res) => {
            db.read.all((result) => {
                res.json(result)
                console.log(os.hostname())
            })
        }
    },
    update: (req, res) => {
        db.update(req.params.id, req.body, (result) => {
            res.json(result)
        })
    },
    delete: (req, res) => {
        db.delete(req.params.id, (result) => {
            res.json(result)
        })
    }
}

module.exports = Post