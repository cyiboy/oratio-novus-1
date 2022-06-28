import images from '../assets/images'
import { useLocation, Link } from 'react-router-dom'

function Header(){
    let location = useLocation()
    return(
        <header className="flex w-full items-center justify-between my-3 py-1 sticky inset-0 bg-grey-200 z-50 backdrop-blur-sm">
            <Link to='/' className="font-bold hero xs:text-[28px]">Oratio Novus</Link>

            {
                location.pathname === '/' &&
                (<div className='flex   md:justify-end basis-2/12 xs:basis-5/12 sm:basis-7/12 2md:basis-9/12 md:basis-7/12 ml-auto md:ml-0'>
                    <div className="flex rounded-xl bg-white py-2.5 px-3 xs:px-6 shadow-on-shadow sm:basis-7/12 md:basis-9/12 mr-2 xs:mr-4 md:mr-0">
                        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.7555 18.6065L16.3182 15.2458L16.2376 15.1233C16.0878 14.9742 15.883 14.8902 15.6692 14.8902C15.4554 14.8902 15.2505 14.9742 15.1007 15.1233C12.1795 17.8033 7.67815 17.949 4.58201 15.4637C1.48586 12.9784 0.755668 8.63337 2.87568 5.31017C4.9957 1.98697 9.30807 0.716847 12.9528 2.34214C16.5976 3.96743 18.4438 7.98379 17.267 11.7276C17.1823 11.9981 17.2515 12.2922 17.4487 12.4992C17.6459 12.7062 17.9411 12.7946 18.223 12.7311C18.505 12.6676 18.7309 12.4619 18.8156 12.1914C20.2224 7.74864 18.0977 2.96755 13.8161 0.941058C9.53449 -1.08544 4.38084 0.250824 1.68905 4.08542C-1.00273 7.92001 -0.424821 13.1021 3.04893 16.2795C6.52268 19.4569 11.8498 19.6759 15.5841 16.7949L18.6277 19.7705C18.942 20.0765 19.4502 20.0765 19.7645 19.7705C20.0785 19.4602 20.0785 18.9606 19.7645 18.6503L19.7555 18.6065Z" fill="#272738"/>
                        </svg>
                        <input type='text' className="outline-0 bg-transparent w-full ml-3 hidden sm:block" placeholder="Search your keywords here"/>
                    </div>

                    <div className="bg-white flex sm:basis-1/12 basis-0 md:basis-2/12 justify-center items-center gap-2 rounded-xl py-2.5 px-3 xs:px-6 shadow-on-shadow mr-2 xs:mr-4 md:mr-0">
                        <svg width="16" height="13" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.25 10.3745H15.2653C15.1039 9.83279 14.7718 9.35767 14.3186 9.01984C13.8654 8.682 13.3153 8.49951 12.75 8.49951C12.1848 8.49951 11.6346 8.682 11.1814 9.01984C10.7282 9.35767 10.3962 9.83279 10.2347 10.3745H0.750023C0.551111 10.3745 0.360345 10.4535 0.219693 10.5942C0.0790405 10.7348 2.28885e-05 10.9256 2.28885e-05 11.1245C2.28885e-05 11.3234 0.0790405 11.5142 0.219693 11.6548C0.360345 11.7955 0.551111 11.8745 0.750023 11.8745H10.2347C10.3962 12.4162 10.7282 12.8913 11.1814 13.2292C11.6346 13.567 12.1848 13.7495 12.75 13.7495C13.3153 13.7495 13.8654 13.567 14.3186 13.2292C14.7718 12.8913 15.1039 12.4162 15.2653 11.8745H17.25C17.4489 11.8745 17.6397 11.7955 17.7804 11.6548C17.921 11.5142 18 11.3234 18 11.1245C18 10.9256 17.921 10.7348 17.7804 10.5942C17.6397 10.4535 17.4489 10.3745 17.25 10.3745ZM0.749975 3.62442L4.23475 3.62451C4.39619 4.16623 4.72821 4.64135 5.1814 4.97918C5.6346 5.31702 6.18476 5.49951 6.75002 5.49951C7.31528 5.49951 7.86544 5.31702 8.31864 4.97918C8.77184 4.64135 9.10386 4.16623 9.2653 3.62451L17.25 3.62442C17.4489 3.62442 17.6397 3.5454 17.7803 3.40475C17.921 3.2641 18 3.07333 18 2.87442C18 2.67551 17.921 2.48474 17.7803 2.34409C17.6397 2.20344 17.4489 2.12442 17.25 2.12442L9.2653 2.12451C9.10386 1.5828 8.77184 1.10767 8.31864 0.76984C7.86544 0.432005 7.31528 0.249512 6.75002 0.249512C6.18476 0.249512 5.6346 0.432005 5.1814 0.76984C4.72821 1.10767 4.39619 1.5828 4.23475 2.12451L0.750069 2.12442H0.750023C0.551111 2.12441 0.360343 2.20342 0.219686 2.34407C0.0790294 2.48472 6.09204e-06 2.67548 3.52219e-10 2.8744C-6.09134e-06 3.07331 0.0790058 3.26408 0.219654 3.40473C0.360302 3.54539 0.551065 3.62441 0.749977 3.62442H0.749975Z" fill="#272738"/>
                        </svg>
                        <p className="text-grey-300 hidden sm:block">Filters</p>
                    </div>
                </div>)
            }
            <div className='relative group'>
                <div className="w-12 h-12 rounded-full">
                    <img src={images.profilePics} alt='profile'/>
                </div>
                
                <ul className='absolute top-full right-5 bg-white py-5 w-40 rounded-b-on-md rounded-tl-on-md shadow-on-shadow-sm hidden group-hover:block -translate-y-full group-hover:translate-y-0 origin-top-right'>
                    <li className='w-full py-2 text-sm text-primary-500 pl-4 hover:bg-primary-100 cursor-pointer'><Link to="/profile">Profile</Link></li>
                    <li className='w-full py-2 text-sm text-primary-500 pl-4 hover:bg-primary-100 cursor-pointer  border-grey-100'>Personal Word</li>
                    <Link to="/sign-in" className='flex justify-between w-full py-2 text-sm text-primary-500 px-4 hover:bg-primary-100 cursor-pointer'>
                        <p>sign out</p>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.43424 3C2.78991 3 2.26758 3.52233 2.26758 4.16667V15.8333C2.26758 16.4777 2.78991 17 3.43424 17H10.4342C11.0786 17 11.6009 16.4777 11.6009 15.8333V15.25H5.51763C4.6892 15.25 4.01763 14.5784 4.01763 13.75V6.25C4.01763 5.42157 4.6892 4.75 5.51763 4.75H11.6009V4.16667C11.6009 3.52233 11.0786 3 10.4342 3H3.43424Z" fill="#272738"/>
                            <path d="M13.5335 6.17315C13.2946 6.4101 13.2946 6.79286 13.5335 7.02981L15.9038 9.3932L6.61248 9.3932C6.27562 9.3932 6 9.6666 6 10.0008C6 10.3349 6.27562 10.6083 6.61248 10.6083L15.9038 10.6083L13.5274 12.9656C13.2885 13.2026 13.2885 13.5853 13.5274 13.8223C13.7662 14.0592 14.1521 14.0592 14.391 13.8223L17.8209 10.426C18.0597 10.1891 18.0597 9.80634 17.8209 9.5694L14.3971 6.17315C14.1582 5.94228 13.7662 5.94228 13.5335 6.17315Z" fill="#272738"/>
                        </svg>
                    </Link>
                </ul>
            </div>
        </header>
    )
}

export default Header