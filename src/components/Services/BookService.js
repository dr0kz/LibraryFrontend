import React from 'react'
import axios from "../../custom-axios/axios";

export const BookService = {
    findAll: (page=0, pageSize=5) => axios.get("/books", {
        params: {
            page: page,
            pageSize: pageSize
        }
    }),
    findById: (id) => axios.get(`/books/${id}`),
    create: (name, category, authorId, availableCopies) => axios.post("/books/add", {
        name: name,
        category: category,
        authorId: authorId,
        availableCopies: availableCopies
    }),
    edit: (id, name, category, authorId, availableCopies) => axios.put("/books/edit", {
        id: id,
        name: name,
        category: category,
        authorId: authorId,
        availableCopies: availableCopies
    }),
    delete: (id) => axios.delete(`/books/delete/${id}`),
    markAsTaken: (id) => axios.put(`/books/markAsTaken/${id}`)
}