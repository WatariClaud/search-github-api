const SearchBar = (props) => {
    return <input className='search-input-bar' placeholder={ props.placeholder } 
        value = {props.value} onChange = {props.onchange}/>
};

export default SearchBar;