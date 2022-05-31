import {FormInput} from '../components/FormInput';
import Button from '../components/Button';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';

function Signup(){
    let initialValues = {
        name: '',
        username: '',
        email: '',
        password: ''
    }
    let validationSchema = () => {
        return Yup.object({
            name: Yup.string().required('name field is Required'),
            username: Yup.string().required('username field isRequired'),
            email: Yup.string().email('Invalid email address').required('email field isRequired'),
            password: Yup.string().min(6, 'Plese enter a password withe min of 6 characters').required('password field isRequired')
        })
    }
    let onSubmit = value => {
        console.log(value)
    }

    let formik = useFormik({initialValues, validationSchema, onSubmit})
    return(
        <Hero>
            <>
            <p className='absolute text-xs top-7 right-6'>Already a member? <Link to="/sign-in" className='text-blue-100'>sign in now</Link></p>
            <form className="w-11/12 sm:w-10/12 md:w-on-400" onSubmit={formik.handleSubmit}>
            <p className='text-2xl font-bold'>Sign Up</p>
            <div className='border-solid border-b border-primary-300 mb-7'>
                <button className='flex justify-center w-full py-2 mt-4 mb-6 rounded-lg border-solid border border-primary-300'>
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" className='mx-5'>
                    <path d="M19.7499 10.2456C19.7499 9.51348 19.684 8.8129 19.5615 8.13922H10.085V11.9988L15.5427 12C15.3213 13.2842 14.6089 14.379 13.5174 15.1088V17.6129H16.7661C18.6631 15.869 19.7499 13.2912 19.7499 10.2456Z" fill="#4285F4"/>
                    <path d="M13.5185 15.1088C12.6142 15.7147 11.4496 16.0691 10.0873 16.0691C7.45553 16.0691 5.22298 14.3077 4.42345 11.9334H1.07227V14.5158C2.73255 17.7883 6.14497 20.0339 10.0873 20.0339C12.812 20.0339 15.1011 19.1439 16.7673 17.6117L13.5185 15.1088Z" fill="#34A853"/>
                    <path d="M4.10833 10.0176C4.10833 9.35094 4.22019 8.7065 4.4239 8.10065V5.51819H1.07271C0.386221 6.87141 0 8.39889 0 10.0176C0 11.6363 0.387399 13.1638 1.07271 14.517L4.4239 11.9346C4.22019 11.3287 4.10833 10.6843 4.10833 10.0176Z" fill="#FABB05"/>
                    <path d="M10.0873 3.96491C11.5745 3.96491 12.9062 4.47368 13.9577 5.46784L16.8367 2.61053C15.0881 0.992983 12.8085 0 10.0873 0C6.14614 0 2.73255 2.24561 1.07227 5.51813L4.42345 8.10059C5.22298 5.72632 7.45553 3.96491 10.0873 3.96491Z" fill="#E94235"/>
                </svg>
                <p className='text-grey-100 text-sm'>Sign in with Google</p>
                </button>
            </div>

            <div className='flex jusitify-between w-full gap-x-3.5'>
                <FormInput name='name' type='text' formik={formik}/> 
                <FormInput name='username' type='text' formik={formik}/>
            </div> 
            <FormInput name='email' type='email' formik={formik}/>
            <FormInput name='password' type='password' formik={formik}/>
            <Button name='sign up' dark={true} large={true} type="submit"/>
            </form>
            </>
        </Hero>
    )
}

export default Signup