import React, { useEffect, useState } from "react";
import Auth from "../user/container/Auth";
import { nativeSelectClasses } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";

const PrivetRouter = (props) => {
    let localdata = localStorage.getItem('loginStatus');

    return (
        localdata ? <Outlet /> : <Navigate to={'/auth'} replace />
    )
}

export default PrivetRouter;