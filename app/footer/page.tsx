import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-transparent p-4 flex justify-between items-center text-white" style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <div className='footerio text-sm md:text-1xl'>
        ©chrncle 2023
      </div>
      <div className="flex items-center space-x-4">
        <Link href="https://twitter.com/chrnclee" target="_blank" rel="noopener norefferer">
          <p className="text-white hover:text-gray-300">
            <Image
            src="/images/x.png"
            alt="x logo"
            width={25}
            height={25}>
            </Image>
          </p>
        </Link>
        <Link href="https://www.instagram.com/chrncl.e" target="_blank" rel="noopener norefferer">
          <p className="text-white hover:text-gray-300">
          <Image
            src="/images/ig.png"
            alt="x logo"
            width={25}
            height={25}>
            </Image>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;