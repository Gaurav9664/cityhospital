import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import { addDoctorData, getDoctorData } from '../../../redux/action/adminDoctors.action';
import AdminDoctorForm from './AdminDoctorForm';

function AdminDoctor(props) {

    const dispatch = useDispatch()
    const doctorData = useSelector(state => state.doctors)

    useEffect(() => {
        dispatch(getDoctorData())
    }, [])

    const columns = [
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'price', headerName: 'Price', width: 130 },
    ]

    const handlesubmit = (data) => {
        dispatch(addDoctorData(data))
    }

    return (
        <div>

            <AdminDoctorForm onhandlesubmit={handlesubmit} />

            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={doctorData.doctors}
                    columns={columns}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
            </div>
        </div>
    );
}

export default AdminDoctor;