import Title from '../../assets/Main/title.png'
import Mainbg from '../../assets/Main/group.svg'
import Aeroplance from '../../assets/Main/aeroplane.svg'
import Arrow from '../../assets/Main/arrow.svg'

const Main = () => {
  return (
    <div id="#" className="px-[5vw] relative md:pt-[10vh] h-screen grid place-content-center gap-5"> 
      <img className='absolute top-[15vh] right-[12vw]' src={Aeroplance} alt="aeroplane" />  
      <div className="title flex flex-col items-center justify-center">
          <img src={Title}  alt="GDSC" />
          <p className='text-center text-5xl text-gray-500 font-semibold my-5'>RCOEM Chapter</p>
        </div>
        <div className="bg flex flex-col items-center justify-center text-3xl text-center gap-1">
          <img src={Mainbg} alt="group" />
          <p className='w-1/2 text-gray-500'>
          Google Developer Student Clubs are community groups for college and university students interested in Google developer technologies.
          </p>
        </div>
        <div className='flex flex-col items-center justify-cente'>
          <button className="bg-blue-500 text-white text-3xl p-5 min-w-[150px] min-h-[50px] w-[250px] rounded-md shadow-md duration-300 hover:scale-105 hover:shadow-xl">
            Join Us
          </button>
        </div>
        <div className="flex items-center justify-center -mb-5">
          <img width={50} src={Arrow} alt="go down" />
        </div>
    </div>
  )
}

export default Main