import { Link } from 'react-router-dom'
import Body from '../components/Body'
import Card from '../components/Card'


function Home(){
    return(
        <Body>
            <div className='relative on-grid gap-y-9 gap-x-18 w-full h-full mt-6'>
                <Card /> <Card /> <Card />
                <Link to="/add" className='fixed bottom-4 right-5 cursor-pointer flex rounded-on-md shadow-on-shadow bg-white py-2 justify-center items-center gap-x-4 w-14 sm:w-64'>
                    <p className='text-3xl'>&#43;</p>
                    <p className='text-grey-300 hidden sm:block'>Add new Word</p>
                </Link>
            </div>
        </Body>
    )
}

export default Home