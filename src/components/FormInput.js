import { Link } from "react-router-dom"


export const FormInput = ({name, type}) => {
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

export const FormInput2 = ({ name, type, label, placeholder }) => {
    return(
        <label htmlFor={ name } className="mb-7">
            <p className="capitalize text-primary-500 font-medium">{ label }</p>
            {
                type === 'input' ?
                <input type='text' name={ name } id={ name }  className="py-2 px-3 my-1 mb-5 shadow-on-shadow rounded-lg bg-white w-full" placeholder={placeholder}/>:
                <textarea name="description" className="py-2 px-3 my-1 mb-5 shadow-on-shadow rounded-lg bg-white w-full h-28"></textarea>
            }
        </label>
    )
}