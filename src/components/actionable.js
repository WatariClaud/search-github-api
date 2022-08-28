const SearchButton = ({text}) => {
    return <button className='search-input-button'>{text}</button>
};

const Link = ({link, text}) => {
    return <a href={link} className='App-link' target='_blank' rel="noreferrer">{text}</a>
}

const H3 = ({text}) => {
    return <h3>{text}</h3>
}

const P = ({text}) => {
    return <p>{text}</p>
}

export { SearchButton, Link, H3, P };