import './widgets.scss';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import { useEffect, useState } from 'react';
import { collection , query , where, getDocs} from "firebase/firestore";
import {db} from "../../firebase"

    const Widgets = ({type}) => {

        const [amount,setAmount] = useState(null);
        const [diff,setDiff] = useState(null);

        let data;

        switch(type){
            case 'user':
                data={
                    title:"USERS",
                    isMoney:false,
                    link:"See all users",
                    query:"users",
                    icon:<PersonOutlineOutlinedIcon className='icon' style={{color:"crimson" , backgroundColor:"rgba(255,0,0,0.2)" ,}}/>,
                };
                break;
                case 'order':
                    data={
                        title:"ORDERS",
                        isMoney:false,
                        link:"See all ORDERS",
                        icon:<ShoppingCartCheckoutOutlinedIcon className='icon' 
                        style={{
                            color:"goldenrod" ,
                            backgroundColor:"rgba(218,165,32,0.2)" ,
                        }}/>,
                    };
                    break;
                case 'earning':
                data={
                    title:"EARNING",
                    isMoney:false,
                    link:"View net earnings",
                    icon:<MonetizationOnOutlinedIcon className='icon' style={{backgroundColor:"rgba(0,1280,0.2)" , color:"green"}}/>,
                };
                break;
                case 'product':
                data={
                    title:"PRODUCTS",
                    query:"products",
                    link:"See details",
                    icon:<AccountBalanceWalletOutlinedIcon className='icon' style={{backgroundColor:"rgba(128,0,128,0.2)" , color:"purple"}}/>,
                };
                break;
                default:
                    break;
        }

        useEffect(()=>{
            const fetchData = async ()=>{
                const today = new Date();
                const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1))
                const prevMonth = new Date (new Date().setMonth(today.getMonth() - 2))

                const lastMonthQuery = query(collection(db,data.query),where("timeStamp", "<=" , today), where("timeStamp" , ">", lastMonth))
                const prevMonthQuery = query(collection(db,data.query),where("timeStamp", "<=" , lastMonth), where("timeStamp" , ">", prevMonth))

                const lastMonthData = await getDocs(lastMonthQuery)
                const prevMonthData = await getDocs(prevMonthQuery)

                setAmount(lastMonthData.docs.length);
                if (prevMonthData.docs.length === 0) {
                    // Handle the case where the denominator is zero (division by zero)
                    setDiff(0); 
                } else {
                    // Perform the division
                    setDiff((lastMonthData.docs.length - prevMonthData.docs.length) / prevMonthData.docs.length * 100);
                }
            };
            fetchData();
        },[data.query]);

    return (
        <div className='widget'>
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "$"}{amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className={`percentage ${diff < 0 ? "negative" : "positive" }`}>
                {diff < 0 ? <KeyboardArrowDownIcon/> : <ExpandLessIcon /> }
                    {diff} %
                </div>
                {data.icon}
            </div>
        </div>
    )
    }

    export default Widgets
