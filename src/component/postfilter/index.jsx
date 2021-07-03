import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

PostFilter.propTypes = {
    onSubmit: PropTypes.func,
};

PostFilter.defaultProps = {
    onSubmit: null
};


function PostFilter(props) {

    const { onSubmit } = props
    const [searchItem, setSearchItem] = useState('');
    const typingTimeoutRef = useRef(null)

    function handleChangeSearch(e) {
        const value = e.target.value
        setSearchItem(value)

        if (!onSubmit) return;
        // set time -- 100 -- clear , set --300 -> submit
        //set --300 --> submit
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current)
        }

        typingTimeoutRef.current = setTimeout(() => {
            const SearchForm = {
                searchItem: value
            };

            onSubmit(SearchForm)
        }, 800)

    }

    return (
        <div>
            <form action="">
                <input type="text" value={searchItem} onChange={handleChangeSearch} />
            </form>
        </div>
    );
}

export default PostFilter;