import Header from './header'

function Body({ children }){
    return(
        <div className="w-screen h-screen overflow-x-hidden bg-[#F3F3F3]">
            <div className="w-full px-6 2lg:w-on-lg h-full mx-auto">
                <Header />
                { children }
            </div>
        </div>
    )
}

export default Body;