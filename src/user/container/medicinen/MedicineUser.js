import React, { useEffect, useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ListMedicinen from './ListMedicinen';

function MedicineUser(props) {
    const [m_data, setm_data] = useState([])
    const [searchVal, setSearchVal] = useState("");

    useEffect(() => {
        let localdata = JSON.parse(localStorage.getItem('medicine'))

        if (localdata !== null) {
            setm_data(localdata)
        }

    }, [])

    const hendalsearch = (val) => {
        let localdata = JSON.parse(localStorage.getItem('medicine'))

        let fData = localdata.filter((v) => 
            v.medicineName.toLowerCase().includes(val.toLowerCase()) ||
            v.price.toString().includes(val)
        )

        console.log(fData);
    }

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-title">
                    <h2>Medicinen</h2>
                    <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                        blandit quam volutpat sollicitudin. Aenean ac turpis ante. Mauris velit sapien, aliquet aliquet rhoncus quis,
                        luctus at neque. Mauris sit amet massa sed orci vehicula facilisis.</p>
                </div>
            </div>
            <div className="container">
                <input type='search' name='search' onChange={(e) => hendalsearch(e.target.value)} /> 
                <div className='row'>
                    <ListMedicinen mdata={m_data} />
                </div>
            </div>
        </section>
    );
}

export default MedicineUser;