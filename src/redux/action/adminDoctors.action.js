import * as ActionTypes from '../ActionTypes'


export const getDoctors = () => (dispatch) => {
    fetch("http://localhost:3004/doctors")
        .then(repons => repons.json)
        .then(data => console.log(data))
}