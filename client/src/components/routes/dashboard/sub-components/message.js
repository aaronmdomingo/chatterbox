import React from 'react';

const Message = ({ message }) => {
    return(
        <div className="w-auto p-2 mb-2 bg-gray-200 rounded-lg flex flex-wrap justify-start items-center">
            { message.user }: { message.text }
        </div>
    )
}

export default Message;