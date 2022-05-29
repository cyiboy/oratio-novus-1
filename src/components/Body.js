import Header from './header'

function Body({ children }){
    return(
        <div className="w-screen h-screen overflow-x-hidden bg-grey-200">
            <div className="w-on-lg h-full mx-auto">
                <Header />
                { children }
            </div>
        </div>
    )
}

export default Body;