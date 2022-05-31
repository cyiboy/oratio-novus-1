import Body from '../components/Body'
import images from '../assets/images'
import Button from '../components/Button'
import { FormInput2 } from '../components/FormInput'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'

function Profile(){
    let [image, setImage] = useState(images.profilePics)

    function changeImage(e){
        let reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onload = () => {
            setImage(reader.result)
        }
    }
    return(
        <Body location={useLocation}>
            <div className='w-full  xs:w-11/12 mx-auto'>
                <p className="font-bold text-2xl text-primary-500 text-center mb-11">Profile</p>
                <div className='flex flex-col md:flex-row justify-between w-full mx-auto'>
                    <div className='flex justify-center items-center w-full md:w-3/12'>
                        <div>
                            <div className='relative my-5'>
                                <div className='flex w-48 h-48 rounded-full border-4 border-solid border-white overflow-hidden shadow-on-shadow'>
                                    <img src={image} className="object-cover w-full h-full"/>
                                </div>
                                <label 
                                    htmlFor='image' 
                                    className='absolute flex justify-center items-center top-2 right-3 bg-white w-9 h-9 rounded-full'>
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.938 5.35597C12.7519 8.53284 9.57043 11.7149 6.39182 14.8993C6.22349 15.0682 6.02277 15.1342 5.80469 15.1775C4.44706 15.4494 3.08943 15.7201 1.73123 15.9897C1.66528 16.003 1.5976 16.0059 1.56174 16.0099C1.10013 16.0065 0.842143 15.653 0.934696 15.1868C1.04287 14.6396 1.15566 14.0935 1.26615 13.5469C1.43737 12.6983 1.61206 11.8509 1.77634 11.0011C1.81279 10.8114 1.89782 10.6633 2.03144 10.5297C5.20773 7.35569 8.38286 4.18171 11.5545 1.00368C11.6806 0.877002 11.7477 0.855599 11.8871 0.996164C13.2297 2.3509 14.5798 3.6987 15.9328 5.04361C16.0549 5.1645 16.0693 5.22524 15.938 5.35597Z" fill="#272738"/>
                                    </svg>
                                    <input type='file' name='image' id='image' className='hidden' onChange={(e) => changeImage(e)}/>
                                </label>
                            </div>
                            <p className='capitalize text-primary-500 text-2xl font-bold text-center'>John Doe</p>
                            <p className='text-xs text-grey-300 text-center'>@johndoe91</p>
                            <p className='text-grey-300 text-center my-3'>lagos, Nigeria</p>
                        </div>
                        {/* <div>
                            <
                        </div> */}
                    </div>
                    <div className='w-full md:w-5/12'>
                        <form>
                            <p className="text-primary-500 text-lg font-bold mb-5 text-center md:text-left">Details</p>
                            <FormInput2 label="user Name" name="username" type="input" placeholder="Johndoe91"/>
                            <div className='flex justify-between gap-5'>
                                <FormInput2 label="first Name" name="firstName" type="input" placeholder="John"/>
                                <FormInput2 label="D.O.B" name="DOB" type="input" placeholder="DD/MM/YYYY"/>
                            </div>
                            <div className='flex justify-between gap-5 border-b border-solid border-grey-300 mb-3'>
                                <FormInput2 label="last Name" name="lastName" type="input" placeholder="Doe"/>
                                <div className='flex flex-col gap-1 w-6/12'>
                                    <p className="capitalize text-primary-500 font-medium">Gender</p>
                                    <label htmlFor='male'>
                                        <input type='radio' value='male' name='gender' id='male' className='' />
                                        <span className='text-base capitalize mb-2 ml-2 text-primary-500'>Male</span>
                                    </label>
                                    <label htmlFor='female'>
                                        <input type='radio' value='female' name='gender' id='female' />
                                        <span className='text-base capitalize mb-2 ml-2 text-primary-500'>Female</span>
                                    </label>
                                </div>
                            </div>
                            <FormInput2 
                            label="bio" 
                            name="bio" 
                            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dignissim luctus leo, vel suscipit elit"/>

                            <div className="w-full flex justify-end gap-4">
                                <Button dark={false} name="back" large={false}/>
                                <Button dark={true} name="save" large={false}/>
                            </div>
                        </form>
                    </div>
                    <div className='w-full md:w-3/12'>
                        <p className="text-primary-500 text-lg text-center md:text-left font-bold mb-5">Contact Details</p>
                        <ul className='flex flex-col'>
                            <li className='flex justify-start gap-3 items-center mb-4'>
                                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM17 14H3C2.45 14 2 13.55 2 13V4L8.94 8.34C9.59 8.75 10.41 8.75 11.06 8.34L18 4V13C18 13.55 17.55 14 17 14ZM10 7L2 2H18L10 7Z" fill="#272738"/>
                                </svg>
                                <p className='text-grey-300'>simplemail@gmail.com</p>
                            </li>
                            <li className='flex justify-start gap-3 items-center mb-4'>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.23 12.2598L13.69 11.9698C13.08 11.8998 12.48 12.1098 12.05 12.5398L10.21 14.3798C7.38004 12.9398 5.06004 10.6298 3.62004 7.78977L5.47004 5.93976C5.90004 5.50977 6.11004 4.90977 6.04004 4.29977L5.75004 1.77977C5.63004 0.769766 4.78004 0.00976562 3.76004 0.00976562H2.03004C0.900041 0.00976562 -0.0399593 0.949766 0.0300407 2.07977C0.560041 10.6198 7.39004 17.4398 15.92 17.9698C17.05 18.0398 17.99 17.0998 17.99 15.9698V14.2398C18 13.2298 17.24 12.3798 16.23 12.2598Z" fill="#272738"/>
                                </svg>
                                <p className='text-grey-300'>+124536578965</p>
                            </li>
                            <li className='flex justify-start gap-3 items-center mb-4'>
                                <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8.2C0 3.22 3.8 0 8 0C12.2 0 16 3.22 16 8.2C16 11.38 13.55 15.12 8.67 19.43C8.29 19.76 7.72 19.76 7.34 19.43C2.45 15.12 0 11.38 0 8.2ZM8 2C4.85 2 2 4.61822 2 8.66751C2 11.2532 3.8375 14.2942 7.505 17.7988C7.79 18.0671 8.2175 18.0671 8.5025 17.7988C12.1625 14.2942 14 11.2532 14 8.66751C14 4.61822 11.15 2 8 2Z" fill="#272738"/>
                                    <circle cx="8" cy="8" r="3" fill="#272738"/>
                                </svg>
                                <p className='text-grey-300'>Lagos, Nigeria</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>     
        </Body>
    )
}

export default Profile