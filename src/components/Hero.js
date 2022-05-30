import images from '../assets/images'

function Hero(props){
    return(
        <div className="flex w-screen h-screen">
            <div className="hidden md:flex justify-center items-center h-full w-5/12 bg-primary-300">
                <img src={images.image} alt="temp"/>
            </div>
            <div className="flex justify-center items-center w-full md:w-7/12 h-full relative">
                { props.children }
            </div>
        </div>
    )
}

export default Hero