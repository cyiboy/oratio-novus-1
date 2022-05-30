import Body from '../components/Body'
import { useState } from 'react'
import RoundImg from '../components/RoundImg'
import images from '../assets/images'
import { NoComment, Comment } from '../components/Comment'

export const History = () =>{
    return(
        <div className='flex justify-between items-center border-b border-solid border-grey-300 pb-5 mb-4'>
            <div className='flex gap-4 items-center'>
                <RoundImg img={images.userImg} />
                <div>
                    <p className='text-primary-500 font-bold text-lg'>Valentina Alegra</p>
                    <p className="text-grey-300 text-xs">@valaleg</p>
                </div>
            </div>
            <p className="text-grey-300 font-bold text-xs">Updated 2days ago</p>
        </div>
    )
}

function WordInfo(){
    let [active, setActive] = useState('discussion')

    return(
        <Body>
            <div className='flex justify-between items-start'>
                <div className='w-72'>
                    <div className='border-b border-solid border-primary-400 pt-5 pb-1'>
                        <p className='font-bold text-lg group-hover:text-white'>Lorem Ipsum Dolor</p>
                        <div className='flex gap-2 items-center'>
                            <p className='text-grey-300'>[Lo-rem]</p>
                            <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 7.00008V11.0001C0 11.5501 0.45 12.0001 1 12.0001H4L7.29 15.2901C7.92 15.9201 9 15.4701 9 14.5801V3.41008C9 2.52008 7.92 2.07008 7.29 2.70008L4 6.00008H1C0.45 6.00008 0 6.45008 0 7.00008ZM13.5 9.00008C13.5 7.23008 12.48 5.71008 11 4.97008V13.0201C12.48 12.2901 13.5 10.7701 13.5 9.00008ZM11 1.45008V1.65009C11 2.03009 11.25 2.36009 11.6 2.50009C14.18 3.53009 16 6.06008 16 9.00008C16 11.9401 14.18 14.4701 11.6 15.5001C11.24 15.6401 11 15.9701 11 16.3501V16.5501C11 17.1801 11.63 17.6201 12.21 17.4001C15.6 16.1101 18 12.8401 18 9.00008C18 5.16008 15.6 1.89008 12.21 0.600085C11.63 0.370085 11 0.820085 11 1.45008Z" fill="#272738"/>
                            </svg>
                        </div>
                        <p className='text-xs text-grey-300 capitalize my-3'>Created by John Doe</p>
                    </div>
                    <p className='font-medium text-xs text-grey-300 my-3'>Lorem ipsum dolor sit amet</p>
                </div>

                <div className='cursor-pointer flex rounded-on-md shadow-on-shadow bg-white py-2 justify-center w-14 sm:w-52 items-center gap-x-4'>
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.938 5.35597C12.7519 8.53284 9.57043 11.7149 6.39182 14.8993C6.22349 15.0682 6.02277 15.1342 5.80469 15.1775C4.44706 15.4494 3.08943 15.7201 1.73123 15.9897C1.66528 16.003 1.5976 16.0059 1.56174 16.0099C1.10013 16.0065 0.842143 15.653 0.934696 15.1868C1.04287 14.6396 1.15566 14.0935 1.26615 13.5469C1.43737 12.6983 1.61206 11.8509 1.77634 11.0011C1.81279 10.8114 1.89782 10.6633 2.03144 10.5297C5.20773 7.35569 8.38286 4.18171 11.5545 1.00368C11.6806 0.877002 11.7477 0.855599 11.8871 0.996164C13.2297 2.3509 14.5798 3.6987 15.9328 5.04361C16.0549 5.1645 16.0693 5.22524 15.938 5.35597Z" fill="#272738"/>
                    </svg>
                    <p className='text-grey-300 hidden sm:block'>Edit / Update</p>
                </div>
            </div>

            <div className='w-full'>
                <div className='flex justify-center mb-5'>
                    <div 
                    className={`w-60 ${active === 'discussion' ? 'text-primary-500' : 'text-grey-300'} text-center py-2 border-b border-solid cursor-pointer ${active === 'discussion' && 'border-primary-500 font-bold'}`}
                    onClick={() => setActive('discussion')}>Discussion</div>
                    <div 
                    className={`w-60 ${active === 'history' ? 'text-primary-500' : 'text-grey-300'} text-center py-2 border-b border-solid cursor-pointer ${active === 'history' && 'border-primary-500 font-bold'}`}
                    onClick={() => setActive('history')}>History</div>
                </div>
                <div 
                className='relative flex justify-center items-center scrollbar bg-primary-200 w-full rounded-lg flex-col shadow-on-shadow max-h-100 mb-10 px-5 sm:px-9 overflow-y-auto'>
                    {/* <NoComment /> */}
                    <div className='my-9 overflow-y-auto scrollbar h-full w-full'>
                        {
                            active === 'discussion' ?
                            <>
                            <Comment /><Comment />
                            <Comment /><Comment />
                            <Comment /><Comment />
                            <Comment /><Comment />
                            </> :
                            <>
                            <History /><History />
                            <History /><History />
                            </>
                        }
                    </div>
                    {
                        active === 'discussion' &&
                        <div className='absolute flex justify-between gap-6 mx-5 sm:mx-9 items-center bottom-0 left-0 right-0 bg-primary-200 pb-5 pt-2'>
                            <input 
                            type='text' 
                            placeholder="Type something"
                            className=' bg-white px-3 py-2 rounded-on-md shadow-on-shadow-sm w-11/12' />
                            <div className="bg-green-100 rounded-on-md shadow-on-shadow-sm px-6 py-2">
                                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.4 17.4L18.85 9.92002C19.66 9.57002 19.66 8.43002 18.85 8.08002L1.4 0.600017C0.74 0.310017 0.00999999 0.800017 0.00999999 1.51002L0 6.12002C0 6.62002 0.37 7.05002 0.87 7.11002L13.1425 8.75157C13.4318 8.79025 13.4316 9.20869 13.1424 9.24718L0.87 10.88C0.37 10.95 0 11.38 0 11.88L0.00999999 16.49C0.00999999 17.2 0.74 17.69 1.4 17.4Z" fill="white"/>
                                </svg>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </Body>
    )
}

export default WordInfo