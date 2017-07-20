import { CHANGE_FORM_FIELD } from '../constants/constants';

export const changeFormField = (field, value) =>
  ({
    type: CHANGE_FORM_FIELD,
    field,
    value,
  });
