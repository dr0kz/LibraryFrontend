import React, {useEffect, useState} from "react";
import {CategoryService} from "../Services/CategoryService";
import Category from "./Category";
import {Link} from "react-router-dom";


const Categories = () => {

    const [categories, setCategories] = useState([])

    const loadCategories = () => {
        CategoryService.findAll().then((data) => setCategories(data.data))
    }

    useEffect(() => {
        loadCategories()
    }, [])

    return (
        <div className={"text-center mt-3"}>
            <table className={"mx-auto"}>
                <thead>
                <tr>
                    <th style={{padding: "0 5px 0 5px"}}>Category Name</th>
                </tr>
                </thead>
                <tbody>
                    {categories.map((value, index) => (
                        <Category key={index} category={value}/>
                    ))}
                </tbody>
            </table>
            <Link className={"mt-4 btn btn-info"} to={"/books"}>Back to books</Link>
        </div>
    )
}
export default Categories