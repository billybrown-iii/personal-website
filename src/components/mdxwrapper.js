import React from 'react';

const proseStyles = `
prose text-slate-100 
prose-h1:text-slate-100 prose-h2:text-slate-100 prose-h3:text-slate-100 prose-h4:text-slate-100 
w-full
`
const MDXWrapper = ({ children }) => {
    return (
        <div className={proseStyles}>
            {children}
        </div>
    )
}

export default MDXWrapper;