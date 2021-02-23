import { combineReducers } from 'redux';

import user  from './user';
import contact from './contact';
import activeUserId from './activeUserId';
import messages from './messages';
import typing from './typing';


export default combineReducers({user, contact, activeUserId, messages, typing});