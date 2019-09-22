
import ActionTypes from '../constant';

const initialState = {

    Get_Book_List: null



}

export default (state = initialState, action) => {
    switch (action.type) {

        case ActionTypes.GET_Skill_SUCCESS:

            return { ...state, Get_Book_List: action.payload };

        default:
            return state;
    }
}


