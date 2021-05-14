const MongoClient = require("mongodb").MongoClient
const { ObjectId } = require("mongodb")
const { DB } = require('../config')
const url = `mongodb://${DB.USER}:${DB.PASS}@${DB.HOST}:${DB.PORT}`
const options = {
    useUnifiedTopology: true
}

module.exports = {
    create: (data, callback) => {
        MongoClient.connect(url, options, (err, client) => {
            if (err) throw err
            const db = client.db(DB.NAME)
            db.collection("post").insertOne(data, (err, result) => {
                if (err) throw err
                client.close()
                callback(result)
            })
        })
    },
    read: {
        one: (id, callback) => {
            MongoClient.connect(url, options, (err, client) => {
                if (err) throw err
                const db = client.db(DB.NAME)
                db.collection("post").findOne({ _id: ObjectId(id) }, (err, result) => {
                    if (err) throw err
                    client.close()
                    callback(result)
                })
            })
        },
        all: (callback) => {
            MongoClient.connect(url, options, (err, client) => {
                if (err) throw err
                const db = client.db(DB.NAME)
                db.collection("post").find({}).toArray((err, result) => {
                    if (err) throw err
                    client.close()
                    console.log(result)
                    callback(result)
                })
            })
        }
    },
    update: (id, data, callback) => {
        MongoClient.connect(url, options, (err, client) => {
            if (err) throw err
            const db = client.db(DB.NAME)
            db.collection("post").updateOne({ _id: ObjectId(id) }, { $set: data }, { new: true, upsert: true }, (err, result) => {
                if (err) throw err
                client.close()
                callback(result)
            })
        })
    },
    delete: (id, callback) => {
        MongoClient.connect(url, options, (err, client) => {
            if (err) throw err
            const db = client.db(DB.NAME)
            db.collection("post").deleteOne({ _id: ObjectId(id) }, (err, result) => {
                if (err) throw err
                client.close()
                callback(result)
            })
        })
    }
}
