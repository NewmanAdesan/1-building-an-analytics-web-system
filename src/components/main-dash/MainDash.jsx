

import './MainDash.css'
import Cards from "../cards/Cards";
import Table from '../table/Table';


const MainDash = () => {
    
    return <div className="mainDash">
        {/* heading */}
        <h1>Dashboard</h1>

        {/* cards */}
        <Cards />

        {/* table */}
        <Table />
    </div>;
    
}
export default MainDash