import './home.scss';
import Sidebar from '../../components/sideBar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import Widgets from '../../components/Widgets/Widgets';
import Featured from '../../components/Featured/Featured';
import Chart from '../../components/Chart/Chart';
import Table from '../../components/Table/Table';

    const Home = () => {
    return (
        <div className='home'>
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                    <Widgets type='user'/>
                    <Widgets type='product'/>
                    <Widgets type='order'/>
                    <Widgets type='earning'/>
                </div>
                <div className="charts">
                    <Featured />
                    <Chart title="Last 6 Months (Revenue)" aspect={2 / 1}/>
                </div>
                <div className="listContainer">
                    <div className="listTitle">Latest Transactions</div>
                    <Table />
                </div>
            </div>
        </div>
    )
    }

    export default Home
