// Constants
export const PHOTOS__ADD = 'PHOTOS::ADD';

// Actions
export const addPhotos = (photos) => ({
  type: PHOTOS__ADD,
  photos
});

// Initial State
const initialState = {
  categories: {}
};

// Reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case PHOTOS__ADD:
      return {
        ...state,
        categories: { ...action.photos }
      };
    default:
      return state;
  }
};