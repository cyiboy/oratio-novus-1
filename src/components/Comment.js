import RoundImg from './RoundImg'
import images from '../assets/images'

export const NoComment = () =>{
    return(
        <div className='my-9'>
            <img src={images.noComment} alt="no comment" />
            <p className='text-center font-bold text-xl text-primary-500 my-10'>No Comments Yet</p>
        </div>
    )
}

export const Comment = () =>{
    return(
        <div className='border-b border-solid border-grey-300 pb-5 mb-4'>
            <div className='flex gap-4 items-center'>
                <RoundImg img={images.userImg} />
                <div>
                    <p className='text-primary-500 font-bold text-lg'>Valentina Alegra</p>
                    <p className="text-grey-300 text-xs">@valaleg</p>
                </div>
            </div>
            <p className="text-grey-300 text-base my-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dignissim luctus leo, vel suscipit elit accumsan 
                quis. Nam mattis quam eget libero lobortis commodo. Cras vehicula nisi libero, aliquam elementum nisi sodales vitae
            </p>
            <p className="text-grey-300 font-bold text-xs">2days ago</p>
        </div>
    )
}