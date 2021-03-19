// Constants
export const PHOTOS__ADD = 'PHOTOS::ADD';

// Actions
export const addPhotos = (photos) => ({
  type: PHOTOS__ADD,
  photos
});

// Initial State
const initialState = {
  photos: {}
};

// Reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case PHOTOS__ADD:
      return {
        ...state,
        photos: { ...action.photos }
      };
    default:
      return state;
  }
};