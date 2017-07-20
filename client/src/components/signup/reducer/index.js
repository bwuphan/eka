import { CHANGE_FORM_FIELD } from '../constants/constants';

export const initialState = {
  carrierName: '',
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  password2: '',
  passwordHint: '',
  broker: '',
  mc: '',
  usdot: '',
  ownerOrOperator: '',
};

export const signup = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FORM_FIELD:
      return ({ ...state, [action.field]: action.value });
    default:
      return state;
  }
};
