import { Outlet } from "react-router-dom";
import Sidebar from "../../Content/sidebar/Sidebar";

const AppLayout = () => {
    return <div style={{
        padding: '50px 0px 0px 180px'
    }}>
        <Sidebar />
        <Outlet />
    </div>;
};

export default AppLayout;
