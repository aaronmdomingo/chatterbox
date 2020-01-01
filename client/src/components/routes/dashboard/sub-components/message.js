import React from 'react';

const Message = ({ message }) => {
    return(
        <div className="w-auto h-12 mb-2 bg-gray-200 rounded-lg flex justify-start items-center">
            { message.user }: { message.text }
        </div>
    )
}

export default Message;