import { ERROR_DOCTORS, GET_DOCTORS, LOADING_DOCTORS, POST_DOCTORS } from "../ActionTypes";

export const getDoctorData = () => (dispatch) => {
    try {
        dispatch(loadingDoctor())
        setTimeout(() => {
            fetch("http://localhost:3004/Doctor")
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error('Something went wrong');
                })
                .then((data) => dispatch({ type: GET_DOCTORS, payload: data }))
                .catch((error) => console.log(error))
        }, 3000)

    } catch (error) {
        console.log(error);
    }
}

export const addDoctorData = (data) => (dispatch) => {
    try {
        fetch("http://localhost:3004/Doctor", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => dispatch({ type: POST_DOCTORS, payload: data }))
    } catch (error) {
        console.log(error);
    }
}

export const loadingDoctor = (statuse) => (dispatch) => {
    dispatch({ type: LOADING_DOCTORS, payload: statuse })
}

export const errorDoctor = (errormsg) => (dispatch) => {
    dispatch({type: ERROR_DOCTORS, payload:errormsg})
}