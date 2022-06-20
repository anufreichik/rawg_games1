import React, {useEffect, useState} from 'react';
import './searchbar.css';
import useDebounce from '../../hooks/useDebounce';
import axios from "axios";
import {Link} from "react-router-dom";

const SearchBar = ({placeholder}) => {
    const [searchVal, setSearchVal] = useState('');
    const debouncedVal = useDebounce(searchVal, 500);
    const [suggestions, setSuggestions] = useState([]);
    const [showOptions, setShowOptions] = useState(false);


    async function getGameSuggestions() {
        try {
            if (searchVal) {
                const options = {
                    method: 'GET',
                    url: `https://api.rawg.io/api/games`,
                    params: {
                        key: process.env.REACT_APP_RAWG_API_KEY, search: debouncedVal, page: 1, page_size: 20
                    }
                };
                const response = await axios.request(options);
                return response;
            }


        } catch (error) {
            console.error(error);
        }
    }

    const handleInputChange = (e) => {
        setSearchVal(e.target.value);
    }
    useEffect(() => {
        if (debouncedVal)
            getGameSuggestions().then(response => {
                setShowOptions(true);
                setSuggestions(response.data.results);
            })
    }, [debouncedVal]);

    return (
        <div className='autocomplete_container'   onClick={()=>setShowOptions(false)}>
            <input type='text' className='header__search__input' placeholder={placeholder}
                   onChange={handleInputChange}
                   onClick={()=>setShowOptions(false)}
            />

            {
                showOptions &&
                <div className='search_suggestions_container'>
                    <div className='search-suggestions_container_section'>
                        {
                            suggestions?.map(el=><div key={el.id}>{el.name}</div>)
                        }

                        <Link to={'/search?query=portal'}>Show All Results</Link>

                    </div>
                </div>

            }


        </div>
    );
};

export default SearchBar;
