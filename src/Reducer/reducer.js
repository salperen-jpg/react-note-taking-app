import { OPEN_MODAL, CLOSE_MODAL } from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, isModalOpen: true };
    case CLOSE_MODAL:
      return { ...state, isModalOpen: false };

    default:
      throw new Error('The action you look for is not valid');
  }
};
