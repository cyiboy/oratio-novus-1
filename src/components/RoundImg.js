
function RoundImg({ img }){
    return(
        <div className="w-11 h-11 rounded-full">
            <img src={img} alt='profile' className='object-cover h-full w-full'/>
        </div>
    )
}

export default RoundImg