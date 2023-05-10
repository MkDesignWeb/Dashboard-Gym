import { Outlet } from "react-router-dom";
import { NavigatorBar } from "../components/NavigatorBar";

export function Dashboard() {

    return (
        <div className="flex">
            <NavigatorBar />
            <Outlet />
        </div>
    )
}