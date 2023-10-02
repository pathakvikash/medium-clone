import Link from 'next/link';
import { SiMedium } from 'react-icons/si';
import { BsApple } from 'react-icons/bs';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
function Footer() {
  const navText = ['About', 'Help', 'Terms', 'Privacy'];
  return (
    <div className='bg-black text-white font-bold flex flex-col px-3'>
      <div className='flex gap-2 flex-col py-6 px-3'>
        <Link href='/' className='flex items-center  gap-2 '>
          <SiMedium className='text-5xl ' />
          <h1 className='text-3xl font-serif font-[400]'>Medium</h1>
        </Link>
        <div className='flex gap-4 '>
          {navText.map((item, index) => (
            <Link key={index} href={item} className='font-[400] text-[12px]'>
              {item}
            </Link>
          ))}
        </div>
        <hr className='my-2' />
        <p className='text-[18px] pb-2 font-[400]'>Get Medium App</p>
        <div className='box flex gap-3'>
          <div className='appstore border gap-1 border-white rounded-md w-fit items-center px-2 py-1 flex'>
            <BsApple className='text-2xl' />
            <div className='flex flex-col'>
              <p className='text-[9px] font-[400]'>Download on the</p>
              <h3 className='text-1xl font-[500]'>App Store</h3>
            </div>
          </div>

          <div className='playstore border gap-1 border-white rounded-lg w-fit items-center px-2 py-1 flex'>
            <IoLogoGooglePlaystore className='text-2xl' />
            <div className='flex flex-col'>
              <p className='text-[9px] font-[400]'>Get it on</p>
              <h3 className='text-1xl font-[500]'>Google Play</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
