import React from 'react'

function Pagination({ page_size, page_number, nextHandler, backHandler }) {
    return (
        <div style={{ width: "200px", display: "flex", margin: "auto", justifyContent: "center", alignItems: "center" }} >
            <button style={{ border: "none" }} onClick={backHandler}>Back</button>
            <p style={{ margin: "0 5px" }}>{page_number}</p>
            <button style={{ border: "none" }} onClick={nextHandler}>Next</button>
        </div>
    )
}

export default Pagination