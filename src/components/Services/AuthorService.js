import React from 'react'
import axios from "../../custom-axios/axios";

export const AuthorService = {
    findAll: () => axios.get("/authors"),
}