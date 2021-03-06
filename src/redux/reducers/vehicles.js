import {
  CLEAR_DETAIL_VEHICLE,
  GET_DETAIL_VEHICLE,
  SET_REGISTERED_LOCATIONS,
  SET_VEHICLES_DATA,
} from '../../helpers/utils';

const initialState = {
  vehiclesData: [],
  detailData: {},
  registeredLocation: [],
  pageInfo: {},
};

const vehicles = (state = initialState, action) => {
  switch (action.type) {
    case SET_VEHICLES_DATA: {
      state.vehiclesData = action.payload.result;
      state.pageInfo = action.payload.pageInfo;
      return {...state};
    }
    case GET_DETAIL_VEHICLE: {
      state.detailData = action.payload;
      return {...state};
    }
    case 'GET_NEXT_DATA': {
      state.vehiclesData = [...state.vehiclesData, ...action.payload.result];
      state.pageInfo = action.payload.pageInfo;
      return {...state};
    }
    case CLEAR_DETAIL_VEHICLE: {
      state.detailData = {};
      return {...state};
    }
    case SET_REGISTERED_LOCATIONS: {
      state.registeredLocation = action.payload;
      return {...state};
    }
    default: {
      return {...state};
    }
  }
};

export default vehicles;
