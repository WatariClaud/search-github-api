import { useState, useEffect } from 'react';
import SearchService from '../services/search';

const Single = ({username}) => {
    const [userData, setUserData] = useState({});
    useEffect(() => {
        (async function returnData() {
            let user = await SearchService.Single(username);
            setUserData(user);
        })();
    }, [username]);
    return userData.node_id
    ?
    <div className='result-item'>
        <a href={userData.html_url} className='App-link' target='_blank' rel="noreferrer">
            <div className='img-item'>
                <img src={userData.avatar_url} alt={userData.login} />
            </div>
            <div className='p-item'>
                <p>{userData.login}</p><hr/>
                <p>{userData.bio}</p>
                {userData.followers ? <p>{userData.followers} followers</p> : null}
                {userData.public_repos ? <p>{userData.public_repos} public repositories</p> : null}
                <p>{userData.location}</p>
            </div>
        </a>
    </div>
    :
    <div className='result-item-loading'></div>;
};

export default Single;