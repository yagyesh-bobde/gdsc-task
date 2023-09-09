import Logo from '../../assets/Header/gdsclogo.svg'
import Pin from '../../assets/Footer/location.svg'
import Email from '../../assets/Footer/email.svg'
import Linkedin from '../../assets/Footer/linkedin.svg'
import Twitter from '../../assets/Footer/twitter.svg'
import Instagram from '../../assets/Footer/insta.svg'
import './Footer.css'

const Footer = () => {
  return (
    <div className='rounded-t-[50px] text-white footer flex flex-col' style={{
      
    }}> 
      <div className='flex p-[5vw] justify-between'>
          <div className="logo flex flex-col items-center justify-center text-center">
            <img src={Logo} alt="logo" />
            <span className='font-semibold text-3xl'>
              Google Developer Student Clubs
            </span><br/>
            <span className='text-xl' >RCOEM</span>
          </div>
          <div className="location w-1/3 text-xl flex flex-col gap-10">
            <div className="flex items-center gap-5">
              <img src={Pin} alt="" />
              <p>
                Shri Ramdeobaba College of Engineering and Management, Ramdeo Tekdi, Gittikhadan,Katol Road,Nagpur- 440013
              </p>
            </div>
            <div className='flex items-center gap-5'>
              <img src={Email} alt="" />
              <p>
                dsc.rknec@gmail.com
              </p>
            </div>
          </div>
          <div className="socials flex flex-col items-center justify-end">
            <p className='text-2xl my-2 font-semibold' >Follow Us:</p>
            <ul className='flex gap-5 items-center justify-center'>
              <li className='grid place-items-center bg-white rounded-full w-[75px] h-[75px]'>
                <img src={Instagram} alt="instagram" />
              </li>
              <li className='grid place-items-center bg-white rounded-full w-[75px] h-[75px]'>
                <img src={Linkedin} alt="linkedin" />
              </li>
              <li className='grid place-items-center bg-white rounded-full w-[75px] h-[75px]'>
                <img src={Twitter} alt="twitter" />
              </li>
            </ul>
          </div>
      </div>
      <div className=" text-center text-xl mb-5">
        <hr className='mx-auto bg-white w-[95vw] h-[2px] border-2 my-3' />
        <p className=''>
            Made with ❤️ by GDSC RCOEM
          </p>
      </div>
    </div>
  )
}

export default Footer