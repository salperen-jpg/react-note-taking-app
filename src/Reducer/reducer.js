import { OPEN_MODAL, CLOSE_MODAL, HANDLE_CHANGE } from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, isModalOpen: true };
    case CLOSE_MODAL:
      return { ...state, isModalOpen: false };
    case HANDLE_CHANGE:
      const { value, name } = action.payload;
      return { ...state, note: { ...state.note, [name]: value } };
    default:
      throw new Error('The action you look for is not valid');
  }
};
