import {generateUser} from '../staticData';




export default function userReducer(state = generateUser(), action) {
	return state;
}
