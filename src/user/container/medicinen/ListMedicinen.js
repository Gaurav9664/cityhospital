import React from 'react';
import CoustamCard from '../../UI/CoustamCard';

function ListMedicinen({ mdata }) {
    return (
        <>
            {
                mdata.map((v, i) => {
                    return (
                        <div className='col-md-3'>
                            <CoustamCard value={v} />
                        </div>
                    )
                })
            }
        </>
    );
}

export default ListMedicinen;