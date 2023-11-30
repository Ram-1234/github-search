import React, { useState } from 'react'
import {logoStyle} from "../helper"

function Navbar({ setKeyword,setData, setSearchInput }) {
    const [input, setInput] = useState('');

    function onSubmit(e) {
        e.preventDefault();
        setSearchInput(input);
        setInput('')
    };

    function onChangeHandler(e) {
       setKeyword(e.target.value);
       setData([])
       setInput('')
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="s" style={logoStyle}>GITHUB REPO</a>
                    <div className="collapse d-flex justify-content-end navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0" >
                            <select className="nav-link dropdown-toggle m-3"  onChange={onChangeHandler} id="cars">
                                <option value="code">Code</option>
                                <option value="commits">Commits</option>
                                <option value="labels">Labels</option>
                                <option value="issues">Issues & PR</option>
                                <option value="repositories">Repositories</option>
                                <option value="topics">Topics</option>
                                <option value="users">Users</option>
                            </select>
                        </ul>
                        <form onSubmit={onSubmit} className="d-flex" role="search">
                            <input className="form-control me-2" onChange={(e) => setInput(e.target.value)} value={input} type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar