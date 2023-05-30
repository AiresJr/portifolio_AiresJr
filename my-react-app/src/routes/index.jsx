import { Route } from "react-router"
import { Routes } from "react-router-dom"
import { Home } from "../pages/home"

export const RoutesMain = () => {
    return(
        <Routes>
            <Route path="/" element= {<Home/>} />
        </Routes>
    )
}