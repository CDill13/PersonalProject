import axios from "axios";
const initialState = {
    user: {},
    date_created: "",
    name: "",
    phone_home: "",
    phone_cell: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    abana_bool: "",
    abana_num: "",
    reffered_by: ""
}

const UPDATE_MEMBERSHIP = "UPDATE_MEMBERSHIP";
const taco = "burrito"

export function getUserInfo() {
    const userData = axios.get("/auth/me").then( res => {
        console.log(res.data);
        return res.data;
    })
    return {
        type: UPDATE_MEMBERSHIP,
        payload: userData
    }
}

export default function reducer(state = initialState, action ){
    console.log(action);
    switch(action.type){
        case UPDATE_MEMBERSHIP + "_FULFILLED":
            return Object.assign({}, state, {user: action.payload})
        default: 
            return state;
    }
}

export function updateMembership(membershipInfoObject){
    return{
        type: UPDATE_MEMBERSHIP,
        payload: membershipInfoObject
    }
}

