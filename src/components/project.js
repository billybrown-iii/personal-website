import * as React from 'react';

const Project = ({ children }) => {
    return (
        <div className='w-full bg-gray-600 p-3 rounded-2xl'>
            { children }
        </div>
    )

}

export default Project;