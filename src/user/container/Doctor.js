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

    const [pDtat, setpData] = useState(doctorData)
    const { id } = useParams()

    let fData = pDtat.filter((v) => v.id === parseInt(id))

    console.log(fData[0]);

    return (
        <section id="doctor" className="doctor">
            <div className="container">
                {

                    <div className="member d-flex align-items-start">
                        <div className="pic"><img src={fData[0].url} className="img-doctor" alt /></div>
                        <div className="member-info">
                            <h1> <span>Name :- </span> {fData[0].name}</h1>
                            <h6>{fData[0].detection}</h6>
                            <p>{fData[0].description}</p>
                            <div className="social">
                                <a href="#"><i className="ri-twitter-fill" /></a>
                                <a href="#"><i className="ri-facebook-fill" /></a>
                                <a href="#"><i className="ri-instagram-fill" /></a>
                                <a href="#"> <i className="ri-linkedin-box-fill" /> </a>
                            </div>
                        </div>
                    </div>

                }
            </div>
        </section>
    );
}

export default Doctor;