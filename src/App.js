import React from 'react';
import { useQuery } from 'react-query';
import {  useLocation } from "react-router-dom";
import Pagination from "./components/pagination";
import SearchService from './services/search';
import Form from './components/form';
const useSearch = () => {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
};

function App() {
  let query = useSearch();
  let username = query.get('username');

  const allUsers =  useQuery('fetch-users', () => SearchService.Data(username));
  switch (username === null || username === '' || username === undefined) {
        case true:
            return <Form />
        default:
            break;
    }
    switch (allUsers.isLoading) {
        case true:
            return <p>Loading...</p>
        default:
            break;
    }
    switch (allUsers.error) {
        case true:
            return <p>Error... { allUsers.error.message }</p>
        default:
            break;
    }
    switch (allUsers.data) {
        case undefined:
            return <p>Session error. Retrying.</p>
    
        default:
            return (
              <Pagination itemsPerPage={10} username={username} data = { allUsers.data.items } title = { allUsers.data.total_count } />
            )
    }
}

export default App;
