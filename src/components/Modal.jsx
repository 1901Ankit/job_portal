import React from 'react';

const Modal = ({ isOpen, onClose, message }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded shadow-lg">
                <p>{message}</p>
                <button 
                    onClick={onClose} 
                    className="mt-4 w-full bg-blue-600 text-white rounded-md py-2 font-semibold hover:bg-blue-700 transition-colors"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;
