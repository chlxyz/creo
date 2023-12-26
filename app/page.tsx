import Navbar from './navbar/page';
import Main from './home/page';

export default function Home(){
  return(
    <div className='min-h-screen bg-white'>
      <Navbar />
      <Main />
    </div>
  )
}