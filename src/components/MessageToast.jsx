import React, { useEffect } from 'react';

const MessageToast = ({ message, type = 'error', onClose, duration = 4000 }) => {
    useEffect(() => {
        if (onClose && duration) {
            const timer = setTimeout(onClose, duration);
            return () => clearTimeout(timer);
        }
    }, [onClose, duration]);

    return (
        <article className={`message__toast message__toast--${type}`}>
            <h2>{message}</h2>
        </article>
    );
};

export default MessageToast;
