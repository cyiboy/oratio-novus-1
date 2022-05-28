
function Button({name, dark}){
    return(
        <button 
        className={`capitalize text-center py-2 ${dark ? 'bg-primary-400' : 'bg-primary-200'} ${dark ? 'text-white' : 'text-black'} text-white rounded-lg text-xs w-48 my-4`}>
            { name }
        </button>
    )
}

export default Button