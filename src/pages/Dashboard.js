import Header from '../components/Header'
import LateralBar from '../components/LateralBar'
import Activity from '../components/Activity'
import Performance from '../components/Performance'
import Average from '../components/Average'
import User from '../components/User'
import RightMainInfos from '../components/RightMainInfos'
import Welcome from '../components/Welcome'
import '../styles/Dashboard.css'

function Dashboard() {
    return (
        <div>
            <Header />
            <div className="dashboard_main">
                <LateralBar />
                <div className="dashboard_infos">
                    <Welcome />
                    <div className="allInfos_container">
                        <div className="charts_container">
                            <Activity />
                            <div className="charts_tryptic">
                                <Average />
                                <Performance />
                                <User />
                            </div>
                        </div>
                        <RightMainInfos />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
