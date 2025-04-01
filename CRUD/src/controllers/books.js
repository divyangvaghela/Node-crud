const Book = require("../models/books")

const getAll = (req, res) => {
    res.json({
        msg: "get All Books" 
    })
}

const getOne = (req, res) => {
    res.json({
        msg: "one book is selected"
    })
}

const createOne = (req, res) => {
    res.json({
        mag: "A book has been created"
    })
}

const updateOne = (req, res) => {
    res.json({
        data: "A book has been updated"
    })
}

const deleteOne = (req, res) => {
    res.json({
        data: "A book has been deleted"
    })
}

module.exports = { getAll, getOne, createOne, updateOne, deleteOne }