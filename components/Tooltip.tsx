import React from 'react';

function Tooltip({ title }: any) {
    return (
        <div className='absolute bottom-10 px-3 py-1 rounded bg-white mx-auto -left-4 lg:-right-2 block md:hidden group-hover:opacity-100 opacity-0'>
            <p className='text-slate-600 text-xs text-center capitalize w-full'>
                {title}
            </p>
        </div>
    )
}

export default Tooltip
