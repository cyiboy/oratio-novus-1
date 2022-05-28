import FormInput from '../components/FormInput';
import Button from '../components/Button';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

function ForgotPassword(){
    return(
        <Hero>
            <p className='absolute text-xs top-7 right-6'>Not a member?<Link to="/sign-up" className='text-blue-100'>sign up now</Link></p>
            <form className="w-1/2">
            <p className='text-2xl font-bold'>Forgot Password?</p>
            <p className='text-sm'>
                Forgot Password? Enter your email address registered with us and we'll 
                send you instructions to reset your password.Email Address Submit
            </p>
            <FormInput name='email' type='email'/> 
            <Button name='submit' dark={true}/>
            </form>
        </Hero>
    )
}

export default ForgotPassword