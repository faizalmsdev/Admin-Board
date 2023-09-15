import DataTable from '../../components/DataTable/DataTable'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/sideBar/Sidebar'
import './list.scss'

    const List = () => {
    return (
        <div className='list'>
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                    <DataTable />
            </div>
        </div>
    )
    }

    export default List
