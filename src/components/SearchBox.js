import React from 'react';

const searchBox=({searchfield, searchChange})=>{
    return(
        <div className='pa2'>
            <input
                className='pa ba b--blue bg-lightest-blue pa2 w-30 ba bw2'
                type='search'
                placeholder='search-robots'
                onChange={searchChange}
            />
        </div>
    )
}
export default searchBox;