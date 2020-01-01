import React from 'react';
import { withRouter } from 'react-router-dom';

const LandingPage = ({ history }) => {
    return (
        <div className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center bg-gray-300">
            <div className="w-5/6 sm:w-3/4 md:w-1/2 lg:w-1/3 mx-auto mt-2 flex p-6 bg-white rounded-lg shadow-xl">
                <div className="w-1/4 h-16 logo bg-contain bg-no-repeat bg-center"></div>
                <div className="w-3/4 h-16 flex flex-col justify-center">
                    <h4 className="text-3xl text-center text-black leading-tight">Chatter<span className="text-blue-500" >Box</span></h4>
                    <p className="text-base text-center text-gray-600 leading-normal">Let's talk!</p>
                </div>
            </div>
            <div className="h-64 w-5/6 sm:w-3/4 md:w-1/2 lg:w-1/3 mt-4 mb-2 flex flex-col items-center justify-around p-6 bg-white rounded-lg shadow-xl relative">
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold w-1/2 py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    Register
                </button>
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold w-1/2 py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    Login
                </button>
                <div className="absolute bottom-0 mb-2 h-8 w-full flex flex-col justify-center items-center">
                    <span className="text-xs">Don't want to register?</span>
                    <span className="text-xs text-blue-500 cursor-pointer" onClick={() => history.push(`/dashboard/general/guest-${(Math.random() * 1000).toFixed()}`)}>Login as guest</span>
                </div>
            </div>
        </div>
    )
}

export default withRouter(LandingPage);
