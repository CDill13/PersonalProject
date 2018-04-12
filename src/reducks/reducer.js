const initialState = {
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


function reducer(state = initialState, action ){
    console.log(action);
    switch(action.type){
        case UPDATE_MEMBERSHIP:
            return Object.assign({}, state, action.payload);
        default: return state;
    }
}

export function updateMembership(membershipIfnoObj){
    return{
        type: UPDATE_MEMBERSHIP,
        payload: membershipIfnoObj
    }
}

export default reducer;