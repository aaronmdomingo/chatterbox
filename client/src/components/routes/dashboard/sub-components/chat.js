import React from 'react';
import { useParams } from "react-router-dom";

import Message from './message';

const Chat = ({ messageArr }) => {
    const { room } = useParams();

    return (
        <div className="w-11/12 mx-auto mt-2 p-2 bg-white rounded-lg shadow-xl overflow-y-scroll" style={{height: '36rem'}}>
            <div className="flex justify-center items-center h-12 w-auto mb-2 p-2 bg-blue-500 rounded-lg sticky top-0 text-white text-lg capitalize">
                { room }
            </div>
            {
                messageArr.map((e, index) => {
                    return <Message key={index} />
                })
            }
        </div>
    )
}

export default Chat;