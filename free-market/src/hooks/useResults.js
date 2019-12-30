import { useState, useEffect } from 'react';
import backend from '../api/backend';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  const searchApi = async (searchTerm) => {
    try {
      if (!searchTerm) {
        console.log('run getProducts')
        const response = await backend.get('/products');
        setResults(response.data.products);
        setErrorMsg('');
      } else {
        console.log('run search')
        const response = await backend.get('/products', {
          params: {
            limit: 50,
            term: searchTerm
          }
        });
        setResults(response.data.products);
        setErrorMsg('');
      }
    } catch (err) {
      console.log(err);
      setErrorMsg('Oops, algo deu errado...');
    }
  };

  useEffect( () => {
    searchApi('');
  }, []);

  return [searchApi, results, errorMsg];
};