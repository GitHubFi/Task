


import ActionTypes from '../constant';
import dbConfig from '../../config';

export function sendDataAction(obj) {
    return dispatch => {
        dbConfig.database().ref(`Book_List`).push(obj);
    }
}

export function GetBookListAction() {

    return dispatch => {
        // dispatch(data());
        dbConfig.database().ref(`Book_List`).on('value', snapshot => {
            let user = snapshot.val();
            if (user !== null) {
                let skillkeys = Object.values(user);
                console.log("add skill", skillkeys)
                let array = []
                array.push(skillkeys)

                dispatch(GetSkill(skillkeys));
            } else {

            }

        })
    }

}
function GetSkill(skillkeys) {
    // console.log(array);
    return {
        type: ActionTypes.GET_Skill_SUCCESS,
        payload: skillkeys
    };
}
