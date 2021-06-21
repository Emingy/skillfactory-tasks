import React from 'react';
import PropTypes from 'prop-types'

import Portal from './portal'

const ModalWindow = ({title, isOpen, onCancel, onSubmit}) => {
    return (
        <>
        {isOpen &&
            <Portal>
                <div>{title}</div>
            </Portal>
        }
        </>
    );
}
ModalWindow.propTypes = {
    title: PropTypes.string,
    isOpen: PropTypes.bool,
    onCancel: PropTypes.func,
    onSubmit: PropTypes.func
}
ModalWindow.defaultProps = {
    title: 'Modal',
    isOpen: false,
    onCancel: ()=>{},
    onSubmit: ()=>{}
}


export default ModalWindow