import * as React from 'react';

const MainContentWrapper = ({ children }) => {
    return (
        <div className="w-4/5 sm:w-2/3 max-w-screen-md m-auto">{children}</div>
    )
}

export default MainContentWrapper