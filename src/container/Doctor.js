import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const doctorData = [
    {
        id: 1,
        name: 'Atha Smith',
        detection: 'Chief Medical Officer',
        description: 'Duis sagittis rutrum neque, quis tincidunt arcu pretium ac.',
        url: '../assets/img/doctors/doctors-1.jpg'
    },
    {
        id: 2,
        name: 'John White',
        detection: 'Anesthesiologist',
        description: 'Aenean ac turpis ante. Mauris velit sapien.',
        url: '../assets/img/doctors/doctors-2.jpg'
    },
    {
        id: 3,
        name: 'Umika Loha',
        detection: 'Cardiology',
        description: 'Curabitur luctus eleifend odio. Phasellus placerat mi.',
        url: '../assets/img/doctors/doctors-3.jpg'
    },
    {
        id: 4,
        name: 'Daimy Smith',
        detection: 'Neurosurgeon',
        description: 'Morbi vulputate, tortor nec pellentesque molestie, eros nisi ornare purus.',
        url: '../assets/img/doctors/doctors-4.jpg'
    }
]

function Doctor(props) {

    const  [dData, setdData] = useState(doctorData)
    const {id} = useParams()


    return (
        <div>
                   
        </div>
    );
}

export default Doctor;