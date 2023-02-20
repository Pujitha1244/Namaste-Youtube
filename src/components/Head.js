import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'

const Head = () => {
    const dispath = useDispatch()

    const toggleMenuHandler = () =>{
        dispath(toggleMenu())
    }
    return (
        <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
            <div className='flex col-span-1'>
                <img
                onClick={()=>toggleMenuHandler()}
                    className='h-8 cursor-pointer'
                    alt='menu'
                    src="https://paragondigital.com/wp-content/uploads/Menu-Icon2.jpg"
                />
                <img
                    className='h-8 mx-2'
                    alt='youtube-logo'
                    src='https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg'
                />
            </div>
            <div className='col-span-10 px-10'>
                <input className='w-1/2 border border-gray-400 p-2 rounded-l-full' type="text" />
                <button className='border border-gray-400 p-2 rounded-r-full bg-gray-100'>Search</button>
            </div>
            <div className='col-span-1'>

            </div>
        </div>
    )
}

export default Head