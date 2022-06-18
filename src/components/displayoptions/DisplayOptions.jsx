import React, {useState} from 'react';
import './displayoptions.css';

const DisplayOptions = ({updateOrderBy}) => {
    const [value, setValue] = useState('');
    const handleChange=(e)=>{
        setValue(e.target.value)
        updateOrderBy(e.target.value);
    }
    return (
        <div className='display-options-wrapper'>
            <div className='display-options-left'>
                <select name="g-sort" id="g-sort" className='select-games-sort' placeholder='Order By'
                        value={value} onChange={handleChange}>
                    <option value="-relevance">Relevance</option>
                    <option value="-rating">Average rating</option>
                    <option value="-released">Release date</option>
                    <option value="name">Name</option>
                </select>
            </div>
            <div className='display-options-right'>
                <span>Display options:</span>

            </div>
        </div>
    );
};

export default DisplayOptions;
