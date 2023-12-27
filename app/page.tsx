import Navbar from './navbar/page';
import Main from './home/page';
import MoonSketch  from './moon/Sketch';

export default function Home(){
  return(
    <div className='min-h-screen bg-black'>
      <Navbar />
      <MoonSketch />
      <Main />
    </div>
  )
}