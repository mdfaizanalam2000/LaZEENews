import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = (props) => {
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState("");

    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">LaZEE News</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/entertainment" onClick={() => document.querySelector('.navbar-collapse').classList.remove('show')}>Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/business" onClick={() => document.querySelector('.navbar-collapse').classList.remove('show')}>Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/health" onClick={() => document.querySelector('.navbar-collapse').classList.remove('show')}>Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/science" onClick={() => document.querySelector('.navbar-collapse').classList.remove('show')}>Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sports" onClick={() => document.querySelector('.navbar-collapse').classList.remove('show')}>Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/technology" onClick={() => document.querySelector('.navbar-collapse').classList.remove('show')}>Technology</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/politics" onClick={() => document.querySelector('.navbar-collapse').classList.remove('show')}>Politics</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/international" onClick={() => document.querySelector('.navbar-collapse').classList.remove('show')}>International</Link>
                            </li>
                        </ul>
                        <form id='desktop-search' className="d-flex" role="search" onSubmit={(e) => { e.preventDefault(); if (searchValue === "") { navigate("/") } else { props.setSearch(searchValue); setSearchValue(""); navigate("/search/" + searchValue) } }}>
                            <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className="form-control me-2" type="search" placeholder="Search in news" aria-label="Search" />
                            <button className="btn btn-outline-primary" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <form id='mobile-search' className="d-flex" role="search" onSubmit={(e) => { e.preventDefault(); if (searchValue === "") { navigate("/") } else { props.setSearch(searchValue); setSearchValue(""); navigate("/search/" + searchValue) } }}>
                <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className="form-control me-2" type="search" placeholder="Search in news" aria-label="Search" />
                <button className="btn btn-outline-primary" type="submit">Search</button>
            </form>
        </>
    )
}

export default Navbar;