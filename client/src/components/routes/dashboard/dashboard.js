import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import Form from './sub-components/form';
import Chat from './sub-components/chat';

const Dashboard = props => {

    const [ messageArr, setMessageArr ] = useState([]);

    return (
        <div className="min-h-screen bg-gray-300 bg-center flex flex-col justify-around items-center pt-2">
            <nav className="flex items-center justify-between w-11/12 mx-auto p-3 bg-white rounded-lg shadow-xl">
                <div className="flex items-center flex-shrink-0 text-white mr-auto w-3/4 md:w-1/2 lg:w-1/4">
                    <div className="w-1/4 h-16 logo bg-contain bg-no-repeat bg-center"></div>
                    <h4 className="ml-2 text-3xl text-left text-black leading-tight w-3/4">Chatter<span className="text-blue-500" >Box</span></h4>
                </div>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-black border-black hover:text-blue-500 hover:border-blue-500">
                    <svg className="fill-current h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>
            </nav>
            <Chat messageArr={messageArr}/>
            <Form />
        </div>
    )
}

export default withRouter(Dashboard);