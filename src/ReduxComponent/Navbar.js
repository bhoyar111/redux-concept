import React from 'react';
import { useSelector } from 'react-redux'

export default function Navbar() {
    
    const myAmount = useSelector(state => state.amount);

  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    </form>
                    <div>
                        <button className="btn btn-outline-primary" type="submit">Your Amount :  {myAmount}</button>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}
