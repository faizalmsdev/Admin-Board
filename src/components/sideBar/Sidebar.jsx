    import './sideBar.scss';
    import DashboardIcon from '@mui/icons-material/Dashboard';
    import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
    import StorefrontIcon from '@mui/icons-material/Storefront';
    import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
    import LocalShippingIcon from '@mui/icons-material/LocalShipping';
    import QueryStatsIcon from '@mui/icons-material/QueryStats';
    import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
    import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
    import FitbitIcon from '@mui/icons-material/Fitbit';
    import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
    import Person2Icon from '@mui/icons-material/Person2';
    import LogoutIcon from '@mui/icons-material/Logout';
    import {Link} from "react-router-dom";
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';

    const Sidebar = () => {
        const { dispatch } = useContext(DarkModeContext);
    return (
        <div className='sidebar'>
            <div className='top'>
                <Link to="/" style={{textDecoration : "none"}}>
                <span className='logo'>Admin</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <Link to="/" style={{textDecoration : "none"}} >
                    <li>
                        <DashboardIcon className='icon' />
                        <span>Dashboard</span>
                    </li>
                    </Link>
                    <p className="title">LISTS</p>
                    <Link to="/users" style={{textDecoration : "none"}}>
                    <li>
                        <PersonOutlineIcon   className='icon'/>
                        <span>Users</span>
                    </li>
                    </Link>
                    <Link to="/products" style={{textDecoration : "none"}}>
                    <li>
                        <StorefrontIcon className='icon' />
                        <span>Products</span>
                    </li>
                    </Link>
                    <li>
                        <AddShoppingCartIcon  className='icon'/>
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingIcon className='icon'/>
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                        <QueryStatsIcon  className='icon'/>
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsActiveIcon  className='icon'/>
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <MedicalInformationIcon  className='icon'/>
                        <span>System Health</span>
                    </li>
                    <li>
                        <FitbitIcon  className='icon'/>
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsSuggestIcon className='icon' />
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <Person2Icon  className='icon'/>
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutIcon  className='icon'/>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption" onClick={()=> dispatch({type:"LIGHT"})}></div>
                <div className="colorOption" onClick={()=> dispatch({type:"DARK"})}></div>
            </div>
        </div>
    )
    }

    export default Sidebar
