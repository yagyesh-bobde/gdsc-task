import { useState } from 'react'
import GDSCLogo from '../../assets/Header/gdsclogo.svg'
import styles from './Header.module.css'

const Header = () => {
  const [showDrawer, setshowDrawer] = useState(false)
  return (
    <div className='sticky top-0 left-0 z-20' >
        <nav className="hidden sm:flex items-center justify-between w-screen min-h-[10vh] shadow-xl px-[5vw]">
            <div className='img flex items-center gap-5 text-gray-400 text-xl'>
              <img src={GDSCLogo} alt="logo" />
              <p>
                GDSC RCOEM
              </p>
            </div>
            <ul className='flex items-center justify-between w-1/2'>
              <a href='#' className='text-gray-400 text-xl'>
                <li>
                  Home
                </li>
              </a>
              <a href='#events' className='text-gray-400 text-xl'>
                <li>
                  Events
                </li>
              </a>
              <a href='#team' className='text-gray-400 text-xl'>
                <li>
                  Team
                </li>
              </a>
              <a href='#alumni' className='text-gray-400 text-xl'>
                <li>
                  Alumni
                </li>
              </a>
              <a href='#contact' className='text-gray-400 text-xl'>
                <li>
                  Contact
                </li>
              </a>
          <label
            className={`${styles.toggle} inline-flex 
                 }`}
          >
            <label
              className={`relative inline-flex items-center cursor-pointer `}
            >
              <input
                type="checkbox"
              
                className={`sr-only peer ${styles.themeToggler} `}
              />
              <div
                className={`${styles.themeTogglerBackground} w-11 h-6 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all border-gray-300 `}
              ></div>
            </label>
          </label>
            </ul>
        </nav>


       <div className="drawer block absolute top-0 left-0 w-[200px] h-[250px]">
          
      </div>
    </div>
  )
}

export default Header