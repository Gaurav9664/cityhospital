import React, { useEffect, useState } from "react";
import Auth from "../user/container/Auth";

const PrivetRouter = ({ privetkry }) => {
    const {} = privetkry
    const [setKey, setsetKey] = useState('')

    useEffect(() => {
        let localData = localStorage.getItem("loginData")

        if (!localData) {
            setsetKey('/auth')
        }
    }, [])


    return (
        <div>

        </div>
    )
}

export default PrivetRouter;