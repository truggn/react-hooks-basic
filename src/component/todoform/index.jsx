import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,

};
TodoForm.defaultProps = {
    onSubmit: null
}

function TodoForm(props) {

    const { onSubmit } = props

    const [value, setValues] = useState('');


    function handelValueChange(e) {
        setValues(e.target.value)
    };

    function handelSubmit(e) {
        e.preventDefault();
        if (!onSubmit) return

        const formValues = {
            title: value
        };
        onSubmit(formValues);
        // reset form 
        setValues('')

    }
    return (
        <form onSubmit={handelSubmit}>
            <input type='text'
                value={value}
                onChange={handelValueChange}
            />
        </form>
    );
}

export default TodoForm;