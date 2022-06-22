
function RoundImg({ img }){
    return(
        <div className="w-11 h-11 rounded-full overflow-hidden">
            <img src={img} alt='profile' className='object-cover h-fit w-fit'/>
        </div>
    )
}

export default RoundImg