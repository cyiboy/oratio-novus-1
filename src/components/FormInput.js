import { Link } from "react-router-dom"


function FormInput({name, type}){
    return(
        <div className='mt-4'>
            <div className="flex justify-between items-center">
                <p className='font-bold text-base capitalize mb-2'>{ name }</p>
                {type === 'password' && <Link to="/forget-password" className="text-xs text-blue-100">forgot password?</Link>}
            </div>
            <input type={ type } className='flex outline-0 w-full py-2 px-3 rounded-lg border-solid border border-primary-300 focus:bg-transparent bg-primary-300' name={name} />
        </div>
    )
}

export default FormInput