import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './dashboard.scss'


const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Sidebar/>
      <div className="dashboardContainer">
        <Navbar/>
        <div className="dashboardcontent">
          <div className="dashboardbox1" >
            <h1>250</h1>
            <h4>Students</h4>
          </div>
          <div className="dashboardbox2">
            <h1>20</h1>
            <h4>Employees</h4>
          </div>
          <div className="dashboardbox3">
            <h1>15</h1>
            <h4>Courses</h4>
          </div>
          <div className="dashboardbox4">
            <h1>69</h1>
            <h4>Admission</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard