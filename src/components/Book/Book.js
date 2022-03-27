import React from "react"
import {Link} from "react-router-dom";


const Book = (props) => (
    <tr>
        <td>{props.book.name}</td>
        <td>{props.book.category}</td>
        <td>{props.book.author.name}</td>
        <td>{props.book.author.surname}</td>
        <td>{props.book.author.country.name}</td>
        <td>{props.book.author.country.continent}</td>
        <td>{props.book.availableCopies}</td>
        <td>
            <div>
                <Link className={"btn btn-primary"} to={`/books/edit/${props.book.id}`}>Edit</Link>
                <a onClick={() => props.onMarkAsTaken(props.book.id)} className={"btn btn-warning"}>Mark as Taken</a>
                <a onClick={() => props.onDelete(props.book.id)} className={"btn btn-danger"}>Delete</a>
            </div>
        </td>
    </tr>

)
export default Book;