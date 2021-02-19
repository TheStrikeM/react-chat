const initialState = {
 auth: {},
 firestore: {},
 firebase: {}
}

export default (state = initialState, { type, payload }: any) => {
    switch (type) {

    case "SET_SETTINGS":
        return { 
            ...state, 
            auth: payload.auth,
            firestore: payload.firestore,
            firebase: payload.firebase
        }

    default:
        return state
    }
}
