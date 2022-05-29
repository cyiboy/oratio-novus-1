import { Link } from 'react-router-dom';
import images from '../assets/images'
import RoundImg from './RoundImg'


function Card(){
    return(
        <Link to="/word-info/1" className='group bg-white hover:bg-primary-500 rounded-on-md p-4 w-on-card h-fit shadow-on-shadow'>
            <div className='flex justify-between items-center'>
                <div className='flex gap-3 items-center'>
                    <RoundImg img={images.userImg} />
                    <p className='text-sm text-grey-300 capitalize'>john doe</p>
                </div>
                <div className='py-1 px-4 rounded-full shadow'>
                    <p className='text-sm text-grey-300 capitalize'>4.8</p>
                </div>
            </div>
            <div className='border-b border-solid border-grey-200 py-5'>
                <p className='font-bold text-lg group-hover:text-white'>Lorem Ipsum Dolor</p>
                <div className='flex gap-2 items-center'>
                    <p className='text-grey-300'>[Lo-rem]</p>
                    <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 7.00008V11.0001C0 11.5501 0.45 12.0001 1 12.0001H4L7.29 15.2901C7.92 15.9201 9 15.4701 9 14.5801V3.41008C9 2.52008 7.92 2.07008 7.29 2.70008L4 6.00008H1C0.45 6.00008 0 6.45008 0 7.00008ZM13.5 9.00008C13.5 7.23008 12.48 5.71008 11 4.97008V13.0201C12.48 12.2901 13.5 10.7701 13.5 9.00008ZM11 1.45008V1.65009C11 2.03009 11.25 2.36009 11.6 2.50009C14.18 3.53009 16 6.06008 16 9.00008C16 11.9401 14.18 14.4701 11.6 15.5001C11.24 15.6401 11 15.9701 11 16.3501V16.5501C11 17.1801 11.63 17.6201 12.21 17.4001C15.6 16.1101 18 12.8401 18 9.00008C18 5.16008 15.6 1.89008 12.21 0.600085C11.63 0.370085 11 0.820085 11 1.45008Z" fill="#272738"/>
                    </svg>
                </div>
            </div>
            <p className='font-bold text-xs text-grey-300 my-3'>Lorem ipsum dolor sit amet</p>
        </Link>
    )
}

export default Card;