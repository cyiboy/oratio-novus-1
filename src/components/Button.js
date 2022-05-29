
function Button({name, dark, large}){
    return(
        <button 
        className={`capitalize text-center py-2 ${dark ? 'bg-primary-500 text-white' : 'bg-primary-200 text-black'} rounded-lg text-xs ${large ? 'w-48' : 'w-32'}  my-4`}>
            { name }
        </button>
    )
}

export default Button