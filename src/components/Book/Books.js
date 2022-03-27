import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Book from "./Book";
import {BookService} from "../Services/BookService";
import book from "./Book";


const Books = (props) => {

    const [books, setBooks] = useState([])
    const [totalBooks, setTotalBooks] = useState(0)
    const [currentPage, setCurrentPage] = useState(0)
    const pageSize = 5
    const loadBooks = (page, pageSize) => {
        setCurrentPage(page)
        BookService.findAll(page, pageSize).then((data) => {
            setBooks(data.data.books)
            setTotalBooks(data.data.totalBooks)
        })
    }
    const deleteBook = (bookId) =>
        BookService.delete(bookId).then(() => loadBooks())

    const markAsTaken = (bookId) =>
        BookService.markAsTaken(bookId).then(() => loadBooks(currentPage, pageSize))

    useEffect(() => {
        loadBooks(0, pageSize)
    }, [])

    const totalPages = () => Math.ceil(totalBooks / pageSize)

    return (<div className={"container  p-5 text-center"}>
            <table className={"mx-auto"}>
                <thead>
                <tr>
                    <th style={{padding: "0 5px 0 5px"}}>Name</th>
                    <th style={{padding: "0 5px 0 5px"}}>Category</th>
                    <th style={{padding: "0 5px 0 5px"}}>Author Name</th>
                    <th style={{padding: "0 5px 0 5px"}}>Author Surname</th>
                    <th style={{padding: "0 5px 0 5px"}}>Author Country Name</th>
                    <th style={{padding: "0 5px 0 5px"}}>Author Country Continent</th>
                    <th style={{padding: "0 5px 0 5px"}}>Available Copies</th>
                    <th style={{padding: "0 5px 0 5px"}}/>
                </tr>
                </thead>
                <tbody>
                {books.map((value, index) =>
                    <Book onMarkAsTaken={markAsTaken} onDelete={deleteBook} key={index} book={value}/>
                )}
                </tbody>
            </table>
            <div className={"d-flex mt-5 justify-content-evenly"}>
                <a onClick={() => loadBooks(currentPage - 1 < 0 ? 0 : currentPage - 1, pageSize)}
                   className={"btn btn-warning"}>Prev</a>
                {Array.from({length: totalPages()}, (v, i) => i).map((value, index) => {
                    return <span className={"btn btn-warning"} key={index}
                                 onClick={() => loadBooks(value, pageSize)}>{value + 1} </span>
                })}
                <a onClick={() => loadBooks(currentPage + 1 >= totalPages() ? totalPages() - 1 : currentPage + 1, pageSize)}
                   className={"btn btn-warning"}>Next</a>
            </div>
            <Link className={"btn btn-info mt-4"} to={"/books/add"}>Add Book</Link>
        </div>
    )
}
export default Books;