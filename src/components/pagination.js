import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import '../App.css';
import Results from './results';

const Pagination = ({ itemsPerPage, data, title, username }) => {
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, data]);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
        window.scrollTo(0, 0);
    };
    return (
    <React.Fragment>
        <Results currentItems={currentItems} title = { title }  username = { username } />
        <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={4}
            pageCount={pageCount}
            previousLabel="< prev"
            renderOnZeroPageCount={null}
            className='pagination'
        />
    </React.Fragment>
  );
}

export default Pagination;