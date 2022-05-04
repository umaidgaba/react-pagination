import React from 'react'

const Pagination = ({ postPerPage, totalPosts, paginate}) => {

    const pageNumers = [];

    for (let index = 1; index < Math.ceil(totalPosts / postPerPage); index++) {
        pageNumers.push(index)
    }
  return (
    <nav>
        <ul className='pagination'>
            {pageNumers.map(number => (
                <li key={number} className='page-item'>
                    <a className='page-link' href='#' onClick={() => paginate(number)}>{number}</a>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Pagination