import Nav from './navbar/page';
import Main from './home/page';
import MoonSketch  from './moon/Sketch';

export default function Home(){
  return(
    <div className='home min-h-screen bg-black'>
      <Nav />
      {/* <MoonSketch /> */}
      <Main />
    </div>
  )
}