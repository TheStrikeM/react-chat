const initialState = {

}

export default (state = initialState, { type, payload }: any) => {
    switch (type) {

    case "TEST":
        return { ...state, ...payload }

    default:
        return state
    }
}
