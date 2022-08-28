import { useState } from 'react';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SearchButton, Link , H3, P} from './actionable';
import SearchBar from './input-bar';

const Form = () => {
    const [user, setUser] = useState('');
    return <div className="App-header">
        <H3 text = 'Custom Github Search' />
        <P text = 'Type a user below to view results from github API'/>
        <div className='input-box'>
            <form onSubmit={ e => {
                e.preventDefault();
                switch (user) {
                case '':
                    toast('Search query cannot be empty', { transition: Slide });
                    break;
                                    
                default:
                    window.location.replace(`?username=${user}`);
                    break;
                }
            }}>
                <SearchBar 
                    placeholder = 'Search github users' 
                    value = { user } 
                    onchange = { e => {setUser(e.target.value) } }
                    />
                    <SearchButton 
                    text = 'Search'
                />
            </form>
        </div>
        <div className='linked'>
            <Link text = 'View the Github Docs' link = 'https://docs.github.com/en/rest/search'/>
        </div>
        <ToastContainer  autoClose={1000}/>
    </div>
};

export default Form;