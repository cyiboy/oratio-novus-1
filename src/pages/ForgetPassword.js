import { FormInput } from '../components/FormInput';
import Button from '../components/Button';
import Hero from '../components/Hero';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function ForgotPassword(){
    const navigate = useNavigate();

    let validationSchema = () => {
        return Yup.object({
            email: Yup.string().email('Invalid email address').required('email field isRequired')
        })
    }
    let onSubmit = value => {
        console.log(value)
    }

    const formik = useFormik({
        initialValues: { email: '' }, 
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('email field isRequired')
        }),
        onSubmit
    })
    return(
        <Hero>
            <div className='absolute top-7 right-6 w-full flex justify-between items-center'>
                <div 
                className='w-7 h-7 rounded-full border flex justify-center items-center translate-x-10 sm:translate-x-14'
                onClick={() => navigate(-1)}>
                    <i className="fa-solid fa-angle-left"></i>
                </div>
                <p className='text-xs'>Not a member?<Link to="/sign-up" className='text-blue-100'>sign up now</Link></p>
            </div>
            <form className="w-11/12 sm:w-10/12 md:w-on-400" onSubmit={formik.handleSubmit}>
            <p className='text-2xl font-bold'>Forgot Password?</p>
            <p className='text-sm'>
                Forgot Password? Enter your email address registered with us and we'll 
                send you instructions to reset your password.Email Address Submit
            </p>
            <FormInput name='email' type='email' formik={formik}/> 
            <Button name='submit' dark={true} large={true} type="submit"/>
            </form>
        </Hero>
    )
}

export default ForgotPassword