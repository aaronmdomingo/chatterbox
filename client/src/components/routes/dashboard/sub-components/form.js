
import React from 'react';
import { useParams } from 'react-router-dom';

const Form = props => {
    const user = useParams();

    return (
        <form className="flex justify-around items-center h-20 w-11/12 mx-auto mt-2 mb-2 p-2 bg-blue-500 rounded-lg shadow-xl">
            <div className="w-3/5">
                <input className="bg-white appearance-none border-2 border-white rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-200" name="message" type="text"/>
            </div>
            <button className="w-1/5 h-10 flex justify-center items-center bg-white border-2 border-white rounded-full focus:outline-none focus:border-blue-200" type="submit">
                <svg className="fill-current h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M435.9 64.9l-367.1 160c-6.5 3.1-6.3 12.4.3 15.3l99.3 56.1c5.9 3.3 13.2 2.6 18.3-1.8l195.8-168.8c1.3-1.1 4.4-3.2 5.6-2 1.3 1.3-.7 4.3-1.8 5.6L216.9 320.1c-4.7 5.3-5.4 13.1-1.6 19.1l64.9 104.1c3.2 6.3 12.3 6.2 15.2-.2L447.2 76c3.3-7.2-4.2-14.5-11.3-11.1z"/>
                </svg>
            </button>
        </form>
    )
}

export default Form;