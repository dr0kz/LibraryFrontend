import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component, useEffect, useState} from "react";
import Books from '../Book/Books'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AddForm from "../Book/AddForm";
import EditForm from "../Book/EditForm";
import Categories from "../Category/Categories";
import Header from "../Header/Header";


function App() {

    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/books/edit/:id" element={<EditForm/>}/>
                <Route path="/books/add" element={<AddForm/>}/>
                {["/books", "/"].map((value, index) => (
                    <Route key={index} path={value} element={<Books/>}/>
                ))}
                <Route path="/categories" element={<Categories/>}/>
            </Routes>
        </Router>
    );
}

export default App;
