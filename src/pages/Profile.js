import Body from '../components/Body'
import images from '../assets/images'
import { FormInput2 } from '../components/FormInput'

function Profile(){
    return(
        <Body>
            <div className='w-11/12 mx-auto'>
                <p className="font-bold text-2xl text-primary-500 text-center mb-11">Profile</p>
                <div className='flex justify-between w-full mx-auto'>
                    <div className='flex justify-center items-center w-3/12'>
                        <div>
                            <div className='relative my-5'>
                                <div className='flex w-48 h-48 rounded-full border-4 border-solid border-white overflow-hidden shadow-on-shadow'>
                                    <img src={images.profilePics} className="object-cover w-full h-full"/>
                                </div>
                                <div className='absolute flex justify-center items-center top-2 right-3 bg-white w-9 h-9 rounded-full'>
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.938 5.35597C12.7519 8.53284 9.57043 11.7149 6.39182 14.8993C6.22349 15.0682 6.02277 15.1342 5.80469 15.1775C4.44706 15.4494 3.08943 15.7201 1.73123 15.9897C1.66528 16.003 1.5976 16.0059 1.56174 16.0099C1.10013 16.0065 0.842143 15.653 0.934696 15.1868C1.04287 14.6396 1.15566 14.0935 1.26615 13.5469C1.43737 12.6983 1.61206 11.8509 1.77634 11.0011C1.81279 10.8114 1.89782 10.6633 2.03144 10.5297C5.20773 7.35569 8.38286 4.18171 11.5545 1.00368C11.6806 0.877002 11.7477 0.855599 11.8871 0.996164C13.2297 2.3509 14.5798 3.6987 15.9328 5.04361C16.0549 5.1645 16.0693 5.22524 15.938 5.35597Z" fill="#272738"/>
                                    </svg>
                                </div>
                            </div>
                            <p className='capitalize text-primary-500 text-2xl font-bold text-center'>John Doe</p>
                            <p className='text-xs text-grey-300 text-center'>@johndoe91</p>
                            <p className='text-grey-300 text-center my-3'>lagos, Nigeria</p>
                        </div>
                        {/* <div>
                            <
                        </div> */}
                    </div>
                    <div className='border border-solid border-primary-500 w-5/12'>
                        <form>
                            <p className="text-primary-500 text-lg font-bold">Details</p>
                            <FormInput2 label="user Name" name="username" type="input" placeholder="Johndoe91"/>
                            <div className='flex justify-between gap-5'>
                                <FormInput2 label="first Name" name="firstName" type="input" placeholder="John"/>
                                <FormInput2 label="D.O.B" name="DOB" type="input"/>
                            </div>
                            <div className='flex justify-between gap-5'>
                                <FormInput2 label="last Name" name="lastName" type="input" placeholder="Doe"/>
                                <div>
                                    <p className="capitalize text-primary-500 font-medium">Gender</p>
                                    <label htmlFor='male'>
                                        <input type='radio' name='gender' id='male' />
                                    </label>
                                    <label htmlFor='female'>
                                        <input type='radio' name='gender' id='female' />
                                    </label>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='border border-solid border-primary-500 w-3/12'></div>
                </div>
            </div>     
        </Body>
    )
}

export default Profile