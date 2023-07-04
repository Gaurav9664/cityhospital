import * as React from 'react';

import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import MedicineForm from './MedicineForm';

function Medicine(props) {

    const [data, setDate] = React.useState([])
    const [update, setUpdate] = React.useState(null)

    React.useEffect(() => {
        let localdata = JSON.parse(localStorage.getItem('medicine'))

        if (localdata !== null) {
            setDate(localdata)
        }

    }, [])


    // const hendlEdit = (data) => {
    //     handleClickOpen();
    //     formik.setValues(data);
    //     setUpdate(data)
    // }

    const hendalDelete = (id) => {
        let localdata = JSON.parse(localStorage.getItem('medicine'))

        let fData = localdata.filter((v, i) => v.id !== id);

        localStorage.setItem("medicine", JSON.stringify(fData))
        setDate(fData)
    }


    const handlesubmitdata = (data) => {
        let localdata = JSON.parse(localStorage.getItem('medicine'))

        let rnd = Math.floor(Math.random() * 1000)

        let newData = { id: rnd, ...data };


        if (localdata === null) {
            localStorage.setItem("medicine", JSON.stringify([newData]))
            setDate([newData])
        } else {
            if (update) {
                let uData = localdata.map((v, i) => {
                    if (v.id === data.id) {
                        return data;
                    } else {
                        return v;
                    }
                })
                localStorage.setItem("medicine", JSON.stringify(uData))
                setDate(uData)

            } else {
                localdata.push(newData)
                localStorage.setItem("medicine", JSON.stringify(localdata))
                setDate(localdata)
            }
        }
        setUpdate(null)
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'medicineName', headerName: 'medicineName', width: 130 },
        { field: 'expiry', headerName: 'expiry', width: 130 },
        { field: 'price', headerName: 'price', width: 130 },
        { field: 'description', headerName: 'description', width: 130 },
        {
            field: 'icone',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => (
                <>
                    <IconButton aria-label="delete" onClick={() => hendalDelete(params.row.id)}>
                        <DeleteIcon />
                    </IconButton>
                    {/* <Button variant="contained" endIcon={<ModeEditIcon />} onClick={() => hendlEdit(params.row)}>
                        Edit
                    </Button> */}
                </>
            ),
        },
    ];

    return (
        <div>

            <MedicineForm />

            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={data}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 10 },
                        },
                    }}
                    pageSizeOptions={[10, 20, 30, 40
                    ]}
                    checkboxSelection
                />
            </div>
        </div>
    );
}

export default Medicine;