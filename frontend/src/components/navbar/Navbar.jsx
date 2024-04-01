import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined';
import profilepic from './profilepic.jpeg'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="wrapper">
            <div className="search">
                <input type="text" placeholder='search...' />
                <SearchIcon/>
            </div>
            <div className="items">
                <div className="item">
                    <NotificationsNoneIcon className='icon'/>
                    <div className="counter">
                        1
                    </div>

                </div>
                <div className="item">
                    <Brightness4OutlinedIcon className='icon'/>

                </div>
                <div className="item">
                    <img src={profilepic} alt="" className='avatar'/>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar